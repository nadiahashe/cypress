const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://ev.com",
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
});
