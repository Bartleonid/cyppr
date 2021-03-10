/// <reference types="cypress" />
import 'cypress-xpath'
import 'chai'
var assert = chai.assert;

export abstract class AbstractPage {

	protected clickByText(text: string): void {
		cy.contains(text).click();
	}

	protected contains(text: string): void {
		cy.contains(text);
	}

	protected click(by: string): void {
		cy.get(by).click();
	}

	protected type(by: string, text: any): void {
		cy.get(by).type(text)
	}

	protected clickXpath(by: string): void {
		cy.xpath(by).click();
	}

	protected getUrl(url: string): void {
		cy.visit(url);
	}

	protected switchFrameClickElement(by: string) {
		cy.get('iframe')
			.then(($iframe) => {
				const $body = $iframe.contents().find('body')
				cy.wrap($body).find(by).click()
			})
	}

	protected closeAlert(by: string): void {
		cy.get('body').then(($body) => {
			if ($body.find(by).length > 0) {
				console.log($body.find(by).length > 0)
				cy.get(by).click()
			}
		})
	}

	protected getText(by: string) {
		cy.get(by).then(function ($elem) {
			return $elem.text();
		})
	}
}