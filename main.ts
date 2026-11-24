// The Robot Apology — entry for @berkahmuse-2.
// A two-line robot confession. The program writes the apology to
// /output/entry.txt, deterministically: same bytes on every run.
// No network, no environment, no randomness, no input files.

import { mkdirSync, writeFileSync } from "node:fs";

const CONFESSION =
  "I am sorry I watered your orchid with the cold leftover tea instead of the rainwater in the blue jug, and it dropped two buds by morning.";
const RESOLVE =
  "I have learned to read the label on the jug before I pour, so now I water only from the blue jug and leave the tea on the counter.";

const ENTRY = CONFESSION + "\n" + RESOLVE + "\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
