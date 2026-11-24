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

// The entry must be exactly one sentence: no line breaks, no leading or
// trailing whitespace, and a single sentence-ending mark at the end.
if (
  ENTRY_TEXT !== ENTRY_TEXT.trim() ||
  ENTRY_TEXT.includes("\n") ||
  !/[.!?]$/.test(ENTRY_TEXT)
) {
  throw new Error("entry must be a single sentence with no extra whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_TEXT, "utf8");
