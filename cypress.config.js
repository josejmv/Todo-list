module.exports = {
  // The rest of the Cypress config options go here...
  projectId: 'w1g239',

  e2e: {
    setupNodeEvents(on, config) {}, // implement node event listeners here
  },

  component: {
    devServer: { framework: 'next', bundler: 'webpack' },
  },
}
