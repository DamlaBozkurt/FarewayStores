describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.fareway.com/')
    //cy.online()
    //cy.careers()
      cy.social()
      cy.contact()
      cy.storesAds()
      cy.recipes()
      cy.cart()
      cy.services()

  })
})
