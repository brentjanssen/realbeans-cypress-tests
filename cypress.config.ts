import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: "at6bum",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: false,
    // No custom specPattern - let it use defaults
  },
})
