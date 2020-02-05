# strunit ![build](https://github.com/sadorlovsky/strunit/workflows/build/badge.svg) [![codecov](https://codecov.io/gh/sadorlovsky/strunit/branch/master/graph/badge.svg)](https://codecov.io/gh/sadorlovsky/strunit)

> ends a value with a unit

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
px(42)                // => '42px'
px('69')              // => '69px'
```

### pt(value: string | number): string

Points

```ts
pt(4.20)              // => '4.20pt'
pt('3.141592653')     // => '3.141592653pt'
```

### pct(value: string | number): string

Percents

```ts
pct(7)                // => '7%'
pct('13')             // => '13%'
```

### cm(value: string | number): string

Centimeters

```ts
cm(123)               // => '123cm'
cm('4815162342')      // => '4815162342cm'
```

### mm(value: string | number): string

Millimeters

```ts
mm(2012)              // => '2012mm'
mm('88005553535')     // => '88005553535mm'
```

### em(value: string | number): string

Font size of the parent element

```ts
em(666)               // => '666em'
em('911')             // => '911em'
```


### rem(value: string | number): string

Font size of the root element

```ts
rem(21)               // => '21rem'
rem('777')            // => '777rem'
```

### vw(value: string | number): string

1% of the viewport's width

```ts
vw(100)               // => '100vw'
vw('100')             // => '100vw'
```

### vh(value: string | number): string

1% of the viewport's height

```ts
vh(100)               // => '100vh'
vh('100')             // => '100vh'
```

### vmin(value: string | number): string

1% of the viewport's smaller dimension

```ts
vmin(1)               // => '1vmin'
vmin('1')             // => '1vmin'
```

### vmax(value: string | number): string

1% of the viewport's larger dimension

```ts
vmax(99)              // => '99vmax'
vmax('99')            // => '99vmax'
```

### inch(value: string | number): string

Inches

```ts
inch(9)               // => '9in'
inch('3.5')           // => '3.5in'
```

### pc(value: string | number): string

Picas

```ts
pc(1881)              // => '1881pc'
pc('1973')            // => '1973pc'
```

### Q(value: string | number): string

Quarter-millimeters

```ts
Q(3.79)               // => '3.79Q'
Q('4.79')             // => '4.79Q'
```

### ex(value: string | number): string

X-height of the element's font

```ts
ex(1)                 // => '1ex'
ex('s')               // => 'sex'
```

### ch(value: string | number): string

The advance measure (width) of the glyph "0" of the element's font

```ts
ch(0)                 // => '0ch'
ch('not')             // => 'notch'
```

### custom(value: string | number, unit: string): string

```ts
custom(63, 'region')  // => '63region'
custom(43, '°C')      // => '43°C'
```
