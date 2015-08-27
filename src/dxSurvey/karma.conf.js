﻿// Karma configuration

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['qunit'],

        // list of files / patterns to load in the browser
        files: [
          "wwwroot/lib/qunit/qunit.css",
          "wwwroot/lib/jquery/jquery.js",
          "wwwroot/lib/knockout/knockout.js",

          "wwwroot/js/dx.scripts.js",

          "wwwroot/tests/tests.js",
          "wwwroot/tests/tests_ko.js"
    ],

        // list of files to exclude
        exclude: [
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'wwwroot/js/dx.scripts.js': ['coverage']
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'dots', 'junit', 'coverage'],

        junitReporter: {
            outputDir: '../../shippable/testresults/',
            outputFile: 'test-results.xml'
        },

        coverageReporter: {
            type: 'cobertura',
            dir: '../../shippable/codecoverage/'
        },

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
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    })
}