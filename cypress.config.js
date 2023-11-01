const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
		codeCoverage: {
			include: 'cypress/**/*.*'
		}
	},
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
