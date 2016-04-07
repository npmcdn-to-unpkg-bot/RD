var path = require('path');

module.exports = new function () {
  this.extensions = {
    javascript: '.js'
  };

  this.folders = {
    dist: 'dist',
    dev: 'dev',
    src: 'src'
  };

  this.dependencyPaths = {
    node: 'node_modules',
    jspm: path.join(this.folders.src, 'jspm_packages'),
    typings: path.join(this.folders.src, 'typings'),
  };

  this.globs = {
    all: '**/*',
    typescript: '**/*.ts',
    e2eTest: 'app/**/*.e2e.ts',
    specTest: 'app/**/*.spec.ts'
  };

  this.typescript = {
    allSourceFiles: path.join(this.folders.src, this.globs.typescript),
    typingsEntryPoint: path.join(this.folders.src, 'typings/browser.d.ts'),
    projectFile: path.join(this.folders.src, 'tsconfig.json'),
    e2eTest: path.join(this.folders.src, this.globs.e2eTest),
    specTest: path.join(this.folders.src, this.globs.specTest)    
  }

  this.files = {
    htmlEntry: path.join(this.folders.src, 'index.html'),
    bootstrapModule: 'app/bootstrap',
    compiledModule: 'js/app.js',
    baseProtractor: 'protractor.conf.js'
  };

  this.server = {
    raw: {
      port: 9000, // Set the server port. Defaults to 8080. 
      root: this.folders.src, // Set root directory that's being server. Defaults to cwd. 
      open: true
    },
    development: {
      port: 9000, // Set the server port. Defaults to 8080. 
      root: this.folders.dev, // Set root directory that's being server. Defaults to cwd. 
      //mount: [['/src', 'src']], // Mount a directory to a route. 
      open: false,
      logLevel: 2
    },
    production: {
      port: 9090, // Set the server port. Defaults to 8080. 
      root: this.folders.dist, // Set root directory that's being server. Defaults to cwd.  
      wait: 3000, // Waits for all changes, before reloading. Defaults to 0 sec.
      open: false
    },
  };
};