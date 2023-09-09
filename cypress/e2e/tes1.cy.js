/// <reference types="cypress"/>

it('Google Search', () => {

    cy.visit('https://www.google.com')
    cy.get('.gLFyf', {timeout:5000}).type('How to Automation Testing{Enter}') //Set timeout to 5s. After type in searchbox, click "Enter"
    
    //Click on "Penelusuran Google"
    //cy.contains('Penelusuran Google').click()

    //wait for 2s
    cy.wait(2000)
    cy.contains('Gambar').click()
})