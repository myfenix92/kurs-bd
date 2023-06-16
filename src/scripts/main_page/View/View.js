import { svgBtn } from '../../../image/svg';

export const ViewMainPage = class {

	viewLoginUser(value) {
		this.main = document.querySelector('main');
		this.mainBlock = document.createElement('div');
		this
			.mainBlock
			.classList
			.add('main_mp');

		this.header = document.querySelector('header');
		this.headerBlock = document.createElement('div');
		this
			.headerBlock
			.classList
			.add('header_mp');
		this.headerText = document.createElement('p');
		this
			.headerText
			.classList
			.add('header_text');
		this.headerText.textContent = 'Приветствуем, ';
		this.headerLogin = document.createElement('span');

		this
			.headerLogin
			.classList
			.add('header_text_login');
		this.headerLogin.textContent = value;

		this.profile = document.createElement('div');
		this
			.profile
			.classList
			.add('profile');

		this.ul = document.createElement('ul');
		if (value !== 'admin') {
			this.liData = {
				class: [
					'dialog_admin', 'about_user', 'logout'
				],
				text: ['Сообщения', 'Профиль', 'Выйти']
			};
		} else {
			this.liData = {
				class: [
					'about_user', 'logout'
				],
				text: ['Профиль', 'Выйти']
			};
		}

		for (let i = 0; i < this.liData.class.length; i++) {
			this.li = document.createElement('li');
			this
				.li
				.classList
				.add(this.liData.class[i]);
			this.li.textContent = this
				.liData
				.text[i];
			this
				.ul
				.appendChild(this.li);
		}
		this
			.profile
			.append(this.ul);
		this
			.headerText
			.append(this.headerLogin);
		this
			.headerBlock
			.append(this.headerText, this.profile);
		this
			.header
			.append(this.headerBlock);
		this
			.main
			.appendChild(this.mainBlock);
	}

	viewShowMessageBlock(ban) {
		this.main = document.querySelector('main');
		this.msgBlock = document.createElement('div');
		this
			.msgBlock
			.classList
			.add('msg-block', 'close', 'showBlock');

		this.closeBtn = document.createElement('button');
		this.closeBtn.textContent = 'x';
		this
			.closeBtn
			.classList
			.add('close_msg_btn');

		this.msgDialog = document.createElement('div');
		this
			.msgDialog
			.classList
			.add('msg_dialog');

		this.inputMsgInput = document.createElement('textarea');
		this
			.inputMsgInput
			.setAttribute('cols', 100);
		this
			.inputMsgInput
			.setAttribute('wrap', 'hard');
		this
			.inputMsgInput
			.setAttribute('name', 'input_msg');
		this.btnMsgInput = document.createElement('button');
		this
			.btnMsgInput
			.classList
			.add('send_msg_btn');
		this.svgSend = svgBtn;
		this
			.btnMsgInput
			.insertAdjacentHTML('afterbegin', this.svgSend);
		this.banTextBlock = document.createElement('p');
		this
			.banTextBlock
			.classList
			.add('ban_text');
		ban = ban == null ? null : new Date(ban);
		if (ban) {
			this.banTextBlock.textContent = `Вы забанены до ${String(
				ban.getHours()
			).padStart(2, '0')}:${String(ban.getMinutes()).padStart(2, '0')}:${String(
				ban.getSeconds()
			).padStart(2, '0')} ${String(ban.getDate()).padStart(2, '0')}-${String(ban.getMonth() + 1).padStart(2, '0')}-${ban.getFullYear()} и не можете отправлять сообщения.`;
			this
				.msgBlock
				.append(this.closeBtn, this.msgDialog, this.banTextBlock);
		} else {
			this
				.inputMsgInput
				.setAttribute('placeholder', 'Введите сообщение...');
			this
				.msgBlock
				.append(this.closeBtn, this.msgDialog, this.inputMsgInput, this.btnMsgInput);
		}

		this
			.main
			.appendChild(this.msgBlock);
	}

	viewDialog(message, date_sent, type, send = 1) {
		this.msgDialog = document.querySelector('.msg_dialog');
		this.msgText = document.createElement('p');
		this
			.msgText
			.classList
			.add('msg_text');

		this.hr = document.createElement('hr');
		let date = date_sent;
		this.msgText.textContent = message;
		this.msgDate = document.createElement('span');
		if (date.toString().includes('GMT')) {
			this.msgDate.textContent = `Отправлено ${String(date.getDate()).padStart(2, '0')}-${String((date.getMonth() + 1)).padStart(2, '0')}-${date.getFullYear()} 
      в ${String(
		date.getHours()
	).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(
	date.getSeconds()
).padStart(2, '0')}`;

			if (send === 1) {
				this
					.msgText
					.classList
					.add('to-msg_color');
				this
					.msgDate
					.classList
					.add('to-msg');

			} else {
				this
					.msgText
					.classList
					.add('from-msg_color');
				this
					.msgDate
					.classList
					.add('from-msg');
			}

		} else {
			date = new Date(date);
			this.msgDate.textContent = `Отправлено ${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()} 
      в ${String(
		date.getHours()
	).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(
	date.getSeconds()
).padStart(2, '0')}`;

			if (type === 1) {
				this
					.msgText
					.classList
					.add('to-msg_color');
				this
					.msgDate
					.classList
					.add('to-msg');

			} else {
				this
					.msgText
					.classList
					.add('from-msg_color');
				this
					.msgDate
					.classList
					.add('from-msg');
			}
		}

		this
			.msgText
			.append(this.hr, this.msgDate);
		this
			.msgDialog
			.appendChild(this.msgText);
		document
			.querySelector('.msg_dialog')
			.scrollTo(0, document.querySelector('.msg_dialog').scrollHeight);

	}

	viewFilterBlock() {
		this.mainBlock = document.querySelector('.main_mp');
		this.filterBlock = document.createElement('div');
		this
			.filterBlock
			.classList
			.add('filter_table');

		this.filterTitle = document.createElement('p');
		this
			.filterTitle
			.classList
			.add('filter_tables_text');
		this.filterTitle.textContent = 'Найти доски';

		this.filterValue = document.createElement('div');
		this
			.filterValue
			.classList
			.add('filter_input');

		this.labelName = document.createElement('label');
		this
			.labelName
			.setAttribute('for', 'name_table');
		this.labelName.textContent = 'Имя доски:';

		this.inputName = document.createElement('input');
		this
			.inputName
			.setAttribute('type', 'text');
		this
			.inputName
			.setAttribute('id', 'name_table');
		this
			.inputName
			.setAttribute('placeholder', 'Введите имя/часть имени');

		this.labelDate = document.createElement('label');
		this
			.labelDate
			.setAttribute('for', 'date_create_first');
		this.labelDate.textContent = 'Дата создания: ';
		this.spanFrom = document.createElement('span');
		this.spanFrom.textContent = 'с ';
		this.inputFrom = document.createElement('input');
		this
			.inputFrom
			.setAttribute('type', 'date');
		this
			.inputFrom
			.setAttribute('id', 'date_create_first');
		this.spanTo = document.createElement('span');
		this.spanTo.textContent = 'по ';
		this.inputTo = document.createElement('input');
		this
			.inputTo
			.setAttribute('type', 'date');
		this
			.inputTo
			.setAttribute('id', 'date_create_second');

		this.btnBlock = document.createElement('div');
		this.btnSearch = document.createElement('button');
		this
			.btnSearch
			.classList
			.add('filter_search');
		this.btnSearch.textContent = 'Искать';
		this.btnClear = document.createElement('button');
		this
			.btnClear
			.classList
			.add('filter_clear');
		this
			.btnClear
			.setAttribute('disabled', true);
		this.btnClear.textContent = 'Показать все доски';

		this
			.btnBlock
			.append(this.btnSearch, this.btnClear);
		this
			.filterValue
			.append(
				this.labelName,
				this.inputName,
				this.labelDate,
				this.spanFrom,
				this.inputFrom,
				this.spanTo,
				this.inputTo
			);
		this
			.filterBlock
			.append(this.filterTitle, this.filterValue, this.btnBlock);
		this
			.mainBlock
			.appendChild(this.filterBlock);
	}

	viewTables(id_table, name_table, date_create, count_records, bg_image) {
		this.tableBlock = document.querySelector('.table_block');
		this.table = document.createElement('div');
		this
			.table
			.classList
			.add('table');
		this
			.table
			.setAttribute('data-id_table', id_table);
		if (bg_image.includes('unsplash')) {
			this.table.style.background = `url("${bg_image}=&w=200)") 50%/cover`;
		} else {
			this.table.style.background = `${bg_image}`;
		}

		this.nameTable = document.createElement('p');
		this
			.nameTable
			.classList
			.add('name_table');
		this.nameTable.textContent = name_table;

		this.dateCreate = document.createElement('p');
		date_create = new Date(date_create);
		this.dateCreate.textContent = `Дата создания: ${String(date_create.getDate()).padStart(2, '0')}-${String(date_create.getMonth() + 1).padStart(2, '0')}-${date_create.getFullYear()}`;
		this
			.dateCreate
			.classList
			.add('date_create');
		this.countRecords = document.createElement('p');
		this.countRecords.textContent = `Кол-во записей: ${count_records}`;
		this
			.countRecords
			.classList
			.add('number_records');
		this
			.table
			.append(this.nameTable, this.dateCreate, this.countRecords);
		this
			.tableBlock
			.appendChild(this.table);

	}

	viewTableBlock() {
		this.mainBlock = document.querySelector('.main_mp');
		this.tableBlock = document.createElement('div');
		this
			.tableBlock
			.classList
			.add('table_block');

		this.newTable = document.createElement('div');
		this
			.newTable
			.classList
			.add('table', 'new_table');
		this.newTableText = document.createElement('p');
		this
			.newTableText
			.classList
			.add('create_table_block');
		this.newTableText.textContent = 'Создать доску';

		this.calcBlock = document.createElement('div');
		this
			.calcBlock
			.classList
			.add('calc_data');
		this
			.newTable
			.appendChild(this.newTableText);
		this
			.tableBlock
			.prepend(this.newTable);
		this
			.mainBlock
			.append(this.calcBlock, this.tableBlock);
	}

	viewCreateTable() {
		this.main = document.querySelector('main');
		this.createTabelBlock = document.createElement('div');
		this
			.createTabelBlock
			.classList
			.add('create_table', 'filter_create');

		this.createTabel = document.createElement('div');
		this
			.createTabel
			.classList
			.add('create_new_table');

		this.labelCreateTable = document.createElement('label');
		this
			.labelCreateTable
			.setAttribute('for', 'new_table');
		this.labelCreateTable.textContent = 'Введите имя';

		this.inputCreateTable = document.createElement('input');
		this
			.inputCreateTable
			.setAttribute('type', 'text');
		this
			.inputCreateTable
			.setAttribute('id', 'new_table');
		this
			.inputCreateTable
			.setAttribute('placeholder', 'имя доски');
		this
			.inputCreateTable
			.setAttribute('maxLength', '50');

		this.btnCreateTable = document.createElement('button');
		this
			.btnCreateTable
			.classList
			.add('create_tbl_btn');
		this.btnCreateTable.textContent = 'Создать доску';

		this
			.createTabel
			.append(this.labelCreateTable, this.inputCreateTable, this.btnCreateTable);
		this
			.createTabelBlock
			.appendChild(this.createTabel);
		this
			.main
			.appendChild(this.createTabelBlock);
	}

	viewRemoveTable() {
		document
			.querySelectorAll('.table')
			.forEach((e) => {
				if (!e.classList.contains('new_table')) {
					e.remove();
				}
			});
	}

	viewProfile(value, all_days, sex) {
		this.dataInput = {
			for: [
				'password', 'password_check', 'b-day'
			], type : [
				'password', 'password', 'date'
			], id : [
				'password', 'password_check', 'b-day'
			], text : [
				'Новый пароль', 'Повторите пароль', 'Измените дату рождения'
			], value : [
				'', '', value, all_days
			], sex};

		this.header = document.querySelector('header');
		this.headerClass = document.createElement('div');
		this
			.headerClass
			.classList
			.add('header');

		this.overlay = document.createElement('div');
		this
			.overlay
			.classList
			.add('filter_menu');
		this
			.overlay
			.setAttribute('id', 'overlay');

		this.profileSetting = document.createElement('div');
		this
			.profileSetting
			.classList
			.add('profile_setting');
		this.pHeader = document.createElement('p');
		this
			.pHeader
			.classList
			.add('profile_header_text');
		this.pHeader.textContent = 'О пользователе';
		this.btnChange = document.createElement('button');
		this
			.btnChange
			.classList
			.add('change_profile');
		this.btnChange.textContent = 'Сохранить изменения';
		this.btnClose = document.createElement('button');
		this
			.btnClose
			.classList
			.add('close_profile');
		this.btnClose.textContent = 'Закрыть';

		this.allDays = document.createElement('p');
		this.allDays.textContent = `Вы с нами ${all_days} дня(дней)`;

		for (let i = 0; i < 3; i++) {
			this.pInput = document.createElement('p');
			this
				.pInput
				.classList
				.add('form_in_mp');
			this.label = document.createElement('label');
			this.label.textContent = this
				.dataInput
				.text[i];
			this
				.label
				.setAttribute('for', this.dataInput.for[i]);

			this.input = document.createElement('input');
			this
				.input
				.setAttribute('type', this.dataInput.type[i]);
			this
				.input
				.setAttribute('id', this.dataInput.id[i]);
			this.input.value = this
				.dataInput
				.value[i];

			this.errorPassword = document.createElement('span');
			this
				.errorPassword
				.classList
				.add('error_password', this.dataInput.id[i]);

			this.label.append(this.errorPassword);
			this
				.pInput
				.append(this.label, this.input);
			this
				.profileSetting
				.appendChild(this.pInput);
		}

		this.pSex = document.createElement('p');
		this
			.pSex
			.classList
			.add('form_in_mp', 'sex');
		this.titleSex = document.createElement('label');
		this.titleSex.textContent = 'Выберите пол:';

		this.inputFemale = document.createElement('input');
		this
			.inputFemale
			.setAttribute('type', 'radio');
		this
			.inputFemale
			.setAttribute('name', 'sex');
		this
			.inputFemale
			.setAttribute('id', 'female');
		this
			.inputFemale
			.setAttribute('value', 'female');
		this.labelFemale = document.createElement('label');
		this
			.labelFemale
			.setAttribute('for', 'female');
		this.labelFemale.textContent = 'женский';

		this.inputMale = document.createElement('input');
		this
			.inputMale
			.setAttribute('type', 'radio');
		this
			.inputMale
			.setAttribute('name', 'sex');
		this
			.inputMale
			.setAttribute('id', 'male');
		this
			.inputMale
			.setAttribute('value', 'male');
		this.labelMale = document.createElement('label');
		this
			.labelMale
			.setAttribute('for', 'male');
		this.labelMale.textContent = 'мужский';

		this.dataInput.sex === 'female'
			? this.inputFemale.checked = true
			: this.inputMale.checked = true;

		this
			.pSex
			.append(
				this.titleSex,
				this.inputFemale,
				this.labelFemale,
				this.inputMale,
				this.labelMale
			);
		this
			.profileSetting
			.prepend(this.pHeader);
		this
			.profileSetting
			.append(this.pSex, this.allDays, this.btnChange, this.btnClose);
		this
			.overlay
			.appendChild(this.profileSetting);
		this
			.headerClass
			.appendChild(this.overlay);
		this
			.header
			.appendChild(this.headerClass);
	}
};