# Boilerplate: Ubuntu service

Cron-style Node script to be run in production as Ubuntu service.

Compiled by Webpack as `target: node` (instead of merely emitting a copy of `/src` using TSC) because:
 - thirdparty `node_modules` might have Typescript as well
 - probably slightly faster startup because it's a single file to deploy and run, and is minified by uglify-es
 - has the option to add more loaders

Commands:
 - `npm run build`: compiles the JS script for production
 - `npm start`: runs `/lib/compiled.js`
 - `npm test`: runs the Jasmine tests in `/src`


