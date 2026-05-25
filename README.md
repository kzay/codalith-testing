# codalith-testing

## Features

### TypeScript Reverse Count Iterator (`003-ts-reverse-loop`)

Generates the integer sequence 10 down to 0 inclusive.

**Run directly:**

```sh
npm install
npx tsx src/reverseCount.ts
# Expected: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
```

**Verify export:**

```sh
node --import tsx/esm -e "import { buildReverseCountSequence } from './src/reverseCount.ts'; console.log(JSON.stringify(buildReverseCountSequence()));"
# Expected: [10,9,8,7,6,5,4,3,2,1,0]
```

See [`specs/003-ts-reverse-loop/quickstart.md`](specs/003-ts-reverse-loop/quickstart.md) for full verification steps.