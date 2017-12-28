# netcat-repl
Netcat-based js REPL worker


## Install

    npm install --save netcat-repl

## Usage

```javascript
const nr = require('netcat-repl')

nr.listen(2389)
```

Then just do a `telnet localhost 2389` to get a live remote JS REPL (Read-Eval-Print-Loop) shell.

## Author

Rocco Musolino ([@roccomuso](https://twitter.com/roccomuso))

### License

@MIT
