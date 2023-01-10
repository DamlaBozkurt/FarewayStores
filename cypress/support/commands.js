// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('online', (email, password) => {
    cy.get('a[href="https://shop.fareway.com/"]').eq('2').click()
    //cy.get('compose[view="components/store-selector/templates/store-selector-list-item.html"]').click()
    //cy.get('li[class="store-select-store au-target"]').click()
    cy.get('div[class="btn primary-btn store-select-option-btn b_header-button-color au-target"]').click()
    cy.get('li[au-target-id="165"]').click()
})
Cypress.Commands.add('careers', (careers) => {
    //cy.get('a[href="/careers/"]').eq('1').trigger('mouseover')
   // cy.get('a').invoke('removeAttr', 'target')
    //cy.contains('input[placeholder="Search Job Title or Keywords"]').should('have.attr', 'id', 'code-snippet')
    //cy.get('a[href="/careers/view-opportunities/"]').eq('1').click()
    //cy.get('button[class="btn btn-primary apply-action"]').eq('1').click()
    //cy.get('input[placeholder="Search Job Title or Keywords"]').click()
    
    //cy.get('div[id="_feature"]').click()
    //cy.get('span[class="c-form-control m-full-width--9-FFqc"]').click()
    //cy.get('span[data-test="categories--SelectUnified--form-control"]').click()
    //cy.get('div[class="search-form"]').click()
    //cy.get('i[class="m-drop-down-icon--YH7BzH icon-field-dpd"]').click()
    //cy.get('select[name="categories"]').click()
    //cy.get('label[class="c-input-label real-time-search clearable-input"]').click()
    //cy.get('span[class="c-form-control m-full-width--9-FFqc"]').click()
    //cy.get('button[class="btn btn-primary apply-action"]').eq('0').click()
    
    //cy.get('a[href="/careers/"]').eq('2').click()
    //cy.get('a[href="/careers/new-store-hiring-events/"]').eq('2').click();
    })
    Cypress.Commands.add('social', (socialMedia) => {
        cy.get('img[class="footer-social-icon-image"]').eq('2').click()
        //cy.get('img[class="footer-social-icon-image"]').eq('5').click()

    })
    Cypress.Commands.add('contact', (contactUs) => {
        cy.get('a[href="/about/contact-us/"]').eq('1').click()
    })
    
 

    
