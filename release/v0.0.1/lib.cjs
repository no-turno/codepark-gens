/**
 * @type {{ main: import('./gens.d.ts').RunGens }}
 */
const gens = require("./lib/index.cjs");

module.exports = gens;