import "../types/EnvTypeGens";

export const main = <T = unknown>(
  cwd: string,
  name: string,
  context: typeof globalThis,
  shape: T
): CodeparkTypeGens.GensOutput => {
  const file = Bun.file(cwd + "/" + name + ".d.ts");

  const result = {
    type:
      `${
        context.process.env.DECLARE_TYPES ? "declare" : "export"
      } type ${name} = ${Bun.inspect(shape)};` +
      "\n" +
      `export default ${name};`,
  };
  return {
    error: null,
    path: cwd + "/" + name + ".d.ts",
    id: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
    result: result,
    [Symbol.for("gen")]: function () {
      return context.Bun.write(file, result.type!);
    },
  };
};

export default {
  main,
};
