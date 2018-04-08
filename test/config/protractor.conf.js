exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'mocha',
  baseUrl: 'http://localhost:8080',
  specs: ['../stories/*.js'],

  capabilities: {
        'browserName': 'chrome'
    },

    onPrepare: function () {
        ptor = browser;
        expect = require('chai').use(require('chai-as-promised')).expect;
        Page = require('astrolabe').Page;
        browser.driver.manage().window().setSize(1280,1024);
    },

  mochaOpts: {
        enableTimeouts: false,
        slow: 3000,
        reporterOptions: {
            console: true,
            screenshot: true
        },
        ui: 'bdd',
    }
};