# bigtop-website

### Installation

```shell
$ pnpm install
```

### Local Development

```shell
$ pnpm start
```

### run with i18n

```shell
# https://docusaurus.io/docs/i18n/introduction
$ pnpm run start -- --locale zh-CN
```

### deploy site with i18n

```shell
$ pnpm run build
```
Docusaurus will build one single-page application per locale:

* ```website/build```: for the default, English language
* ```website/build/zh-CN```: for the zh-CN language

then deploy the build folder to the corresponding host.

Note：The i18n website uses this url strategy:

* https://docusaurus.io
* https://docusaurus.io/fr

### About translate this site

#### 1. translate documents (markdown files)

If you want help to translate the md documents, Just copy the Markdown files from ```docs/``` to ```i18n/zh-CN/docusaurus-plugin-content-docs/current```. And then translate them.

doucments in folder ```docs/``` is belong to latest document.

**note: Keep the file structure not changed.**

For example: 
```docs/getting-started/a.md``` 

is corresponding to:

```i18n/zh-CN/docusaurus-plugin-content-docs/current/getting-started/a.md```

For versioned docuemnst, the folder's corresponding relationship is like:

```versioned_docs/version-3.2.1/test/b.md```

to

```i18n/zh-CN/docusaurus-plugin-content-docs/version-3.2.1/test/b.md```

#### 2. translate react page

To translate texts in pages or components writen by ourself，we need to do this:

1) marking all the text in react code with translation APIs:

* The ```<Translate>``` component wraps a string as a JSX element;

* The ```translate()``` callback takes a message and returns a string.

  like this:

  ```
  <Translate>test</Translate>
  ```

2) Give an ID to each translated text，for example：

  ```
    <Translate id="page.index.Test text">test</Translate>
  ```

  The format of the ID string should be similar to IDs in other translation file.

3) run this command to automatic extract text which need to be translated.

  ```pnpm run write-translations --locale zh-CN```

  After that, you will find some new json file in i18n folder. Then，you can do the translation in those json file.
  
  **note 1:** you can delete the file (or the properties in json) which you don't want to translate. (but don't delete the file which already tranlated by others).

  **note 2:** If you do not want to generate a new JSON file using commands, you can directly configure the corresponding i18n data items in the code.json file. like this：

  ```
  {
    "page.index.Get Started": {
      "message": "开始教程"
    }
  }
  ```
  In the code above, the key of the Object is ID we set. And the value of "message" is the translate result.

#### 3. run develop server with tranleted files

If you want to check the result of tranlation in develop enviroment, just run this command:

```
pnpm start --locale zh-CN
```

you can replace "zh-CN" to other language when we add support for other languages in the future.
