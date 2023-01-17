

Cypress.Commands.add('online', (email, password) => {
    cy.get('a[href="https://shop.fareway.com/"]').eq('2').click()
    //cy.get('compose[view="components/store-selector/templates/store-selector-list-item.html"]').click()
    //cy.get('li[class="store-select-store au-target"]').click()
   // cy.get('div[class="btn primary-btn store-select-option-btn b_header-button-color au-target"]').click()
    //cy.get('li[au-target-id="165"]').click()
})
//Cypress.Commands.add('careers', (careers) => {
    //cy.get('a[href="/careers/"]').eq('1').trigger('mouseover')
    //cy.get('a').invoke('removeAttr', 'target')
    //cy.contains('input[placeholder="Search Job Title or Keywords"]').should('have.attr', 'id', 'code-snippet')
    //cy.get('a[href="/careers/view-opportunities/"]').eq('1').should('have.text', 'View Opportunities').click({force: true})
    //cy.origin('https://secure2.entertimeonline.com', () => {
        //cy.visit('/')
        //cy.get('button[class="btn btn-primary apply-action"]').eq('0').invoke('textContent') 
      //}).should('equal', 'Apply for Job')
  
   
    
   // cy.get('h4[class="list-item-title"]').should('have.text', 'Grocery Clerk').click()
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
    //})
    Cypress.Commands.add('social', (socialMedia) => {
        cy.get('img[class="footer-social-icon-image"]').eq('2').click()
        cy.get('img[class="footer-social-icon-image"]').eq('5').click()

    })
    Cypress.Commands.add('contact', (contactUs) => {
        cy.get('a[href="/about/contact-us/"]').eq('1').click()
        cy.get('input[id="fid-field$your-email-address$1543"]').click().type('abraam')
        cy.get('form[id="form_fareway-contact-us"]').click()
        cy.get('td[class="cms_field"]').eq('1').click()
        cy.get('select[id="fid-field$feedback-topic$1540"]').select('New Locations').eq('0')
        cy.get('input[name="field$first-name$1663$1540"]').click({force: true}).type('DD')
        cy.get('input[name="field$last-name$1666$1540"]').click().type('1ll')
        cy.get('input[name="field$phone-number$1672$1540"]').click().type('dipcik')
        cy.get('input[name="field$street-address$1675$1540"]').click().type('Etimesgut')
        cy.get('input[name="field$city$1678$1540"]').click().type('A')
        cy.get('select[id="fid-field$state$1681$1540"]').select('Idaho')
        cy.get('input[name="field$zip-code$1684$1540"]').click().type('fşlf')
        cy.get('input[class="js-submit-button cms_form_button primary"]').click()
    })
    Cypress.Commands.add('storesAds', (storesAds, weeklyAdEmail) => {
        cy.get('a[href="/stores/"]').eq('2').click({force: true})
        cy.get('input[id="zipCode"]').click().type('3535')
        cy.get('input[name="isBakery"]').click()
        cy.get('input[id="submitFormBtn"]').click()
        cy.get('a[href="/stores/weekly-ad-email/"]').eq('1').click( {force: true})
        cy.get('input[id="fid-field$email$779"]').click().type('DD')
        cy.get('span[class="select2-selection__rendered"]').click()
        cy.get('input[class="select2-search__field"]').click().type(352)
        cy.get('input[class="js-submit-button cms_form_button primary"]').click( {force: true})
        
    })
 Cypress.Commands.add('recipes', (recipes) => {
        cy.get('a[href="/recipes/"]').eq('1').click()
        cy.get('select[id="Category"]').select('Main Dishes')
        cy.get('div[class="cards"]').click({force: true})
        cy.get('a[href="/recipes/big-burger-bowl"]').eq('0').click()
        cy.get('a[href="/recipes/"]').eq('1').click()
        cy.get('input[id="Keywords"]').click().type('patlican')
        cy.get('input[id="searchIcon"]').click()
 })
Cypress.Commands.add('cart', (CartToKitchen, TipsAndIdeas, Magazines, Videos) => {
     cy.get('a[href="/tipsandideas/"]').eq('1').click()
     cy.get('select[name="articleCategory"]').select('Fall and Winter')
     cy.get('select[id="mediaType"]').select('Videos')
     cy.get('a[href="/tipsandideas/last-minute-holiday-gift-ideas"]').eq('1').click()
     cy.get('a[href="/tipsandideas/magazines-link/"]').eq('1').click({force: true})
     cy.get('a[href="/tipsandideas/cart-to-kitchen-issue-45"]').click()
     cy.get('a[href="/tipsandideas/videos-link/"]').eq('1').click( {force: true})
     cy.get('a[href="/tipsandideas/easy-cheesy-pizza-dip"]').eq('1').click()

})
Cypress.Commands.add('services', (services) => {
    cy.get('a[href="/services/"]').eq('1').click()
    cy.get('a[href="/services/bakeries/"]').eq('1').click( {force: true})
    cy.get('a[href="/services/dietitian-services/"]').eq('1').click({force: true})
})    
