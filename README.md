# codalith-testing

## Feature: TypeScript Reverse Count Iterator (`003-ts-reverse-loop`)

Generates the integer sequence 10 down to 0 inclusive via a descending loop.

**Source**: `src/reverseCount.ts`  
**Spec & quickstart**: [`specs/003-ts-reverse-loop/quickstart.md`](specs/003-ts-reverse-loop/quickstart.md)

### Run

```bash
npm install
npx tsx src/reverseCount.ts
# Expected: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
```

### Verify export

```bash
node --import tsx -e "import { buildReverseCountSequence } from './src/reverseCount.ts'; console.log(JSON.stringify(buildReverseCountSequence()));"
# Expected: [10,9,8,7,6,5,4,3,2,1,0]
```

Or use the npm script:

```bash
npm run verify:sequence
```