import { fileURLToPath } from "url";
import { resolve } from "path";

export function buildReverseCountSequence(): number[] {
  const result: number[] = [];
  for (let i = 10; i >= 0; i--) {
    result.push(i);
  }
  return result;
}

// Print sequence when run directly (e.g. `npx tsx src/reverseCount.ts`)
if (resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  console.log(buildReverseCountSequence().join(", "));
}
