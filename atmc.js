#!/home/raymond/.nvm/versions/node/v8.9.4/bin/node

'use strict'

const program = require("commander")

program
    .version('0.0.1')   
    .description('An application for easily generating polymer elements')   
    .command('add <name>', '(Recommended) adds from an online repo, the <name> must match that as an online repo.')
//    .command('new <name>', 'create new element with name <name>')
//    .option('-s, --styling <styling-framework>', 'add a stylesheet',/^(materialize|bootstrap|foundation)$/i,'materialize')
//    .action(newElement(name))
//    .option('-s, --styling <styling-framework>', 'add a style framework','styling')
    .command('list <components|css-frameworks>','will list from online repositories')
    .parse(process.argv);
