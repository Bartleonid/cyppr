import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { User } from "../data/User";
import { TestPage } from "../pages/TestPage";
import { Assert } from "../assert/Assert";

class PortTest {
	private lenjatest = new User("TEST", 999999, 111111);
	verifyPortFunctionality(): void {
		let assert = new Assert();
		let login = new LoginPage();
		let home = new HomePage();
		let portf = new TestPage();
		let expectedName = "BLA BLA"
		it('AG Grid test scenaio ', () => {
			login.loginCard(this.lenjatest);
			home.closeAlert();
			portf.openTestPage();
			portf.selectPort(expectedName);
			assert.assertText(portf.getPortElement(), expectedName);
			assert.contains("Port");
			assert.contains("T");
			assert.contains("Br");
			assert.contains("Top");
			assert.contains("Last");
			assert.contains("Last");
			portf.openPosTab("Posi");
			assert.contains("Analysis");
			assert.assertText(portf.getTotalElement(), " 100 ");

		})
	}

}


let ag = new PortTest();
ag.verifyPortFunctionality();