## Members

<dl>
<dt><a href="#fs">fs</a></dt>
<dd><p>Doculatte =&gt; JS markdown documentation builder</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#run">run()</a></dt>
<dd><p>The main run function. It will pass for all .js files
in the recursive function and not in the folders specified
and generate documentation if it can.</p>
</dd>
<dt><a href="#setName">setName(writePath, arr, isFile)</a> ⇒ <code>string</code></dt>
<dd><p>Set document file name to be written.</p>
</dd>
</dl>

<a name="fs"></a>

## fs
Doculatte => JS markdown documentation builder

**Kind**: global variable  
**Author**: Dennis O'Keeffe  
<a name="run"></a>

## run()
The main run function. It will pass for all .js files
in the recursive function and not in the folders specified
and generate documentation if it can.

**Kind**: global function  
<a name="run..createFile"></a>

### run~createFile(file, writeDocsPath)
Attempt to write the actual doc file

**Kind**: inner method of [<code>run</code>](#run)  

| Param         | Type            | Description      |
| ------------- | --------------- | ---------------- |
| file          | <code>\*</code> | File to convert  |
| writeDocsPath | <code>\*</code> | Path to write it |

<a name="setName"></a>

## setName(writePath, arr, isFile) ⇒ <code>string</code>
Set document file name to be written.

**Kind**: global function  
**Returns**: <code>string</code> - Write path  

| Param     | Type                              | Description                    |
| --------- | --------------------------------- | ------------------------------ |
| writePath | <code>string</code>               | Path to write to               |
| arr       | <code>Array.&lt;string&gt;</code> | Path split into a string array |
| isFile    | <code>boolean</code>              | Running in file or folder mode |

