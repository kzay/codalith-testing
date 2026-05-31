/**
 * Builds the reverse count sequence from 10 down to 0 inclusive.
 * Returns a new array instance on every call (no shared mutable state).
 */
export function buildReverseCountSequence(): number[] {
  const result: number[] = [];
  for (let i = 10; i >= 0; i--) {
    result.push(i);
  }
  return result;
}

// Entry point: print sequence when run directly
const isMain =
  typeof process !== "undefined" &&
  process.argv[1] != null &&
  (process.argv[1].endsWith("reverseCount.ts") ||
    process.argv[1].endsWith("reverseCount.js"));

if (isMain) {
  console.log(buildReverseCountSequence().join(", "));
}
