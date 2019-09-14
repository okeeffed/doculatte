## Members

<dl>
<dt><a href="#fs">fs</a></dt>
<dd><p>Doculatte =&gt; JS markdown documentation builder</p></dd>
</dl>

## Functions

<dl>
<dt><a href="#run">run()</a></dt>
<dd><p>The main run function. It will pass for all .js files
in the recursive function and not in the folders specified
and generate documentation if it can.</p></dd>
<dt><a href="#setName">setName(writePath, arr, isFile)</a> ⇒ <code>string</code></dt>
<dd><p>Set document file name to be written.</p></dd>
</dl>

<a name="fs"></a>

## fs
<p>Doculatte =&gt; JS markdown documentation builder</p>

**Kind**: global variable  
**Author**: Dennis O'Keeffe  
<a name="run"></a>

## run()
<p>The main run function. It will pass for all .js files
in the recursive function and not in the folders specified
and generate documentation if it can.</p>

**Kind**: global function  
<a name="run..createFile"></a>

### run~createFile(file, writeDocsPath)
<p>Attempt to write the actual doc file</p>

**Kind**: inner method of [<code>run</code>](#run)  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>\*</code> | <p>File to convert</p> |
| writeDocsPath | <code>\*</code> | <p>Path to write it</p> |

<a name="setName"></a>

## setName(writePath, arr, isFile) ⇒ <code>string</code>
<p>Set document file name to be written.</p>

**Kind**: global function  
**Returns**: <code>string</code> - <p>Write path</p>  

| Param | Type | Description |
| --- | --- | --- |
| writePath | <code>string</code> | <p>Path to write to</p> |
| arr | <code>Array.&lt;string&gt;</code> | <p>Path split into a string array</p> |
| isFile | <code>boolean</code> | <p>Running in file or folder mode</p> |

