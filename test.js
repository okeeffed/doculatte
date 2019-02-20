const test = require('ava');
const execa = require('execa');
const fs = require('fs-extra');
const recursive = require('recursive-readdir');
var cwd = process.cwd();

test('should return help text', async t => {
    const {stdout} = await execa('./cli.js', ['help']);
    t.regex(stdout, /Recurisvely build markdown docs for JS files/gm);
});

test('should return help when no valid argument pass', async t => {
    const {stdout} = await execa('./cli.js', ['howdy']);
    t.regex(stdout, /Recurisvely build markdown docs for JS files/gm);
});

test.serial('should generate .md files in tmp dir recursively', async t => {
    const {stdout} = await execa('./cli.js', ['run', 'tmp']);
    const files = await recursive('./tmp', ['!*.md']);
    t.is(7, files.length);
    t.regex(stdout, /Generating DOCS.md files/gm);
});

test.serial('should generate .md file for tmp/one/index.js', async t => {
    const {stdout} = await execa('./cli.js', ['run', 'tmp/one/index.js']);
    const files = await recursive('./tmp', ['!*.md']);
    t.is(1, files.length);
    t.regex(stdout, /Generating DOCS.md files/gm);
});

test.serial('should correctly ignore when using "-i five,four,three,two,one"', async t => {
    const {stdout} = await execa('./cli.js', ['run', 'tmp', '-i', 'five,four,three,two,one']);
    const files = await recursive('./tmp', ['!*.md']);
    t.is(2, files.length);
    t.regex(stdout, /Generating DOCS.md files/gm);
});

test.serial('should correctly name output when passing "-n my-custom-name"', async t => {
    const {stdout} = await execa('./cli.js', ['run', 'tmp/five/index.js', '-n', 'my-custom-name']);
    const files = await recursive('./tmp', ['!*.md']);
    t.is(1, files.length);
    t.regex(stdout, /Generated: tmp\/five\/my-custom-name.md/gm);
});

test.serial('should correctly use type "-t snake"', async t => {
    const {stdout} = await execa('./cli.js', ['run', 'tmp/five/index.js', '-t', 'snake']);
    const files = await recursive('./tmp', ['!*.md']);
    t.is(1, files.length);
    t.regex(stdout, /Generated: tmp\/five\/my-custom-name.md/gm);
});

/**
 * Remove all .md from tmp dir before
 * running test using before hook.
 */
test.beforeEach(t => {
    cleanup();
});

const cleanup = async() => {
    const files = await recursive(cwd + '/tmp', ['!*.md']);
    for (let f of files) {
        fs.removeSync(f);
    }
}
