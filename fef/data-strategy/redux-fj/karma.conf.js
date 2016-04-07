// Karma configuration
// Generated on Mon Feb 15 2016 15:21:58 GMT+0000 (GMT Standard Time)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './src',
    
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jspm', 'jasmine'],


    // list of files / patterns to load in the browser
    jspm: {
      loadFiles: [
        'app/**/*.spec.ts'
      ],
      serveFiles: [
        'app/**/*!(*.spec).ts',
        'typings/**/*.*',
        'tsconfig.json'
      ]
    },

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor    
    preprocessors: {
      //'app/**/*!(*.spec).ts': ['coverage'] // Source files that you wanna generate coverage for. Do not include tests or libraries (Files used by Istanbul)
    },

    proxies: { // avoid Karma's ./base virtual directory
      '/app/': '/base/app/',
      '/jspm_packages/': '/base/jspm_packages/',
      '/typings/': '/base/typings/',
      '/tsconfig.json': '/base/tsconfig.json',
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'dots'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Karma plugins loaded
    plugins: [
      'karma-jasmine',
      'karma-jspm',
      'karma-coverage',
      'karma-chrome-launcher'
    ],

    // coverageReporter: {
    //   reporters: [
    //     { type: 'json', subdir: '../../coverage', file: 'coverage-final.json' }
    //   ]
    // },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true


  })
}
