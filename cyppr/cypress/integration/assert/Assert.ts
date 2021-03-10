import 'chai'
var assert = chai.assert;

export class Assert {

	public equals(expected: any, actual: any): void {
		assert.equal(expected, actual);
	}

	public assertText(by: string, expectedText: any) {
		cy.get(by).should('have.text', expectedText)
	}

	public contains(text: string): void {
		cy.contains(text);
	}

}