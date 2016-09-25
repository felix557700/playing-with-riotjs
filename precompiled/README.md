# Precompiled

`npm init`
`npm install riot --save`

- Benefits of precompilation:
    - Ability to compile tags with pre-processor => Babel
    - Small performance benefit. No need to load and execute the compiler on browser
    - Ability to pre-render tags on the server
    
- I will use riot with rollup bundler, ES6 with babel and gulp as task runner
- Setup rollup 
`npm i -D rollup rollup-plugin-babel rollup-plugin-commonjs rollup-plugin-json rollup-plugin-node-resolve rollup-plugin-riot `

- Setup babel: 
`npm i -D babel-preset-es2015 babel-plugin-external-helpers`
                         
- Setup gulp: 
`npm i -D gulp gulp-shell gulp-webserver`                         
   
- Configuration is done in rollup.config.js and gulpfile.js
    
    
