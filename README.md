# Monaca Document
Source codes for Monaca Document (http://docs.monaca.io)

## Prerequisites

- Node.js v4 or v5
- Sphinx 1.3

## Installation

1. Clone the repository.
2. Run `npm install` to install dependencies.

## Build Commands

All commands are served by Gulp. Apart from using the locally installed one, you can do `npm install -g gulp` to install Gulp globally.

```
# Generate document and Website.
$ ./node_modules/.bin/gulp generate
```

```
# Run static server and serve the content. In this case, please generate the whole document first.
$ ./node_modules/.bin/gulp serve
```

Also, translation files are stored in Transifex. In order to push or pull changes to translation server, please create `config.json` and store your login credential.

```
{
    "TRANSIFEX": "UserName:Password"
}
```

# Only maintainer privilege will be able to upload/download translation files from transifex.

After this is done, `gulp generate` will automatically upload/download the translations.

## All Gulp Tasks

It has the following tasks.

```
$ ./node_modules/.bin/gulp                 # Same as generate

$ ./node_modules/.bin/gulp clean           # Clean build/ dir.

$ ./node_modules/.bin/gulp generate        # clean + sphinx + sass + metalsmith

$ ./node_modules/.bin/gulp sphinx          # sphinx-en + sphinx-ja
$ ./node_modules/.bin/gulp sphinx-en       # build-json-en + build-pot + transifex-upload
$ ./node_modules/.bin/gulp sphinx-ja       # transifex-dowonload + build-json-ja

$ ./node_modules/.bin/gulp build-json-en   # Generate JSON doc from src/doc into build/json/en
$ ./node_modules/.bin/gulp build-json-ja   # Generate JSON doc from src/doc, with src/locale/ja/ into build/json/ja
$ ./node_modules/.bin/gulp build-pot       # Generate POT to src/locale/*.pot

$ ./node_modules/.bin/gulp transifex-upload   # Upload src/locale/*.pot to server
$ ./node_modules/.bin/gulp transifex-download # Download *.po and update src/locale/ja/LC_MESSAGES/*.po

$ ./node_modules/.bin/gulp metalsmith        # metalsmith-en + metalsmith-ja
$ ./node_modules/.bin/gulp metalsmith-en     # Generate Website from build/json/en to build/web/en
$ ./node_modules/.bin/gulp metalsmith-ja     # Generate Website from build/json/ja to build/web/ja
$ ./node_modules/.bin/gulp metalsmith-common # Copy items in src/web/page/* to build/web

$ ./node_modules/.bin/gulp sass   # Build SASS in src/web/static/css

$ ./node_modules/.bin/gulp serve  # Watch for changed and run metalsmith task 

$ ./node_modules/.bin/gulp deploy # Deploy to AWS bucket
```

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
