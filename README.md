# strunit

> ends a value with an unit

Do that?

```js
const width = 100
document.querySelector('div').style.width = `${width}px`
```

Please, don't. Use `strunit`!

## Usage

```bash
yarn add strunit
```

```ts
import { px } from 'strunit'

const width = 100
document.querySelector('div').style.width = px(width)
```

## API

### px(value: string | number): string

Pixels

```ts
px(42)             // => '42px'
px('69')           // => '69px'
```

### pt(value: string | number): string

Points

```ts
pt(4.20)           // => '4.20pt'
pt('3.141592653')  // => '3.141592653pt'
```
