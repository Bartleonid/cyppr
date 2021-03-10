/// <reference types="cypress" />
///<reference types="cypress-iframe" />


context('Login', () => {

  it('Login using Smart Card', () => {
   cy.contains('Smart Card').click()
   cy.get("[placeholder='User name']").type('TEST')
   cy.get("[placeholder='PIN Code']").type('999999')
   cy.get("[placeholder='Smartcard Code']").type('111111')
   cy.get("[type='submit']").click()
   cy.get("[aria-label='Logout']").sho
   cy.wait(2000)

   cy.get('body').then(($body) => {
     if ($body.find('.button.btn-small.btn-icon.close-btn.mat-button.mat-button-base').length > 0) {
       console.log($body.find('.button.btn-small.btn-icon.close-btn.mat-button.mat-button-base').length > 0)
      cy.get('.button.btn-small.btn-icon.close-btn.mat-button.mat-button-base').click()
  }

  })


  // it('Handle iframe', () => {
  //   cy.get('iframe')
  //     .then(($iframe) => {
  //       const $body = $iframe.contents().find('body')
  //       cy.wrap($body).find(".mapboxgl-ctrl-logo").click()
  //     })

  })
})
