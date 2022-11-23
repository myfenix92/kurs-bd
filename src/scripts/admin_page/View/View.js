export const ViewAdminPage = class {
  // constructor() {
  //   this.isError = true;
  //   this.isErrorLogin = true;
  // }

  ViewCreateTable() {
    this.main = document.querySelector('.main_mp');
    this.adminTable = document.createElement('table');
    this.main.appendChild(this.adminTable);
    this.headerTable = ['id', 'login', 'sex', 'birth', 'registr', 'count', 'msg'];
    this.thead = this.adminTable.createTHead();
    for(let i = 0; i < this.headerTable.length; i++) {
      this.th = document.createElement('th');
      this.th.textContent = this.headerTable[i];
      this.thead.appendChild(this.th);
    }
  }

  viewAdminCountUsers(all_users, online) {
    this.main = document.querySelector('.main_mp');
    this.allUsers = document.createElement('p');
    this.allUsers.textContent = `Всего пользователей: ${all_users}`;
    this.onlineUsers = document.createElement('p');
    this.onlineUsers.textContent = `Пользователей в сети: ${online}`;
    this.main.insertBefore(this.onlineUsers, this.main.firstChild);
    this.main.insertBefore(this.allUsers, this.main.firstChild);
  }

  viewAdminPage(id, login, sex, birth, registr, count_tbls, msg, time_ban) { 
    this.table = document.querySelector('table');
    this.banText = time_ban === null ? 'Не забанен' : `Забанен(а) до ${time_ban.slice(11, 19)}, ${time_ban.slice(0, 10).split('-').reverse().join('-')}`;
    let htmlAdminTable = `
    <tr id=${id}>
      <td>${id}</td>
      <td>${login}</td>
      <td>${sex}</td>
      <td>${birth}</td>
      <td>${registr}</td>
      <td>${count_tbls}</td>
      <td><button class="btn-msg" id=${id}>Новые сообщения: ${msg}</button></td>
      <td><button class="btn-ban" id=${id}>Забанить</button></td>
      <td>${this.banText}</td>
      <td><button class="btn-delete" id=${id}>Удалить</button></td>
    </tr>`
   this.table.insertAdjacentHTML('beforeend', htmlAdminTable)
  }

  viewShowMessageBlock(id_user, login) {
    this.main = document.querySelector('main');
    this.msgBlock = document.createElement('div');
    this.msgBlock.classList.add('msg-block_admin', 'filter_create');

    this.msg = document.createElement('div');
    this.msg.classList.add('msg_admin');
    this.msgLoginUser = document.createElement('p')
    this.msgLoginUser.textContent = `Вы общаетесь с пользователем ${login}`
    this.msgLoginUser.classList.add('msg_login')
    this.msg.setAttribute('id', id_user);

    this.msgDialog = document.createElement('div');
    this.msgDialog.classList.add('msg_dialog');

    this.inputMsgInput = document.createElement('textarea');
    this.inputMsgInput.setAttribute('cols', 70);
    this.inputMsgInput.setAttribute('wrap', 'hard');
    this.inputMsgInput.setAttribute('name', 'input_msg');
    this.inputMsgInput.setAttribute('placeholder', 'Введите сообщение...');

    this.btnMsgInput = document.createElement('button')
    this.btnMsgInput.classList.add('send_msg_btn');
    this.svgSend = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="25" height="25" x="0" y="0" viewBox="0 0 367.92 367.92" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g>
    <g>
      <g>
        <g>
          <path d="M367.851,6.944c-0.056-0.424-0.12-0.832-0.248-1.248c-0.136-0.456-0.32-0.872-0.528-1.296
            c-0.112-0.232-0.152-0.48-0.288-0.704c-0.088-0.144-0.232-0.24-0.336-0.376c-0.264-0.368-0.576-0.688-0.904-1.016
            c-0.328-0.328-0.656-0.632-1.032-0.896c-0.136-0.096-0.224-0.232-0.36-0.312c-0.224-0.136-0.472-0.168-0.704-0.28
            c-0.44-0.216-0.872-0.4-1.336-0.536c-0.392-0.104-0.776-0.16-1.176-0.208c-0.472-0.056-0.928-0.088-1.4-0.064
            c-0.44,0.024-0.864,0.112-1.296,0.216c-0.272,0.064-0.552,0.04-0.824,0.136l-352,120c-3.184,1.072-5.352,4.04-5.416,7.408
            c-0.064,3.368,1.984,6.416,5.136,7.624l164.456,63.192l71.064,164.512c1.272,2.936,4.168,4.824,7.344,4.824
            c0.136,0,0.264,0,0.4-0.008c3.336-0.168,6.208-2.384,7.224-5.56l112-352c0.08-0.248,0.056-0.504,0.104-0.76
            c0.096-0.448,0.168-0.88,0.184-1.336C367.931,7.808,367.907,7.384,367.851,6.944z M31.475,128.368L330.011,26.592
            L173.619,182.984L31.475,128.368z M246.859,337.112l-61.76-142.976L342.403,36.824L246.859,337.112z" fill="#000000" data-original="#000000" class=""></path>
          <path d="M125.659,242.264c-3.128-3.128-8.184-3.128-11.312,0l-112,112c-3.128,3.128-3.128,8.184,0,11.312
            c1.56,1.56,3.608,2.344,5.656,2.344s4.096-0.784,5.656-2.344l112-112C128.787,250.448,128.787,245.392,125.659,242.264z" fill="#000000" data-original="#000000" class=""></path>
          <path d="M146.347,298.264l-56,56c-3.128,3.128-3.128,8.184,0,11.312c1.56,1.56,3.608,2.344,5.656,2.344
            c2.048,0,4.096-0.784,5.656-2.344l56-56c3.128-3.128,3.128-8.184,0-11.312C154.531,295.136,149.475,295.136,146.347,298.264z" fill="#000000" data-original="#000000" class=""></path>
          <path d="M8.003,279.92c2.048,0,4.096-0.784,5.656-2.344l56-56c3.128-3.128,3.128-8.184,0-11.312
            c-3.128-3.128-8.184-3.128-11.312,0l-56,56c-3.128,3.128-3.128,8.184,0,11.312C3.907,279.136,5.955,279.92,8.003,279.92z" fill="#000000" data-original="#000000" class=""></path>
        </g>
      </g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    </g></svg>`
    this.btnMsgInput.insertAdjacentHTML('afterbegin', this.svgSend)
    this.msg.append(this.msgLoginUser, this.msgDialog, this.inputMsgInput, this.btnMsgInput);
    this.msgBlock.appendChild(this.msg);
    this.main.appendChild(this.msgBlock);
  }

  viewDialog(message, date_sent, type, send = 0) {
    this.msgDialog = document.querySelector('.msg_dialog');
    this.msgText = document.createElement('p');
    this.msgText.classList.add('msg_text');

    this.hr = document.createElement('hr')
    let date = date_sent
    this.msgDate = document.createElement('span');
   // this.msgDate.textContent = `Отправлено ${date}`

    if (date.toString().includes('GMT')) {
      this.msgDate.textContent = `Отправлено ${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} 
      в ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`
      if (send === 0) {
        this.msgText.classList.add('to-msg_color')
        this.msgDate.classList.add('to-msg')
  
      } else {
      this.msgText.classList.add('from-msg_color')
      this.msgDate.classList.add('from-msg')
      }


    } else {
    this.msgDate.textContent = `Отправлено ${date.slice(0, 10).split('-').reverse().join('-')} в ${date_sent.slice(11, 19)}`

      if (type === 0) {
        
        this.msgText.classList.add('to-msg_color')
        this.msgDate.classList.add('to-msg')
  
      } else {
      this.msgText.classList.add('from-msg_color')
      this.msgDate.classList.add('from-msg')
      }
    }
    
    this.msgText.textContent = message;
    

    this.msgText.append(this.hr, this.msgDate);
    this.msgDialog.appendChild(this.msgText);
    document.querySelector('.msg_dialog').scrollTo(0, document.querySelector('.msg_dialog').scrollHeight)

  }


}