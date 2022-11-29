import {ModelMainPage} from '../Model/index';
import {ViewMainPage} from '../View/index';
import {APIClass} from '../../../API/index';
import {socket} from '../../../index';
import {ModelStartPage} from '../../start_page/Model';
import {ModelTablePage} from '../../table-page/Model/index';
import {setLocalStorageData, getLocalStorageData, getIdUser} from '../../../LocalStorage/index';

const ViewMP = new ViewMainPage();
const ModelMP = new ModelMainPage();
const ModelSP = new ModelStartPage();
const ModelTP = new ModelTablePage();
const API = new APIClass();

export const ControllerMainPage = class {

	onCreateTable(event) {
		if (event.target.classList.contains('new_table') || event.target.closest('div').classList.contains('new_table')) {
			ViewMP.viewCreateTable();
		} else if (event.target.tagName === 'DIV' && event.target.classList.contains('filter_create') 
		&& !event.target.classList.contains('create_new_table') && document.querySelector('.header_text_login').textContent !== 'admin') {
			document
				.querySelector('.filter_create')
				.remove();
		}

		this.nameTable = document.querySelector('#new_table');
		if ((event.target.classList.contains('create_tbl_btn') && event.target.tagName === 'BUTTON')) {
			if (document.querySelector('#new_table').value.trim() === '') {
				document
					.querySelector('#new_table')
					.value = '';
				document
					.querySelector('#new_table')
					.setAttribute('placeholder', 'имя не может быть пустым');
			} else {
				ModelMP.createTable(getIdUser(), this.nameTable.value);
			}

		}
	}

	onShowMsgBlock(event) {
		socket.on('connect', () => {
			//	console.log('connect');
			socket.emit('room', `${getIdUser()}`);
		});
		ModelMP.checkBanUser();
		this.ban = '';
		if (document.querySelector('.header_text_login')) {
			API
				.getAboutUser(getIdUser())
				.then(data => {
					this.ban = data.ban;
				});
		}
		setTimeout(() => {
			if (event.target.classList.contains('dialog_admin')) {
				document
					.querySelector('.calc_data')
					.textContent = '';
				ModelMP.onGetDialogAdmin(getLocalStorageData('token'));
				ModelMP.onReadNewMsg(getLocalStorageData('token'));
				ViewMP.viewShowMessageBlock(this.ban);

				document
					.querySelector('.msg-block')
					.classList
					.remove('close');
				document
					.querySelector('.msg-block')
					.classList
					.remove('showBlock');
				document
					.querySelector('.dialog_admin')
					.style
					.pointerEvents = 'none';
			}

			if (event.target.classList.contains('close_msg_btn')) {
				document
					.querySelector('.calc_data')
					.textContent = '';
				document
					.querySelector('.msg-block')
					.classList
					.toggle('close');
				setTimeout(() => {
					document
						.querySelector('.msg-block')
						.remove();
					document
						.querySelector('.dialog_admin')
						.style
						.pointerEvents = 'auto';
				}, 1200);
			}
		}, 200);
	}

	onFilterHandler(event) {
		this.nameTable = document.querySelector('#name_table');
		this.dateFrom = document.querySelector('#date_create_first');
		this.dateTo = document.querySelector('#date_create_second');
		if (event.target.classList.contains('filter_search') && event.target.tagName === 'BUTTON') {
			ModelMP.filterTable(
				this.nameTable.value,
				this.dateFrom.value,
				this.dateTo.value,
				getIdUser()
			);
			if (this.nameTable.value !== '' || this.dateFrom.value !== '' || this.dateTo.value !== '') {
				document
					.querySelector('.filter_clear')
					.disabled = false;
			}
		}

		if (event.target.classList.contains('filter_clear') && event.target.tagName === 'BUTTON') {
			ViewMP.viewRemoveTable();
			this.nameTable.value = '';
			this.dateFrom.value = '';
			this.dateTo.value = '';
			document
				.querySelector('.filter_clear')
				.disabled = true;
			ModelMP.onGetTables(getIdUser());
		}
	}

	onProfileHandler(event) {
		if (event.target.classList.contains('about_user') && event.target.tagName === 'LI') {
			ModelMP.profileData(getIdUser());
		}

		if ((event.target.classList.contains('filter_menu') && !event.target.classList.contains('profile_setting')) || (event.target.classList.contains('close_profile') && event.target.tagName === 'BUTTON')) {
			document
				.querySelector('.filter_menu')
				.remove();
		}
	}

	onChangeProfileHandler(event) {
		this.errorPassword = document.querySelector('.error_password.password');
		this.errorPasswordCheck = document.querySelector(
			'.error_password.password_check'
		);
		this.password = document.querySelector('#password');
		this.passwordCheck = document.querySelector('#password_check');
		this.bDay = document.querySelector('#b-day');
		this.sex = document.querySelectorAll('input[name="sex"]:checked')[0];
		if (event.target.classList.contains('change_profile') && event.target.tagName === 'BUTTON') {

			if (this.password.value !== '' || this.passwordCheck.value !== '') {
				if (this.password.value === this.passwordCheck.value && (this.password.value.length < 6 || this.password.value.length > 20)) {
					this.errorPassword.textContent = '';
					this.errorPasswordCheck.textContent = '';
					this.errorPasswordCheck.textContent = 'Длина меньше 6 или больше 20 символов';
				} else if (this.password.value !== this.passwordCheck.value) {
					this.errorPasswordCheck.textContent = '';
					this.errorPassword.textContent = '';
					this.errorPasswordCheck.textContent = 'Пароли не совпадают';
				} else if (this.password.value === this.passwordCheck.value) {
					ModelMP.changeProfileData(
						getIdUser(),
						this.password.value,
						this.bDay.value,
						this.sex.value
					);
					document
						.querySelector('.filter_menu')
						.remove();
				}
			} else {
				ModelMP.changeProfileData(
					getIdUser(),
					this.password.value,
					this.bDay.value,
					this.sex.value
				);

				document
					.querySelector('.filter_menu')
					.remove();
			}
		}
	}

	onclickTable(event) {
		if (document.querySelector('.header_text_login') && !document.querySelector('.msg-block')) {
			if (event.target.closest('div').classList.contains('table') && event.target.closest('div').dataset.id_table) {
				socket.removeAllListeners('chat message');
				this.id_table = event
					.target
					.closest('div')
					.dataset
					.id_table;
				this.nameTable = event
					.target
					.closest('div')
					.firstChild
					.textContent;
				document
					.querySelector('header')
					.innerHTML = '';
				document
					.querySelector('main')
					.innerHTML = '';
				setLocalStorageData('id_table', + this.id_table);
				setLocalStorageData('name_table', this.nameTable);
				setTimeout(() => {
					ModelTP.getBgTableData(getLocalStorageData('id_table'));
					ModelTP.getStickers(
						getLocalStorageData('id_table'),
						getLocalStorageData('name_table')
					);
				}, 200);
			}
		}
	}

	onLogOutHandler(event) {
		if (event.target.classList.contains('logout') && event.target.tagName === 'LI') {
			API.logoutUser(getIdUser());
			localStorage.clear();
			document
				.querySelector('header')
				.innerHTML = '';
			document
				.querySelector('main')
				.innerHTML = '';
			socket.removeAllListeners('chat message');
			ModelSP.init();
			location.reload();
		}
	}

	sendMsg(e) {
		if (document.querySelector('.send_msg_btn') && document.querySelector('textarea').value.trim() !== '' && e.target.closest('button') && e.target.closest('button').classList.contains('send_msg_btn') && document.querySelector('.header_text_login').textContent !== 'admin') {
			socket.emit(
				'chat message',
				document.querySelector('textarea').value,
				1,
				getIdUser()
			);
			document
				.querySelector('.calc_data')
				.textContent = '';
			ModelMP.sendNewMsg(
				getLocalStorageData('token'),
				document.querySelector('textarea').value
			);

			document
				.querySelector('textarea')
				.value = '';
		}
		if (document.querySelector('textarea') && document.querySelector('textarea').value.trim() === '') {
			document
				.querySelector('textarea')
				.value = '';
			document
				.querySelector('textarea')
				.placeholder = 'Сообщение не может быть пустым';
		}

	}

};