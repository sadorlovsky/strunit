# strunit [![](https://github.com/sadorlovsky/strunit/workflows/build/badge.svg)](#strunit)

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
px(42)              // => '42px'
px('69')            // => '69px'
```

### pt(value: string | number): string

Points

```ts
pt(4.20)            // => '4.20pt'
pt('3.141592653')   // => '3.141592653pt'
```

### pct(value: string | number): string

Percents

```ts
pct(7)              // => '7%'
pct('13')           // => '13%'
```

### cm(value: string | number): string

Centimeters

```ts
cm(123)             // => '123cm'
cm('4815162342')    // => '4815162342cm'
```

### mm(value: string | number): string

Millimeters

```ts
mm(2012)            // => '2012mm'
mm('88005553535')   // => '88005553535mm'
```

### em(value: string | number): string

Font size of the parent element

```ts
em(666)             // => '666em'
em('911')           // => '911em'
```


### rem(value: string | number): string

Font size of the root element

```ts
rem(21)             // => '21rem'
rem('777')          // => '777rem'
```
