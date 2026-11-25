// Alien Field Notes: The Two Day Earth Review
// One line of plain text: a review of planet Earth by an alien tourist.
//
// The program writes exactly one line to /output/entry.txt. The line is a
// fixed string, so the output is deterministic: every run writes the same
// bytes, and the grader's two runs agree byte for byte.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The review: four stars, a real tourist verdict up front, then one outsider
// observation told once — the locals run their sprinklers in the rain and
// blame the planet when the water runs out — with the punch at the end.
const LINE =
  "Four stars: a lovely blue planet where locals water the lawn while it rains, then blame the planet for running out of water.";

if (LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error("entry line must be 1-200 non-blank characters");
}

const out = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, LINE + "\n", "utf8");
