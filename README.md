# node-starter-template

Simple starter template for basic node setups using bun as the package manage, test runner and build compiler:

- Linting (using eslint)
- Code formatting (using prettier)
- Unit/integration testing (using bun)

Setup to allow running the code using bun at runtime or to build and bundle in node ESM format.

## Getting started

- **build** Uses /src/index.ts as an entry point and outputs the build to the /build directory in node's ESM format
- **typeCheck** builds the code in memory, without emitting the result, using tsc to check the types.
- **test** runs all unit/integration tests using the bun compiler for rapid test results. Also appends test coverage
- **start** runs the src/index.ts using bun.
- **dev** as per start but also includes hot module re-loading
- **lint** runs linting using eslint. Base rules by the [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
