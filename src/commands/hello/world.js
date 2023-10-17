'use strict'

let cli = require('heroku-cli-util')

async function run() {
  cli.log('hello world! (./src/commands/hello/world.js)')
}

module.exports = {
  description: 'Say hello world',
  needsApp: true,
  needsAuth: true,
  example: `<%= config.bin %> <%= command.id %>
hello world! (./src/commands/hello/world.ts)
`,
  run: cli.command(run),
}


