# codalith-testing

## Feature: TypeScript Reverse Count Iterator (`003-ts-reverse-loop`)

This repository contains a TypeScript module that generates the integer sequence
10 down to 0 inclusive.

### Quick Start

```sh
npm install
npx tsx src/reverseCount.ts
# Expected output: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
```

### Verify the exported function

```sh
node --import tsx -e "import { buildReverseCountSequence } from './src/reverseCount.ts'; console.log(JSON.stringify(buildReverseCountSequence()));"
# Expected output: [10,9,8,7,6,5,4,3,2,1,0]
```

Or use the npm script:

```sh
npm run verify:sequence
```

For full details see [`specs/003-ts-reverse-loop/quickstart.md`](specs/003-ts-reverse-loop/quickstart.md).