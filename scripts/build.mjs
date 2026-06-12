import { cp, mkdir, rm } from "node:fs/promises";

const outputDirectory = new URL("../dist/", import.meta.url);
const siteDirectory = new URL("../site/", import.meta.url);

await rm(outputDirectory, { force: true, recursive: true });
await mkdir(outputDirectory, { recursive: true });
await cp(siteDirectory, outputDirectory, { recursive: true });

console.log("Built static site in dist/");
