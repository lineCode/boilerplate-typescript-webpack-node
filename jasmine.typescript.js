// Typescript compiler for Jasmine CLI in non-Wallaby mode
require('ts-node').register({
	skipIgnore: true,
	compilerOptions: {
		module: 'CommonJS'
	}
});
