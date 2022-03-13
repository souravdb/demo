/// <reference types="cypress" />

describe('Header...', () => {
	// For desktop view
	context('720p resolution', () => {
		beforeEach(() => {
			cy.viewport(1280, 720)
		})

		describe('When you visit home', () => {
			it('Should visit home page', () => {
				cy.visit('/')
			});

			describe('nav', () => {
				it('Should navigate to About page', () => {
					cy.get('[data-cy=nav-item]').contains('About').click({ force: true })
					cy.get('[data-cy=about-me-label]').should('contain', 'About Me')
				})
			})
		})
	})
})

describe('About Page...', () => {
	describe('When you visit home', () => {
		it('Should visit home page', () => {
			cy.visit('/')
		});

		describe('profile', () => {
			it('Should have image', () => {
				cy.get('[data-cy=about-pic]').should('exist')
				cy.get('[data-cy=about-pic]').should('have.attr', 'title').should('contain', 'Sourav, Deb Barma (edited)')
			})
		})

		describe('intro', () => {
			it('Should have keywords', () => {
				cy.get('[data-cy=about-me-label]').should('contain', 'About Me')
				// cy.wrap(['director', 'engineering', 'test automation', 'quality', 'Azure']).each((keyword) => {
				// 	cy.get('[data-cy=about-intro]').contains(RegExp(`${keyword}`, 'i'))
				// })
			})
		})

		describe('contact', () => {
			it('Should have keywords', () => {
				cy.get('[data-cy=about-contact-label]').should('contain', 'Contact')
				// cy.wrap(['469 803 8830', 'souravd.now@gmail.com', 'Woodstock']).each((keyword) => {
				// 	cy.get('[data-cy=about-contact]').contains(RegExp(`${keyword}`, 'i'))
				// })
			})
		})

		describe('education', () => {
			it('Should have keywords', () => {
				cy.get('[data-cy=about-education-label]').should('contain', 'Education')
				// cy.wrap(['Bachelors', 'Engineering', 'Jadavpur University']).each((keyword) => {
				// 	cy.get('[data-cy=about-education]').contains(RegExp(`${keyword}`, 'i'))
				// })
			})
		})
	})
})
