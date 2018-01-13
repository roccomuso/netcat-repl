const NetcatServer = require('netcat').server
const {fork} = require('child_process')
function noop () {}

const WORKER_SCRIPT = './worker.js'

function forkWorker () {
  return fork(WORKER_SCRIPT, {
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

module.exports = function ({verbose, port}) {
  if (!verbose) console.log = noop
  port = port || process.env.PORT

  console.log('Started!')
  nc.k().port(port).listen().on('connection', function (socket) {
    console.log(`${socket.remoteAddress}:${socket.remotePort} (${socket.id}) - connected`)
    let worker = workers[socket.id] = forkWorker()
    socket.pipe(worker.stdin)
    worker.stdout.pipe(socket)
  }).on('clientClose', function (socket) {
    console.log(`${socket.remoteAddress}:${socket.remotePort} (${socket.id}) - disconnected`)
    workers[socket.id].kill()
  })
}
