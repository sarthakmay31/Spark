/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  autodelay: 'true',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://success.sparkrock.com/SignIn?returnUrl=%2Fknowledgebase%2F',
      show: true
    }
  },
  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
      outputDir: './output/allure-report'
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'sparkrock'
}