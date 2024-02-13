import gens from "../../../release/v0.0.1/lib.cjs";

gens.main(
    import.meta.dir + "/.codepark/temp",
    'Env',
    globalThis,
    {}
)[Symbol.for("gen")]();