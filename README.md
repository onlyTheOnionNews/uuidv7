# @eluktronics/uuidv7

A lightweight UUIDv7 generator and decoder with TypeScript support, organized as an Nx workspace.

## Workspace Structure

```
├── libs/
│   └── uuidv7/           # UUIDv7 library
│       ├── src/
│       │   └── index.ts  # Main source file
│       ├── package.json  # Package configuration
│       ├── project.json  # Nx project configuration
│       └── tsconfig.json # TypeScript configuration
├── nx.json               # Nx workspace configuration
├── package.json          # Root workspace configuration
└── tsconfig.base.json    # Base TypeScript configuration
```

## Installation

```bash
pnpm install
```

## Building

Build the library:

```bash
pnpm build
# or
nx build uuidv7
```

## Versioning

This workspace uses Nx's built-in versioning system. To version the library:

```bash
# Version the library (patches version)
nx version uuidv7

# Version with specific release type
nx version uuidv7 --releaseType minor
nx version uuidv7 --releaseType major
```

## Publishing

Publish to npm:

```bash
nx publish uuidv7
```

Or use the release command which handles both versioning and publishing:

```bash
nx release
```

## Documentation

Generate TypeDoc documentation:

```bash
pnpm docs
# or
nx docs uuidv7
```

## Usage

```typescript
import { uuid_generate_v7, uuid_decode_v7, isUUIDv7, UUIDv7Regex } from '@eluktronics/uuidv7';

// Generate a UUIDv7
const uuid = uuid_generate_v7();
console.log(uuid); // "0195acfc-48db-7a33-9997-f86dffc91039"

// Decode a UUIDv7 to get the timestamp
const timestamp = uuid_decode_v7(uuid);
console.log(timestamp); // milliseconds since epoch

// Validate a UUIDv7 string
if (isUUIDv7(uuid)) {
  console.log('Valid UUIDv7!');
}

// Use the regex for custom validation
const isValid = UUIDv7Regex.test(uuid);
```

## API

### `uuid_generate_v7(): UUIDv7`

Generates a UUIDv7 using the crypto API compatible with Cloudflare and modern browsers.

**Returns:** A UUIDv7 string in the format `TTTTTTTT-TTTT-7XXX-bXXX-XXXXXXXX` where T represents timestamp and X represents random values.

### `uuid_decode_v7(uuid: UUIDv7): number`

Decodes a UUIDv7 into a timestamp.

**Parameters:**
- `uuid` - The UUIDv7 to decode

**Returns:** The timestamp in milliseconds since epoch (Jan 1, 1970)

### `isUUIDv7(s: string): s is UUIDv7`

Type guard to validate if a string is a valid UUIDv7.

**Parameters:**
- `s` - The string to validate

**Returns:** `true` if the string is a valid UUIDv7

### `UUIDv7Regex: RegExp`

Regular expression for validating UUIDv7 strings.

## License

MIT © ELUKTRONICS
