#!/home/raymond/.nvm/versions/node/v8.9.4/bin/node

'use strict'

const program = require("commander")

program
    .command('list <components|css-frameworks>','will list from online repositories')
    .options('')
    .parse(process.argv);


