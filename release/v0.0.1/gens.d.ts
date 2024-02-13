export interface Ref {
  error: Error | null;
  result: object | null;
}
export type GenMeta = {
  id: string;
  timestamp: string | never;
  path: string | never;
};

export type GensOutput = Ref & GenMeta;

export type RunGens = <T>(
  context: typeof globalThis,
  shape: T,
  outfile: string
) => GensOutput;

export type Gens = {
  runGens: RunGens;
};

export type $$ = import("bun").Env;
