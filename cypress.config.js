const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'n3v8do',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
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
  }
})
