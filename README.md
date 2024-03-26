# bigtop-website

### Installation

```
$ pnpm install
```

### Local Development

```
$ pnpm start
```

### deploy site with i18n

```
$ pnpm run build
```
Docusaurus will build one single-page application per locale:

* ```website/build```: for the default, English language
* ```website/build/zh-CN```: for the zh-CN language

then deploy the build folder to the corresponding host.

Note：The i18n website uses this url strategy:

* https://docusaurus.io
* https://docusaurus.io/fr

