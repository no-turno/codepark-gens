const testFilePath = `${import.meta.dir}/Test.d.ts`;
const testFileContent = await Bun.file(testFilePath).text();

const dirFilePath = `${import.meta.dir}/Dir.d.ts`;
const dirFileContent = await Bun.file(dirFilePath).text();

const envFilePath = `${import.meta.dir}/Env.d.ts`;
const envFileContent = await Bun.file(envFilePath).text();

await Bun.write(testFilePath, "");
await Bun.write(dirFilePath, "");
await Bun.write(envFilePath, "");
