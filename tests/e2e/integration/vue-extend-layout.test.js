describe('Vue Layout Test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Check if you\'ve loaded the page header that is in the default layout', () => {
    cy.get('h1[data-vel="header"]').contains('Welcome to Your Vue.js App')
  })

  it('Header should not exist on page about', () => {
    cy.get('a[href="/about"]').click()
    cy.get('h1[data-vel="header"]').should('not.exist')
  })
})

describe('Vue Layout Test with delay', () => {
  beforeEach(() => {
    cy.visit('/contact')
  })

  it('Should not load default layout on route with delay', () => {
    cy.get('h1[data-vel="header"]').should('not.exist')
  })

  it('Must load loading layout after 2 seconds delay', () => {
    cy.get('h1[data-vel="header-loader"]', {timeout: 2000}).contains('Loading...')
  })

  it('Must show the title of the contact page after 6 seconds of delay', () => {
    cy.get('h2[data-vel="header-contact"]', {timeout: 6000}).contains('Contact Page')
  })
})
