import '../../../styles/main_page/style.css'

export const ViewMainPage = class {

  viewLoginUser(value) {
    this.header = document.querySelector('.header');
    this.headerText = document.createElement('p');
    this.headerText.classList.add('header_text');
    this.headerText.textContent = `Welcome, `;
    this.headerLogin = document.createElement('span');
    this.headerLogin.classList.add('header_text_login');
    this.headerLogin.textContent = value;

    this.profile = document.createElement('div');
    this.profile.classList.add('profile')

    this.ul = document.createElement('ul');
    this.liData = {
      class: ['about_user', 'logout'],
      text: ['About user', 'Log out']
    }

    for (let i = 0; i < 2; i++) {
      this.li = document.createElement('li');
      this.li.classList.add(this.liData.class[i]);
      this.li.textContent = this.liData.text[i];

      this.ul.appendChild(this.li)
    }

    this.profile.append(this.ul);
    this.headerText.append(this.headerLogin)
    this.header.append(this.headerText, this.profile);
  }

  viewFilterBlock() {
    this.main = document.querySelector('main');
    this.filterBlock = document.createElement('div');
    this.filterBlock.classList.add('filter_table');

    this.filterTitle = document.createElement('p');
    this.filterTitle.classList.add('filter_tables_text');
    this.filterTitle.textContent = 'Find the tables';

    this.filterValue = document.createElement('div');
    this.filterValue.classList.add('filter_input');

    this.labelName = document.createElement('label');
    this.labelName.setAttribute('for', 'name_table');
    this.labelName.textContent = 'Name table:';

    this.inputName = document.createElement('input');
    this.inputName.setAttribute('type', 'text');
    this.inputName.setAttribute('id', 'name_table');
    this.inputName.setAttribute('placeholder', 'Input name');

    this.labelDate = document.createElement('label');
    this.labelDate.setAttribute('for', 'date_create_first');
    this.labelDate.textContent = 'Date create: ';
    this.spanFrom = document.createElement('span');
    this.spanFrom.textContent = 'from ';
    this.inputFrom = document.createElement('input');
    this.inputFrom.setAttribute('type', 'date');
    this.inputFrom.setAttribute('id', 'date_create_first');
    this.spanTo = document.createElement('span');
    this.spanTo.textContent = 'to ';
    this.inputTo = document.createElement('input');
    this.inputTo.setAttribute('type', 'date');
    this.inputTo.setAttribute('id', 'date_create_second');

    this.btnBlock = document.createElement('div');
    this.btnSearch = document.createElement('button');
    this.btnSearch.classList.add('filter_search');
    this.btnSearch.textContent = 'Search';
    this.btnClear = document.createElement('button');
    this.btnClear.classList.add('filter_clear');
    this.btnClear.setAttribute('disabled', true);
    this.btnClear.textContent = 'View all tables';

    this.btnBlock.append(this.btnSearch, this.btnClear);
    this.filterValue.append(this.labelName, this.inputName, this.labelDate, this.spanFrom, this.inputFrom, this.spanTo, this.inputTo);
    this.filterBlock.append(this.filterTitle, this.filterValue, this.btnBlock);
    this.main.appendChild(this.filterBlock);
  }

  viewCalcBlockAvg(value) {
    this.calcBlock = document.querySelector('.calc_data');
    this.calcBlock.innerHTML = '';
    this.avg = document.createElement('p');
    this.avg.classList.add('avg');
    this.avg.textContent = 'Average number of boards per user: '
    this.avgData = document.createElement('span');
    this.avgData.textContent = value;
    this.avgData.classList.add('avg_data');
    this.hr = document.createElement('hr');
    
    this.avg.append(this.avgData);
    this.calcBlock.append(this.avg, this.hr);
  }

  viewCalcBlockPercent(value) {
    this.calcBlock = document.querySelector('.calc_data');
    this.percent = document.createElement('p');
    this.percent.classList.add('percent');
    this.percentData = document.createElement('span');
    this.percentData.classList.add('percent_data');
    this.percent.textContent = 'Your number of boards of total user boards (in percents): '
    this.percentData.textContent = value;

    this.percent.append(this.percentData);
    this.calcBlock.append(this.percent)
  }

  viewTables(id_table, name_table, date_create, count_records) {
    this.tableBlock = document.querySelector('.table_block')
    this.table = document.createElement('div');
    this.table.classList.add('table');
    this.table.setAttribute('data-id_table', id_table);

    this.nameTable = document.createElement('p');
    this.nameTable.classList.add('name_table');
    this.nameTable.textContent = name_table;

    this.dateCreate = document.createElement('p');
    this.titleDate = document.createElement('span');
    this.dateCreate.textContent = 'Дата создания: '
    this.dateCreate.classList.add('date_create');
    this.titleDate.textContent = date_create;
    
    this.countRecords = document.createElement('p');
    this.titleCounts = document.createElement('span');
    this.countRecords.textContent = 'Кол-во записей: '
    this.countRecords.classList.add('number_records');
    this.titleCounts.textContent = count_records;

    this.dateCreate.appendChild(this.titleDate);
    this.countRecords.appendChild(this.titleCounts);
    this.table.append(this.nameTable, this.dateCreate, this.countRecords)
    this.tableBlock.appendChild(this.table);
    
  }

  viewTableBlock() {
    this.main = document.querySelector('main');
    this.tableBlock = document.createElement('div');
    this.tableBlock.classList.add('table_block');

    this.newTable = document.createElement('div');
    this.newTable.classList.add('table', 'new_table');
    this.newTableText = document.createElement('p');
    this.newTableText.classList.add('create_table_block');
    this.newTableText.textContent = 'Create table';

    this.calcBlock = document.createElement('div');
    this.calcBlock.classList.add('calc_data');
    this.newTable.appendChild(this.newTableText);
    this.tableBlock.prepend(this.newTable);
    this.main.append(this.calcBlock, this.tableBlock)
  }

  viewCreateTable() {
    this.main = document.querySelector('main');
    this.createTabelBlock = document.createElement('div');
    this.createTabelBlock.classList.add('create_table', 'filter_create');

    this.createTabel = document.createElement('div');
    this.createTabel.classList.add('create_new_table');

    this.labelCreateTable = document.createElement('label');
    this.labelCreateTable.setAttribute('for', 'new_table');
    this.labelCreateTable.textContent = 'Input name';

    this.inputCreateTable = document.createElement('input');
    this.inputCreateTable.setAttribute('type', 'text');
    this.inputCreateTable.setAttribute('id', 'new_table');
    this.inputCreateTable.setAttribute('placeholder', 'Name of table');

    this.btnCreateTable = document.createElement('button')
    this.btnCreateTable.classList.add('create_tbl_btn');
    this.btnCreateTable.textContent = 'Create table';

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

  viewProfile(value, sex) {
    this.dataInput = {
      for: ['password', 'password_check', 'b-day'],
      type: ['password', 'password', 'date'],
      id: ['password', 'password_check', 'b-day'],
      text: ['New password', 'New password repeat', 'Change b-day (mm/dd/yyyy)'],
      value: ['', '', value],
      sex,
    }

    this.header = document.querySelector('.header');
    this.overlay = document.createElement('div');
    this.overlay.classList.add('filter_menu');
    this.overlay.setAttribute('id', 'overlay');

    this.profileSetting = document.createElement('div');
    this.profileSetting.classList.add('profile_setting');
    this.pHeader = document.createElement('p');
    this.pHeader.classList.add('profile_header_text');
    this.pHeader.textContent = 'About user';
    this.btnChange = document.createElement('button');
    this.btnChange.classList.add('change_profile');
    this.btnChange.textContent = 'Save changes';
    this.btnClose = document.createElement('button');
    this.btnClose.classList.add('close_profile');
    this.btnClose.textContent = 'Close';

    

    for (let i = 0; i < 3; i++) {
      this.pInput = document.createElement('p');
      this.pInput.classList.add('form_in_input');
      this.label = document.createElement('label');
      this.label.textContent = this.dataInput.text[i];
      this.label.setAttribute('for', this.dataInput.for[i]);

      this.input = document.createElement('input');
      this.input.setAttribute('type', this.dataInput.type[i]);
      this.input.setAttribute('id', this.dataInput.id[i]);
      this.input.value = this.dataInput.value[i];

      this.errorPassword = document.createElement('p');
    this.errorPassword.classList.add('error_password', this.dataInput.id[i]);
     
      this.pInput.append(this.label, this.errorPassword, this.input)
      this.profileSetting.appendChild(this.pInput);
    }

    this.pSex = document.createElement('p');
    this.pSex.classList.add('form_in_input', 'sex');
    this.titleSex = document.createElement('p');
    this.titleSex.textContent = 'Choose a sex:';

    this.inputFemale = document.createElement('input');
    this.inputFemale.setAttribute('type', 'radio');
    this.inputFemale.setAttribute('name', 'sex');
    this.inputFemale.setAttribute('id', 'female');
    this.inputFemale.setAttribute('value', 'female');
    this.labelFemale = document.createElement('label');
    this.labelFemale.setAttribute('for', 'female');
    this.labelFemale.textContent = 'female';

    this.inputMale = document.createElement('input');
    this.inputMale.setAttribute('type', 'radio');
    this.inputMale.setAttribute('name', 'sex');
    this.inputMale.setAttribute('id', 'male');
    this.inputMale.setAttribute('value', 'male');
    this.labelMale = document.createElement('label');
    this.labelMale.setAttribute('for', 'male');
    this.labelMale.textContent = 'male';

    this.dataInput.sex === 'female' ? this.inputFemale.checked = true : this.inputMale.checked = true;

    this.pSex.append(this.titleSex, this.inputFemale, this.labelFemale,  this.inputMale, this.labelMale);
    this.profileSetting.prepend(this.pHeader);
    this.profileSetting.append(this.pSex, this.btnChange, this.btnClose);
    this.overlay.appendChild(this.profileSetting);
    this.header.appendChild(this.overlay);
  }
}