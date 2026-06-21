# uuidv7-isomorphic

A lightweight UUIDv7 generator and decoder with TypeScript support, built to run on both the server and the client. It uses the standard `crypto` API, so it works in Node.js, modern browsers, and edge runtimes such as Cloudflare Workers — with no dependencies.

## Installation

```bash
npm install uuidv7-isomorphic
# or
pnpm add uuidv7-isomorphic
# or
yarn add uuidv7-isomorphic
```

## Usage

```typescript
import { uuid_generate_v7, uuid_decode_v7, isUUIDv7, UUIDv7Regex } from 'uuidv7-isomorphic';

// Generate a UUIDv7
const uuid = uuid_generate_v7();
console.log(uuid); // "0195acfc-48db-7a33-9997-f86dffc91039"

// Decode a UUIDv7 to get the embedded timestamp
const timestamp = uuid_decode_v7(uuid);
console.log(timestamp); // milliseconds since epoch (Jan 1, 1970)

// Validate a UUIDv7 string (type guard)
if (isUUIDv7(uuid)) {
  console.log('Valid UUIDv7!');
}

// Or use the regex directly for custom validation
const isValid = UUIDv7Regex.test(uuid);
```

A default export is also available with both functions:

```typescript
import uuidv7 from 'uuidv7-isomorphic';

const uuid = uuidv7.uuid_generate_v7();
const ts = uuidv7.uuid_decode_v7(uuid);
```

## API

### `uuid_generate_v7(): UUIDv7`

Generates a UUIDv7 using the `crypto` API, compatible with Cloudflare Workers and modern browsers.

**Returns:** A UUIDv7 string in the format `TTTTTTTT-TTTT-7XXX-bXXX-XXXXXXXX`, where `T` represents the timestamp and `X` represents random values.

### `uuid_decode_v7(uuid: UUIDv7): number`

Decodes a UUIDv7 into the timestamp embedded in its first 48 bits.

**Parameters:**
- `uuid` — the UUIDv7 to decode.

**Returns:** The timestamp in milliseconds since epoch (Jan 1, 1970).

### `isUUIDv7(s: string): s is UUIDv7`

Type guard that validates whether a string is a well-formed UUIDv7.

**Parameters:**
- `s` — the string to validate.

**Returns:** `true` if the string is a valid UUIDv7.

### `UUIDv7Regex: RegExp`

Regular expression used to validate UUIDv7 strings.

### `UUIDv7`

A branded `string` type representing a valid UUIDv7.

## License

MIT © onlyTheOnionNews
