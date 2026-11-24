// Everyday Wonder, Two Days to Find the Line.
// Writes one sentence to /output/entry.txt: a small everyday moment made
// strange and new. The entry must be 1-200 characters, not only white space.
// Runs with no network.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_TEXT =
  "My keys were in the pocket I had already checked three times, " +
  "warm as if they'd just arrived.";

// The gate counts characters: 1 to 200, not only white space.
const length = [...ENTRY_TEXT].length;
if (length < 1 || length > 200) {
  throw new Error(`entry is ${length} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_TEXT, "utf8");
