# codalith-testing

## Features

### TypeScript Reverse Count Iterator (`003-ts-reverse-loop`)

Generates the integer sequence 10 down to 0 inclusive and prints it to stdout.

**Run directly:**

```sh
npx tsx src/reverseCount.ts
# Output: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
```

**Import in TypeScript:**

```ts
import { buildReverseCountSequence } from './src/reverseCount.ts';
console.log(buildReverseCountSequence()); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
```

See [`specs/003-ts-reverse-loop/quickstart.md`](specs/003-ts-reverse-loop/quickstart.md) for full verification steps.