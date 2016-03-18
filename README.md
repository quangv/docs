# monaca-docs
Source codes for Monaca Document (http://docs.monaca.mobi)

## How to build docs

```
$ make dirhtml
```

### make options

<dl>

<dt>dirhtml</dt>
<dd>Make both English and Japanese documents for current version</dd>

<dt>dirhtml-en</dt>
<dd>Make only English documents</dd>

<dt>dirhtml-ja</dt>
<dd>Make only Japanese documents</dd>

<dt>dirhtml-all</dt>
<dd>Make entire pages including legacy versions</dd>

<dt>i18n</dt>
<dd>Update .pot files</dd>
</dl>


## Translation flow

1. Write English document using ReST Format
2. Update .po files by executing:
```
make i18n
```
3. Open .po file in POEdit and translate the document into Japanese
4. "make dirhtml" to generate documents

## ReST TIPS

<dl>

<dt>.. \_anchor: </dt>
<dd>Set anchor on specified position.</dd>

<dt>:ref:\`Label<anchor>\` </dt>
<dd>Link to anchor with Label. *Single space may be required after/before grave accents.*<dd>

<dt>:ref:\`anchor\` </dt>
<dd>Link to anchor. Label will be the title of destination page.<dd>

<dt>:doc:\`relativePath\` </dt>
<dd>Link to target page by specifying relative path directly.</dd>

<dl>
