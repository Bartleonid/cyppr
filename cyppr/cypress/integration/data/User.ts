export class User {

	public username: string;
	public pin: number;
	public otp: number;

	constructor(username: string, pin: number, otp: number) {
		this.username = username;
		this.pin = pin;
		this.otp = otp;

	}

	get userName(): string {
		return this.username;
	}
	get pinNumber(): number {
		return this.pin;
	}

	get otpNumber(): number {
		return this.otp;
	}

}