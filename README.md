# Boilerplate: Node Script (webpack 4)

[![Greenkeeper badge](https://badges.greenkeeper.io/wildpeaks/boilerplate-typescript-webpack-node.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/wildpeaks/boilerplate-typescript-webpack-node.svg?branch=master)](https://travis-ci.org/wildpeaks/boilerplate-typescript-webpack-node)

Boilerplate for Node scripts that should be bundled to JS for production (e.g. Ubuntu services).


-------------------------------------------------------------------------------

## Sources

The entry point is `/src/script.ts`.

Additional code is stored in **Local Modules** in `/src/node_modules`.
so no configuration is required for custom resolution paths in every tool of your toolchain
because it uses the [native Node resolution model](https://nodejs.org/api/modules.html#modules_all_together).

This way, modules can be referenced with clean paths like `classes/MyClass`
instead of brittle relative paths like `../../../classes/MyClass/MyClass.ts`.


-------------------------------------------------------------------------------

## Build the bundle

The default **Build Task** for VSCode compiles to `/lib/script.min.js`.


-------------------------------------------------------------------------------

## Debug the script

VSCode Debug has two configurations:
 - **Node Inspector (TS)** for running the Typescript version directly (using ts-node)
 - **Node Inspector (JS)** for running the bundled Javascript version


-------------------------------------------------------------------------------

## Tests

Configured for Jasmine.

Tests should have the extension `.spec.ts`, and are run in Node.

If you have [Wallaby for VSCode](https://wallabyjs.com),
you can also get realtime feedback from the tests directly in VSCode.

-------------------------------------------------------------------------------

## Linting

VSCode is configured for linting Typescript with [ESlint](https://eslint.org) using the
[@wildpeaks/typescript](https://www.npmjs.com/package/@wildpeaks/eslint-config-typescript) shared config.

-------------------------------------------------------------------------------

