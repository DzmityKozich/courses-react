export class ToastTrigger {
	public toastProvider!: (message: string) => void;

	constructor() {}

	public registerToastProvider = (provider: (message: string) => void): void => {
		if (!this.toastProvider) {
			this.toastProvider = provider;
		} else {
			console.warn(`Toast provider is already installed!`);
		}
	};

	public showToast = (message: string): void => {
		if (this.toastProvider) {
			this.toastProvider(message);
		} else {
			throw new Error('Toast provider was not installed!');
		}
	};
}
