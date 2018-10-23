describe('Vue Layout Test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Must have default layout title and view subtitle', () => {
    cy.get('h1[data-vel="header"]').contains('This layout is DEFAULT')
    cy.get('h2[data-vel="subheader"]').contains('Welcome to Your Vue.js App')
  })

  it('Must have page layout title and view subtitle', () => {
    cy.get('a[href="/about"]').click()
    cy.get('h1[data-vel="header"]').contains('This layout is PAGE')
    cy.get('h2[data-vel="subheader"]').contains('This is an about page')
  })
})

describe('Vue Layout with delay', () => {
  beforeEach(() => {
    cy.visit('/contact')
  })

  it('Must show loading layout', () => {
    cy.get('h1[data-vel="header"]').contains('Loading...')
  })

  it('Must show the title of the contact page after 6 seconds of delay', () => {
    cy.get('h2[data-vel="subheader"]', {timeout: 6000}).contains('This is an contact page')
  })
})
