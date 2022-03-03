/// <reference types="cypress" />

describe('Header...', () => {
	context('iphone-5 resolution', () => {
		beforeEach(() => {
			cy.viewport('iphone-5')
		})

		describe('When you visit home', () => {
			it('Should visit home page', () => {
				cy.visit('/')
			});

			describe('menu', () => {
				it('Should open the menu', () => {
					cy.get('[data-cy=nav-menu-btn]').click();
				})

				describe('nav', () => {
					it('Should navigate to About page', () => {
						cy.get('[data-cy=nav-item]').contains('About').click()
						cy.get('[data-cy=about-pic]').should('exist')
						cy.get('[data-cy=about-pic]').should('have.attr', 'title').should('contain', 'Sourav, Deb Barma')
					})
				})
			})
		})
	})
})