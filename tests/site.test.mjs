import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(path, import.meta.url), "utf8");

test("both pages disclose that claims are fictional or unverified", async () => {
  const pages = await Promise.all([read("../site/index.html"), read("../site/product.html")]);
  for (const page of pages) {
    assert.match(page, /Fictional|fictional|Training concept/);
    assert.match(page, /not (verified|submit|claimed)|require verification/);
  }
});

test("both pages provide accessible navigation and responsive metadata", async () => {
  const pages = await Promise.all([read("../site/index.html"), read("../site/product.html")]);
  for (const page of pages) {
    assert.match(page, /name="viewport"/);
    assert.match(page, /aria-label="Main navigation"/);
    assert.match(page, /aria-expanded="false"/);
  }
});

test("target account file contains 30 sourced accounts plus header", async () => {
  const accounts = await read("../research/target-accounts.csv");
  const rows = accounts.trim().split("\n");
  assert.equal(rows.length, 31);
  assert.equal(rows.filter((row) => row.includes("https://")).length, 30);
});
