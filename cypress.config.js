const { defineConfig } = require("cypress")
const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress/config', `${file}.json`);

  if(!fs.existsSync(pathToConfigFile)) {
    console.log("No custom config file found")
    return {}
  }

  return fs.readJson(pathToConfigFile)
}

module.exports = defineConfig({
  projectId: 'n3v8do',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const file = config.env.configFile || ''

      return getConfigurationByFile(file)
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    excludeSpecPattern: "cypress/e2e/5-other/*.js",
    defaultCommandTimeout: 5000,
    baseUrl: "https://www.webdriveruniversity.com",
    chromeWebSecurity: false,
    viewportWidth: 1000,
    viewportHeight: 800,
    env: {
      first_name: "Andrei!!!",
      web_university: "https://www.webdriveruniversity.com",
      web_store: "https://www.automationteststore.com"
    }
  },
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
})
