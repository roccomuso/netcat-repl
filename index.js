const NetcatServer = require('netcat').server
const {fork} = require('child_process')

console.log('Started!')

function forkWorker () {
  return fork('./worker.js', {
    stdio: [
      'pipe',
      'pipe', // Pipe child's stdout to parent
      'pipe', // child's stderr to parent
      'ipc'
    ]
  })
}

let nc = new NetcatServer()
let workers = {}

exports.listen = function (port) {

  nc.k().port(port).listen().on('connection', function(socket){
    console.log(`${socket.id} connected`)
    let worker = workers[socket.id] = forkWorker()
    socket.pipe(worker.stdin)
    worker.stdout.pipe(socket)
  }).on('clientClose', function(socket){
    console.log(`${socket.id} disconnected`)
    workers[socket.id].kill()
  })

}
