#!/usr/bin/env node

/**
 * Doculatte => JS markdown documentation builder
 *
 * @author
 * Dennis O'Keeffe
 */

var fs = require('fs-extra');
var argv = require('yargs-parser')(process.argv.slice(2));
var Signale = require('signale').Signale;
var cwd = process.cwd();
var jsdoc2md = require('jsdoc-to-markdown');
const recursive = require('recursive-readdir');
const kebabCase = require('lodash.kebabcase');
const camelCase = require('lodash.camelcase');
const startCase = require('lodash.startcase');
const snakeCase = require('lodash.snakecase');
const path = require('path');

const options = {
    types: {
        warning: {
            badge: '⚠',
            color: 'yellow',
            label: 'warning'
        }
    }
};

const signale = new Signale(options);

const help = `
    Doculatte

    Recursively build markdown docs for JS files

    Command                 Exec
    ---------------         ---------------

    doculatte help          Display help
    doculatte run [file]    Generate doc files or pass [file] as file/to/path to generate doc for specific file 

    Flags                   Function
    ---------------         ---------------
    -i                      Ignore folders (paths as folders/files divided by commas)
    -n                      Output doc name (only works for singular files)
    -t                      Output name type VALUES=[snake|start|camel|kebab] (default is snake, overriden by -n)
    -p                      Prefix doc file name (overriden by -n)
    -s                      Suffix doc file name (overriden by -n)
    -o                      path/to/output folder (moves all written doc files)
    -u                      Set output doc name to uppercase

    Examples
    $ docs run -r
    > # recursively generate docs files
    > Generated: path/to/FILE_DOCS.md
    $ docs run path/to/file.js
    > Generated: path/to/FILE_DOCS.md

    Built by Dennis O'Keeffe

    Twitter: @dendribbles
    Github: https://github.com/okeeffed
`;

/**
 * The main run function. It will pass for all .js files
 * in the recursive function and not in the folders specified
 * and generate documentation if it can.
 */
const run = async() => {
    try {
        signale.start('Running docs ' + argv._[0]);

        const createFile = (file, writeDocsPath) => {
            const mdOutput = jsdoc2md.renderSync({files: file});

            if (mdOutput !== '') {
                fs.writeFileSync(writeDocsPath, mdOutput);
                signale.success('Generated:', writeDocsPath);
            } else {
                signale.warning('DOCS.md file empty - not writing file', writeDocsPath);
            }
        };

        const isFile = typeof argv._[1] !== 'undefined'
            ? !fs
                .lstatSync(argv._[1])
                .isDirectory()
            : false;

        let target = cwd;
        if (!isFile && typeof argv._[1] !== 'undefined') {
            target = cwd + '/' + argv._[1];
        }

        let ignoreFiles = [];
        if (argv.i) {
            ignoreFiles = argv
                .i
                .split(',');
        }

        const files = isFile
            ? [argv._[1]]
            : await recursive(target, [
                'node_modules', ...ignoreFiles,
                '!*.js'
            ]);

        if (argv._[0] === 'ls') {
            signale.info('Listing files that docs can be written for...');
            files.map(d => signale.info(d));
            signale.success('doculatte ls completed');
            process.exit(0);
        }

        signale.info('Generating DOCS.md files');

        files.map(async(file) => {
            try {
                signale.info('Reading file:', file);
                // 1. Get write path
                const arr = file.split('/');
                const writePath = arr
                    .slice(0, arr.length - 1)
                    .join('/');

                const writeDocsPath = setName(writePath, arr, isFile);

                // 2. If exists, check for overwrite, else create
                createFile(file, writeDocsPath);
            } catch (err) {
                signale.error(new Error(err));
            }
        });

    } catch (err) {
        console.error(err.message);
    }
}

/**
 * Set document file name to be written.
 *
 * @param {string} writePath Path to write to
 * @param {string[]} arr Path split into a string array
 * @param {boolean} isFile Running in file or folder mode
 *
 * @returns {string} Write path
 */
const setName = (writePath, arr, isFile) => {
    let value = '';

    let suffix = ' docs.md';
    let prefix = '';

    if (argv.s) {
        suffix = ' ' + argv.s;
    }

    if (argv.p) {
        prefix = ' ' + argv.p;
    }

    switch (true) {
        case argv.n && isFile:
            value = writePath + '/' + argv.n + '.md';
            break;
        case argv.t && argv.t === 'start':
            value = writePath + '/' + startCase(arr[arr.length - 1].split('.js').join('') + suffix);
            break;
        case argv.t && argv.t === 'camel':
            value = writePath + '/' + camelCase(arr[arr.length - 1].split('.js').join('') + suffix);
            break;
        case argv.t && argv.t === 'kebab':
            value = writePath + '/' + kebabCase(arr[arr.length - 1].split('.js').join('') + suffix);
            break;
        default:
            value = snakeCase(arr[arr.length - 1].split('.js').join('') + suffix);
    }

    return writePath + '/' + value + '.md';
}

switch (true) {
    case argv._[0] === 'run' || argv._[0] === 'ls':
        run();
        break;
    default:
        console.log(help);
}