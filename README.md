# Doculatte

> A JavaScript Docblockr-to-Markdown documentation writer.

![Gif example of Doculatte](https://media.giphy.com/media/8vNZBu4rJYB6GX6qnS/giphy.gif)

## Install

```sh
npm i -g doculatte
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

## Quick Usage with npx

```sh
npx doculatte run
```

## Basic Example

Given a basic folder structure:

```sh
.
├── five
│   └── index.js
├── four
│   └── index.js
├── one
│   └── index.js
├── seven
│   └── index.js
├── six
│   └── index.js
├── three
│   └── index.js
└── two
    └── index.js
```

With example `index.js`:

```javascript
/**
 * This file is a test example to generate DOCS.md
 * 
 * @author Dennis O'Keeffe
 */
class Mathematics {
    /**
     * Multiply the two args
     * 
     * @param {number} a 
     * @param {number} b
     * @memberof Mathematics
     */
    multiply = (a, b) => {
        return a * b;
    }

    /**
     * Add the two args together
     * 
     * @param {number} a 
     * @param {number} b 
     * @memberof Mathematics
     */
    add = (a, b) => {
        return a + b;
    }

    /**
     * Subtract the two args together
     * 
     * @param {number} a 
     * @param {number} b 
     * @memberof Mathematics
     */
    subtract = (a, b) => {
        return a - b;
    }
}
```

Running:

```sh
doculatte run
```

Will produce structure:

```sh
.
├── five
│   ├── index.js
│   └── index_docs.md
├── four
│   ├── index.js
│   └── index_docs.md
├── one
│   ├── index.js
│   └── index_docs.md
├── seven
│   ├── index.js
│   └── index_docs.md
├── six
│   ├── index.js
│   └── index_docs.md
├── three
│   ├── index.js
│   └── index_docs.md
└── two
    ├── index.js
    └── index_docs.md
```

With `index_docs.md` looking like:

```md
<a name="Mathematics"></a>

## Mathematics
This file is a test example to generate DOCS.md

**Kind**: global class  
**Author**: Dennis O'Keeffe  

* [Mathematics](#Mathematics)
    * [.multiply](#Mathematics.multiply)
    * [.add](#Mathematics.add)
    * [.subtract](#Mathematics.subtract)

<a name="Mathematics.multiply"></a>

### Mathematics.multiply
Multiply the two args

**Kind**: static property of [<code>Mathematics</code>](#Mathematics)  

| Param | Type |
| --- | --- |
| a | <code>number</code> | 
| b | <code>number</code> | 

<a name="Mathematics.add"></a>

### Mathematics.add
Add the two args together

**Kind**: static property of [<code>Mathematics</code>](#Mathematics)  

| Param | Type |
| --- | --- |
| a | <code>number</code> | 
| b | <code>number</code> | 

<a name="Mathematics.subtract"></a>

### Mathematics.subtract
Subtract the two args together

**Kind**: static property of [<code>Mathematics</code>](#Mathematics)  

| Param | Type |
| --- | --- |
| a | <code>number</code> | 
| b | <code>number</code> | 
```

## FAQ

TBD.

## License

MIT © [Dennis O'Keeffe](https://dennisokeeffe.com)
