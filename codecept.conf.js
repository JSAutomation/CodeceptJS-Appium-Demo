const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
const path = require("path");
const directoryName = __dirname;

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      app: directoryName + '\\app\\calc.apk', // appium little tricky to get the relative path. So made small workaround. 
      platform: 'Android',
      device: 'emulator'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'CodeceptJS-Appium-Demo'
}