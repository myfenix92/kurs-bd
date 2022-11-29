import {ViewStartPage} from '../View/index';
import {APIClass} from '../../../API/index';
import {setLocalStorageData} from '../../../LocalStorage/index';

const ViewSP = new ViewStartPage();
const API = new APIClass();

export const ModelStartPage = class {

	init() {
		document
			.querySelector('body')
			.style
			.setProperty('--body-image', 'linear-gradient(#4B5ED7, #3F92D2, #5FD3B3)');
		ViewSP.viewHeaderStartPage();
	}

	onChangeForm(value) {
		switch (value) {
		case 'register':
			ViewSP.viewStartPage(value);
			break;
		case 'login':
			ViewSP.viewStartPage(value);
			break;
		default:
			break;
		}
	}

	onRegisterUser(login, password, date_birth, sex) {
		API
			.createNewUser(login, password, date_birth, sex)
			.then(data => {
				if (data.regStatus) {
					localStorage.clear();
					this.onLoginUser(login, password);
				} else {
					ViewSP.onErrorValue('register-login');
				}
			});
	}

	onLoginUser(login, password) {
		API
			.loginUser(login, password)
			.then(data => {
				if (data.loginStatus) {
					localStorage.clear();
					setLocalStorageData('token', data.loginToken);
					setLocalStorageData('bg_table', 'linear-gradient(#4B5ED7, #3F92D2, #5FD3B3)');
				} else {
					ViewSP.onErrorValue('login-value');
				}
			});
	}
};