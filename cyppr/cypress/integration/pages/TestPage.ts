
import { AbstractPage } from "./AbstractPage";

export class TestPage extends AbstractPage {

	public openTestPage(): void {
		context('Opening Port page ', () => {
			this.click(".app-header-nav-link[href='#/port']");
		})
	}

	public selectPort(port: string): void {
		this.clickByText(port);
		// let elem = '//*[text()="' + port + '"]';
		// this.clickXpath(elem);
	}

	public assertPortSelected(expectedText: any) {
		cy.get(".port-name span").should('have.text', expectedText)
	}

	public getPortElement() {
		return ".port-name span";
	}

	public openPosTab(text: string): void{
		this.clickByText(text);
	}

	public getTotalElement(){
		return '.table-tbody tr:nth-of-type(8) td:nth-of-type(7)';
	}
}

