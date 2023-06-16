import { svgBtn } from '../../../image/svg';

export const ViewAdminPage = class {
	ViewCreateTable() {
		this.main = document.querySelector('.main_mp');
		this.adminTable = document.createElement('table');
		this
			.main
			.appendChild(this.adminTable);
		this.headerTable = {
			'id': 'ID',
			'login': 'Логин',
			'sex': 'Пол',
			'birth': 'Дата рождения',
			'registr': 'Дата регистрации',
			'count': 'Количество досок',
		};
		this.thead = this
			.adminTable
			.createTHead();
		for (var key in this.headerTable) {
			this.th = document.createElement('th');
			this.th.textContent = this.headerTable[key];
			this
				.thead
				.appendChild(this.th);
		}
	}

	viewAdminCountUsers(all_users, online) {
		this.main = document.querySelector('.main_mp');
		this.allUsers = document.createElement('p');
		this.allUsers.textContent = `Всего пользователей: ${all_users}`;
		this.onlineUsers = document.createElement('p');
		this.onlineUsers.textContent = `Пользователей в сети: ${online}`;
		this
			.main
			.insertBefore(this.onlineUsers, this.main.firstChild);
		this
			.main
			.insertBefore(this.allUsers, this.main.firstChild);
	}

	viewAdminPage(id, login, sex, birth, registr, count_tbls, msg, time_ban) {
		this.table = document.querySelector('table');
		this.banText = time_ban === null
			? 'Не забанен'
			:
			(time_ban = new Date(time_ban),
			`Забанен(а) до ${String(
				time_ban.getHours()
			).padStart(2, '0')}:${String(time_ban.getMinutes()).padStart(2, '0')}:${String(
				time_ban.getSeconds()
			).padStart(2, '0')}, ${String(time_ban.getDate()).padStart(2, '0')}-${String(time_ban.getMonth() + 1).padStart(2, '0')}-${time_ban.getFullYear()}`);
		let htmlAdminTable = `
    <tr id=${id}>
      <td>${id}</td>
      <td>${login}</td>
      <td>${sex}</td>
      <td>${birth}</td>
      <td>${registr}</td>
      <td>${count_tbls}</td>
      <td><button class="btn-msg" id=${id}>Новые сообщения: <span class="count_msg">${msg}</span></button></td>
      <td><button class="btn-ban" id=${id}>Забанить</button></td>
      <td>${this.banText}</td>
      <td><button class="btn-delete" id=${id}>Удалить</button></td>
    </tr>`;
		this
			.table
			.insertAdjacentHTML('beforeend', htmlAdminTable);
	}

	viewShowMessageBlock(id_user, login) {
		this.main = document.querySelector('main');
		this.msgBlock = document.createElement('div');
		this
			.msgBlock
			.classList
			.add('msg-block_admin', 'filter_create');

		this.msg = document.createElement('div');
		this
			.msg
			.classList
			.add('msg_admin');
		this.msgLoginUser = document.createElement('p');
		this.msgLoginUser.textContent = `Вы общаетесь с пользователем ${login}`;
		this
			.msgLoginUser
			.classList
			.add('msg_login');
		this
			.msg
			.setAttribute('id', id_user);

		this.msgDialog = document.createElement('div');
		this
			.msgDialog
			.classList
			.add('msg_dialog');

		this.inputMsgInput = document.createElement('textarea');
		this
			.inputMsgInput
			.setAttribute('cols', 70);
		this
			.inputMsgInput
			.setAttribute('wrap', 'hard');
		this
			.inputMsgInput
			.setAttribute('name', 'input_msg');
		this
			.inputMsgInput
			.setAttribute('placeholder', 'Введите сообщение...');

		this.btnMsgInput = document.createElement('button');
		this
			.btnMsgInput
			.classList
			.add('send_msg_btn');
		this.svgSend = svgBtn;
		this
			.btnMsgInput
			.insertAdjacentHTML('afterbegin', this.svgSend);
		this
			.msg
			.append(
				this.msgLoginUser,
				this.msgDialog,
				this.inputMsgInput,
				this.btnMsgInput
			);
		this
			.msgBlock
			.appendChild(this.msg);
		this
			.main
			.appendChild(this.msgBlock);
	}

	viewDialog(message, date_sent, type, send = 0) {
		this.msgDialog = document.querySelector('.msg_dialog');
		this.msgText = document.createElement('p');
		this
			.msgText
			.classList
			.add('msg_text');

		this.hr = document.createElement('hr');
		let date = date_sent;
		this.msgDate = document.createElement('span');

		if (date.toString().includes('GMT')) {
			this.msgDate.textContent = `Отправлено ${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()} 
      в ${String(
		date.getHours()
	).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(
	date.getSeconds()
).padStart(2, '0')}`;
			if (send === 0) {
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
		else {
			date = new Date(date);
			this.msgDate.textContent = `Отправлено ${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()} 
      в ${String(
		date.getHours()
	).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(
	date.getSeconds()
).padStart(2, '0')}`;

			if (type === 0) {

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

		this.msgText.textContent = message;

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

};