# Doculatte

> A JavaScript Docblockr-to-Markdown documentation writer.

![Gif example of Doculatte](https://media.giphy.com/media/8vNZBu4rJYB6GX6qnS/giphy.gif)

## Install

```sh
$ yarn add doculatte --dev
# or
$ npm install --save-dev doculatte
```

## Usage

```sh
$ doculatte help

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
    -s                      Suffix doc file name (overriden by -n, default is "docs")
    -u                      Set output doc name to uppercase

    Examples
    ---

    $ doculatte run
    > # recursively generate docs files
    > Generated: path/to/file_docs.md

    $ doculatte run path/to/file.js
    > Generated: path/to/file_docs.md

    $ doculatte run path/to/file.js -p prefix -s suffix -u
    > Generated: path/to/PREFIX_FILE_SUFFIX.md

    $ doculatte run path/to/file.js -p prefix -s suffix -u -t kebab
    > Generated: path/to/PREFIX-FILE-SUFFIX.md

    $ doculatte run path/to/file.js -p prefix -s suffix -t camel
    > Generated: path/to/prefixFileSuffix.md

    $ doculatte run path/to/file.js -p prefix -s suffix -t start
    > Generated: path/to/Prefix File Suffix.md

    $ doculatte run path/to/file.js -n custom-name
    > Generated: path/to/custom-name.md

    $ doculatte run -i folderOne,folderTwo,folderThree
    > NOT Generated: path/to/folderOne/custom-name.md ...

    Built by Dennis O'Keeffe

    Twitter: @dendribbles
    Github: https://github.com/okeeffed
```

## Quick Usage

```sh
npx doculatte run
```

## FAQ

TBD.

## License

MIT © [Dennis O'Keeffe](https://dennisokeeffe.com)
