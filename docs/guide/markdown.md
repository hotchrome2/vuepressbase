---
lang: en-US
title: Guide Markdown
description: Description of this page
---

navbar: False
<!-- relative path -->
[Home](../index.md)

[Config Reference](../reference/config.md)

[Getting Started](./getting-started.md)
<!-- absolute path -->
[Guide](/guide/index.md)

[Guide page](/guide/page.md)

[Config Reference > markdown.links](/reference/config.md#links)
<!-- URL -->
[GitHub](https://github.com)

VuePress 2 is out :tada: !

```ts{1,6-8}
import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: 'Hello, VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```