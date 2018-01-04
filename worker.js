const repl = require('repl')

console.log('REPL worker started')

let replServer = repl.start('> ')

replServer.on('exit', () => {
  console.log('Received "exit" event from repl!')
  process.exit()
})

replServer.on('reset', function () {
  console.log('context reset')
})
