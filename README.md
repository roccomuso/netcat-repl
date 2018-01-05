# netcat-repl

[![NPM Version](https://img.shields.io/npm/v/netcat-repl.svg)](https://www.npmjs.com/package/netcat-repl)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Netcat-based js REPL worker


## Install

    npm install --save netcat-repl

## Usage

```javascript
const nr = require('netcat-repl')

nr({
  port: 2389,
  verbose: true
})
```

Then just do a `telnet localhost 2389` to get an interactive remote JS REPL (Read-Eval-Print-Loop) shell.

## Author

Rocco Musolino ([@roccomuso](https://twitter.com/roccomuso))

### License

@MIT
