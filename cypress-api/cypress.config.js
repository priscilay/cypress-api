const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,

  e2e: {
    baseUrl: "https://fakerestapi.azurewebsites.net/api"
  },
});
