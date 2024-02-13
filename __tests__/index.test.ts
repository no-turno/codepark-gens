import { describe, expect, test, it } from "bun:test";
import { main } from "../lib/index.ts";

let current = 0;

describe("env-type-gens", async () => {
  it("should generate Test definitions", async () => {
    const out = main(import.meta.dir, "Test", globalThis, {
      test: true,
    });

    await out[Symbol.for("gen")]();
    const testFilePath = `${import.meta.dir}/Test.d.ts`;
    const testFileContent = await Bun.file(testFilePath).text();

    expect(out.result).toEqual({
      type: testFileContent,
    });
  });

  it("should generate Dir definitions", async () => {
    const out = main(import.meta.dir, "Dir", globalThis, {
      dir: import.meta.dir,
    });

    out[Symbol.for("gen")]();
    const dirFilePath = `${import.meta.dir}/Dir.d.ts`;
    const dirFileContent = await Bun.file(dirFilePath).text();

    expect(out.result).toEqual({
      type: dirFileContent,
    });
  });

  it("should generate Env definitions", async () => {
    const out = main(import.meta.dir, "Env", globalThis, {
      NODE_ENV: process.env.NODE_ENV,
      PORT: process.env.PORT,
    });

    await out[Symbol.for("gen")]();
    const envFilePath = `${import.meta.dir}/Env.d.ts`;
    const envFileContent = await Bun.file(envFilePath).text();
    expect(out.result).toEqual({
      type: envFileContent,
    });
  });
});
