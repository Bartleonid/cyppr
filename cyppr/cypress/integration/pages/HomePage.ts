
import { AbstractPage } from "./AbstractPage";

export class HomePage extends AbstractPage {

	public closeAlert(): void {
		// context('Closing alert ', () => {
			this.click('.button.btn-small.btn-icon.close-btn.mat-button.mat-button-base');
		// })
	}
}

