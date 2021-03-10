
import './commands'
require('cypress-xpath')

  beforeEach(() => {
    cy.viewport(1920, 1080) 
    cy.visit('/')
  })
