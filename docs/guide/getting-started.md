---
lang: en-US
title: Guide index
description: Description of this page
---

# start

## マスタッシュ
One plus one equals: {{ 1 + 1 }}

## v-for
<p v-for="i in 3"> p tag: {{ i }} </p>
<span v-for="i in ['cat', 'dog', 'mouse']"> animal: {{ i }} --</span>

Badge component <Badge text="demo" />

## Badge component
- VuePress - <Badge type="tip" text="v2" vertical="top" />
- VuePress - <Badge type="warning" text="v2" vertical="middle" />
- VuePress - <Badge type="danger" text="v2" vertical="bottom" />

## code group
<CodeGroup>
  <CodeGroupItem title="YARN">

```bash:no-line-numbers
yarn
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM" active>

```bash:no-line-numbers
npm install
```

  </CodeGroupItem>
</CodeGroup>