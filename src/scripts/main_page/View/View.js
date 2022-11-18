export const ViewMainPage = class {

  viewLoginUser(value) {
    this.main = document.querySelector('main');
    this.mainBlock = document.createElement('div');
    this.mainBlock.classList.add('main_mp');

    this.header = document.querySelector('header');
    this.headerBlock = document.createElement('div');
    this.headerBlock.classList.add('header_mp');
    this.headerText = document.createElement('p');
    this.headerText.classList.add('header_text');
    this.headerText.textContent = `Приветствуем, `;
    this.headerLogin = document.createElement('span');
    this.headerLogin.classList.add('header_text_login');
    this.headerLogin.textContent = value;

    this.profile = document.createElement('div');
    this.profile.classList.add('profile')

    this.ul = document.createElement('ul');
    this.liData = {
      class: ['dialog_admin', 'about_user', 'logout'],
      text: ['Сообщения', 'Профиль', 'Выйти']
    }

    for (let i = 0; i < 3; i++) {
      this.li = document.createElement('li');
      this.li.classList.add(this.liData.class[i]);
      this.li.textContent = this.liData.text[i];

      this.ul.appendChild(this.li)
    }
    this.profile.append(this.ul);
    this.headerText.append(this.headerLogin)
    this.headerBlock.append(this.headerText, this.profile);
    this.header.append(this.headerBlock);
    this.main.appendChild(this.mainBlock);
  }

  viewShowMessageBlock() {
    this.main = document.querySelector('main');
    this.msgBlock = document.createElement('div');
    this.msgBlock.classList.add('msg-block', 'close', 'showBlock');

    this.closeBtn = document.createElement('button');
    this.closeBtn.textContent = '[x]'
    this.closeBtn.classList.add('close_msg_btn');

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
  //  this.msg.append(this.msgDialog, this.inputMsgInput, this.btnMsgInput);
    this.msgBlock.append(this.closeBtn, this.msgDialog, this.inputMsgInput, this.btnMsgInput);
    this.main.appendChild(this.msgBlock);
  }

  viewDialog(message, date_sent, type) {
    this.msgDialog = document.querySelector('.msg_dialog');
    this.msgText = document.createElement('p');
    this.msgText.classList.add('msg_text');

    this.hr = document.createElement('hr')

    this.msgText.textContent = message;
    this.msgDate = document.createElement('span');
    this.msgDate.textContent = `Отправлено ${date_sent.slice(0, 10).split('-').reverse().join('-')} в ${date_sent.slice(11, 19)}`
    if (type === 0) {
      this.msgText.classList.add('from-msg_color')
      this.msgDate.classList.add('from-msg')
    } else {
      this.msgText.classList.add('to-msg_color')
      this.msgDate.classList.add('to-msg')
    }
    this.msgText.append(this.hr, this.msgDate);
    this.msgDialog.appendChild(this.msgText);
  }

  viewDialog1(msg, type) {
    console.log('v user', type)
    this.msgDialog = document.querySelector('.msg_dialog');
    this.msgText = document.createElement('p');
    this.msgText.classList.add('msg_text');

    this.hr = document.createElement('hr')
    let date = new Date()
    this.msgText.textContent = msg;
    this.msgDate = document.createElement('span');
    this.msgDate.textContent = `Отправлено ${date}`
    if (type === 1) {
      this.msgText.classList.add('from-msg_color')
      this.msgDate.classList.add('from-msg')
    } 
    else {
      this.msgText.classList.add('to-msg_color')
      this.msgDate.classList.add('to-msg')
    }
    this.msgText.append(this.hr, this.msgDate);
    this.msgDialog.appendChild(this.msgText);
  }

  viewFilterBlock() {
    this.mainBlock = document.querySelector('.main_mp');
    this.filterBlock = document.createElement('div');
    this.filterBlock.classList.add('filter_table');

    this.filterTitle = document.createElement('p');
    this.filterTitle.classList.add('filter_tables_text');
    this.filterTitle.textContent = 'Найти доски';

    this.filterValue = document.createElement('div');
    this.filterValue.classList.add('filter_input');

    this.labelName = document.createElement('label');
    this.labelName.setAttribute('for', 'name_table');
    this.labelName.textContent = 'Имя таблицы:';

    this.inputName = document.createElement('input');
    this.inputName.setAttribute('type', 'text');
    this.inputName.setAttribute('id', 'name_table');
    this.inputName.setAttribute('placeholder', 'Введите имя/часть имени');

    this.labelDate = document.createElement('label');
    this.labelDate.setAttribute('for', 'date_create_first');
    this.labelDate.textContent = 'Дата создания: ';
    this.spanFrom = document.createElement('span');
    this.spanFrom.textContent = 'с ';
    this.inputFrom = document.createElement('input');
    this.inputFrom.setAttribute('type', 'date');
    this.inputFrom.setAttribute('id', 'date_create_first');
    this.spanTo = document.createElement('span');
    this.spanTo.textContent = 'по ';
    this.inputTo = document.createElement('input');
    this.inputTo.setAttribute('type', 'date');
    this.inputTo.setAttribute('id', 'date_create_second');

    this.btnBlock = document.createElement('div');
    this.btnSearch = document.createElement('button');
    this.btnSearch.classList.add('filter_search');
    this.btnSearch.textContent = 'Искать';
    this.btnClear = document.createElement('button');
    this.btnClear.classList.add('filter_clear');
    this.btnClear.setAttribute('disabled', true);
    this.btnClear.textContent = 'Показать все таблицы';

    this.btnBlock.append(this.btnSearch, this.btnClear);
    this.filterValue.append(this.labelName, this.inputName, this.labelDate, this.spanFrom, this.inputFrom, this.spanTo, this.inputTo);
    this.filterBlock.append(this.filterTitle, this.filterValue, this.btnBlock);
    this.mainBlock.appendChild(this.filterBlock);
   // this.main.appendChild(this.mainBlock);
  }

  // viewCalcBlockAvg(value) {
  //   this.calcBlock = document.querySelector('.calc_data');
  //   this.calcBlock.innerHTML = '';
  //   this.avg = document.createElement('p');
  //   this.avg.classList.add('avg');
  //   this.avg.textContent = 'Среднее число досок на одного пользователя: '
  //   this.avgData = document.createElement('span');
  //   this.avgData.textContent = value;
  //   this.avgData.classList.add('avg_data');
  //   this.hr = document.createElement('hr');
    
  //   this.avg.append(this.avgData);
  //   this.calcBlock.append(this.avg, this.hr);
  // }

  // viewCalcBlockPercent(value) {
  //   this.calcBlock = document.querySelector('.calc_data');
  //   this.percent = document.createElement('p');
  //   this.percent.classList.add('percent');
  //   this.percentData = document.createElement('span');
  //   this.percentData.classList.add('percent_data');
  //   this.percent.textContent = 'Количество ваших досок от общего числа досок (в процентах): '
  //   this.percentData.textContent = value;

  //   this.percent.append(this.percentData);
  //   this.calcBlock.append(this.percent)
  // }

  viewTables(id_table, name_table, date_create, count_records, bg_image) {
    this.tableBlock = document.querySelector('.table_block')
    this.table = document.createElement('div');
    this.table.classList.add('table');
    this.table.setAttribute('data-id_table', id_table);
    if (bg_image.includes('unsplash')) {     
      this.table.style.background = `url("${bg_image}=&w=200)") 50%/cover`;
    } else {
      this.table.style.background = `${bg_image}`;
    }

    this.nameTable = document.createElement('p');
    this.nameTable.classList.add('name_table');
    this.nameTable.textContent = name_table;

    this.dateCreate = document.createElement('p');
   // this.titleDate = document.createElement('span');
    this.dateCreate.textContent = `Дата создания: ${date_create.split('-').reverse().join('-')}`;
    this.dateCreate.classList.add('date_create');
   // this.titleDate.textContent = date_create.split('-').reverse().join('-');
    
    this.countRecords = document.createElement('p');
  //  this.titleCounts = document.createElement('span');
    this.countRecords.textContent = `Кол-во записей: ${count_records}`;
    this.countRecords.classList.add('number_records');
  //  this.titleCounts.textContent = count_records;

  //  this.dateCreate.appendChild(this.titleDate);
  //  this.countRecords.appendChild(this.titleCounts);
    this.table.append(this.nameTable, this.dateCreate, this.countRecords)
    this.tableBlock.appendChild(this.table);
    
  }

  viewTableBlock() {
    this.mainBlock = document.querySelector('.main_mp');
    this.tableBlock = document.createElement('div');
    this.tableBlock.classList.add('table_block');

    this.newTable = document.createElement('div');
    this.newTable.classList.add('table', 'new_table');
    this.newTableText = document.createElement('p');
    this.newTableText.classList.add('create_table_block');
    this.newTableText.textContent = 'Создать доску';

    this.calcBlock = document.createElement('div');
    this.calcBlock.classList.add('calc_data');
    this.newTable.appendChild(this.newTableText);
    this.tableBlock.prepend(this.newTable);
    this.mainBlock.append(this.calcBlock, this.tableBlock)
  }

  viewCreateTable() {
    this.main = document.querySelector('main');
    this.createTabelBlock = document.createElement('div');
    this.createTabelBlock.classList.add('create_table', 'filter_create');

    this.createTabel = document.createElement('div');
    this.createTabel.classList.add('create_new_table');

    this.labelCreateTable = document.createElement('label');
    this.labelCreateTable.setAttribute('for', 'new_table');
    this.labelCreateTable.textContent = 'Введите имя';

    this.inputCreateTable = document.createElement('input');
    this.inputCreateTable.setAttribute('type', 'text');
    this.inputCreateTable.setAttribute('id', 'new_table');
    this.inputCreateTable.setAttribute('placeholder', 'имя доски');
    this.inputCreateTable.setAttribute('maxLength', '50');

    this.btnCreateTable = document.createElement('button')
    this.btnCreateTable.classList.add('create_tbl_btn');
    this.btnCreateTable.textContent = 'Создать доску';

    this.createTabel.append(this.labelCreateTable, this.inputCreateTable, this.btnCreateTable);
    this.createTabelBlock.appendChild(this.createTabel);
    this.main.appendChild(this.createTabelBlock);
  }

  viewRemoveTable() {
    document.querySelectorAll('.table').forEach((e) => {
      if (!e.classList.contains('new_table')) {
        e.remove()
      }
    });
  }

  viewProfile(value, all_days, sex) {
    this.dataInput = {
      for: ['password', 'password_check', 'b-day'],
      type: ['password', 'password', 'date'],
      id: ['password', 'password_check', 'b-day'],
      text: ['Новый пароль', 'Повторите пароль', 'Измените дату рождения'],
      value: ['', '', value, all_days],
      sex,
    }

    this.header = document.querySelector('header');
    this.headerClass = document.createElement('div');
    this.headerClass.classList.add('header');

    this.overlay = document.createElement('div');
    this.overlay.classList.add('filter_menu');
    this.overlay.setAttribute('id', 'overlay');

    this.profileSetting = document.createElement('div');
    this.profileSetting.classList.add('profile_setting');
    this.pHeader = document.createElement('p');
    this.pHeader.classList.add('profile_header_text');
    this.pHeader.textContent = 'О пользователе';
    this.btnChange = document.createElement('button');
    this.btnChange.classList.add('change_profile');
    this.btnChange.textContent = 'Сохранить изменения';
    this.btnClose = document.createElement('button');
    this.btnClose.classList.add('close_profile');
    this.btnClose.textContent = 'Закрыть';

    this.allDays = document.createElement('p');
    this.allDays.textContent = `Вы с нами ${all_days} дня(дней)`;    

    for (let i = 0; i < 3; i++) {
      this.pInput = document.createElement('p');
      this.pInput.classList.add('form_in_mp');
      this.label = document.createElement('label');
      this.label.textContent = this.dataInput.text[i];
      this.label.setAttribute('for', this.dataInput.for[i]);

      this.input = document.createElement('input');
      this.input.setAttribute('type', this.dataInput.type[i]);
      this.input.setAttribute('id', this.dataInput.id[i]);
      this.input.value = this.dataInput.value[i];

      this.errorPassword = document.createElement('p');
      this.errorPassword.classList.add('error_password', this.dataInput.id[i]);
     
      this.pInput.append(this.label, this.input, this.errorPassword)
      this.profileSetting.appendChild(this.pInput);
    }

    this.pSex = document.createElement('p');
    this.pSex.classList.add('form_in_mp', 'sex');
    this.titleSex = document.createElement('span');
    this.titleSex.textContent = 'Пол:';

    this.inputFemale = document.createElement('input');
    this.inputFemale.setAttribute('type', 'radio');
    this.inputFemale.setAttribute('name', 'sex');
    this.inputFemale.setAttribute('id', 'female');
    this.inputFemale.setAttribute('value', 'female');
    this.labelFemale = document.createElement('label');
    this.labelFemale.setAttribute('for', 'female');
    this.labelFemale.textContent = 'женский';

    this.inputMale = document.createElement('input');
    this.inputMale.setAttribute('type', 'radio');
    this.inputMale.setAttribute('name', 'sex');
    this.inputMale.setAttribute('id', 'male');
    this.inputMale.setAttribute('value', 'male');
    this.labelMale = document.createElement('label');
    this.labelMale.setAttribute('for', 'male');
    this.labelMale.textContent = 'мужский';

    this.dataInput.sex === 'female' ? this.inputFemale.checked = true : this.inputMale.checked = true;

    this.pSex.append(this.titleSex, this.inputFemale, this.labelFemale,  this.inputMale, this.labelMale);
    this.profileSetting.prepend(this.pHeader);
    this.profileSetting.append(this.pSex, this.allDays, this.btnChange, this.btnClose);
    this.overlay.appendChild(this.profileSetting);
    this.headerClass.appendChild(this.overlay);
    this.header.appendChild(this.headerClass);
  }
}