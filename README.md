# `popcnt32`

> Calculate population count (popcnt) on a 32-bit number, branch free

## Usage

```js
var popcnt32 = require('popcnt32')

popcnt32(0b1) // 1
popcnt32(0b1000001) // 2
```

## API

### `const ones = popcnt32(int)`

Return number of 1-bits in `int`. Int is implicitly cast to a 32-bit unsigned
int. This means `popcnt32(-1) === 32` while `popcnt32(1) === 1`

## Install

```sh
npm install popcnt32
```

## License

[ISC](LICENSE)
