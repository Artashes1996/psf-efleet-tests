describe('Side_Menu_Check', () => {
    it('Visit page and check menu items', () => {
        cy.visit('http://172.16.75.1:8082/auth')
        cy.wait(30000)
        cy.get('input[name="login"]').type('hmuradyan')
        cy.get('input[name="password"]').type('Ha71ur84!')
        cy.contains('ZALOGUJ').click()
        cy.wait(3000)
        cy.contains('Kontrahenci').click()
        expect('.list-unstyled c-nested-list ng-tns-c135-0 ng-trigger ng-trigger-slide ng-star-inserted')
        cy.contains('Pojazdy').click()
        expect('.list-unstyled c-nested-list ng-tns-c135-1 ng-trigger ng-trigger-slide ng-star-inserted')
        cy.contains('Katalogi').click()
        cy.contains('Zlecenia').click()
        cy.contains('Szkody').click()
        cy.contains('Faktury').click()
        cy.contains('Listy przewozowe').click()
        cy.contains('Raporty').click()
        cy.contains('Administracja').click()
        cy.get('.logout-btn')
        cy.get('.btn-danger').click()
    })
})