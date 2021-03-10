
import { AbstractPage } from "./AbstractPage";
import { User } from "../data/User";

export class LoginPage extends AbstractPage {

	public loginCard(user: User): void {
		// context('Some test scenaio ', () => {
			this.clickByText(' Smart Card ');
			this.type("[placeholder='User name']", user.username);
			this.type("[placeholder='PIN Code']", user.pin);
			this.type("[placeholder='Smartcard Code']", user.otp);
			this.click("[type='submit']");	
		// })
	}
}

