export function buildReverseCountSequence(): number[] {
  const result: number[] = [];
  for (let i = 10; i >= 0; i--) {
    result.push(i);
  }
  return result;
}

// Entry point: print sequence when run directly
import { fileURLToPath } from 'url';
import { resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
if (process.argv[1] && resolve(process.argv[1]) === resolve(__filename)) {
  console.log(buildReverseCountSequence().join(', '));
}
