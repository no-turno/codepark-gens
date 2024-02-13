// @bun
// lib/index.ts
var main = (cwd, name, context, shape) => {
  const file = Bun.file(cwd + "/" + name + ".d.ts");
  const result = {
    type: `${context.process.env.DECLARE_TYPES ? "declare" : "export"} type ${name} = ${Bun.inspect(shape)};` + "\n" + `export default ${name};`
  };
  return {
    error: null,
    path: cwd + "/" + name + ".d.ts",
    id: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
    result,
    [Symbol.for("gen")]: function () {
      return context.Bun.write(file, result.type);
    }
  };
};
var lib_default = {
  main
};
export {
  main,
  lib_default as default
};
