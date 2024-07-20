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

