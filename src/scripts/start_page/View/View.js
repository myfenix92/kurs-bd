export const ViewStartPage = class {
  constructor() {
    this.isError = true;
    this.isErrorLogin = true;
  }

  viewHeaderStartPage() {
    this.header = document.querySelector('header');
    this.headerBlock = document.createElement('div');
    this.headerBlock.classList.add('header_sp')
    this.headerTitle = document.createElement('h1');
    this.headerTitle.classList.add('header_h1');
    this.headerTitle.textContent = 'Программа управления проектами';
    
    this.descript = document.createElement('p');
    this.descript.classList.add('header_descript');
    this.descript.textContent = `Программа предназначена для создания отдельных досок 
    и записей на них.`

    this.headerBtn = document.createElement('div');
    this.headerBtn.classList.add('header_btn');

    this.btnReg = document.createElement('button');
    this.btnReg.classList.add('header_btn_register');
    this.btnReg.textContent = 'Регистрация';

    this.btnLog = document.createElement('button');
    this.btnLog.classList.add('header_btn_log');
    this.btnLog.textContent = 'Авторизация';

    this.headerBtn.append(this.btnReg, this.btnLog);
    this.headerBlock.append(this.headerTitle, this.descript, this.headerBtn);
    this.header.append(this.headerBlock)
  }

  viewStartPage(value) {
    this.main = document.querySelector('main');
    if (value === 'register') {
        this.main.innerHTML = `<div class="main_sp"><form class="form_in form_sp">
        <p class="form_in_input login">
          <label for="login">Логин</label>
          <input type="text" id="login" placeholder="ваш логин" maxLength="25">
          <p class="error_password login"></p>
        </p>
        <p class="form_in_input password">
          <label for="password">Пароль</label>
          <input type="password" name="" id="password" placeholder="123456">
          <p class="error_password password"></p>
        </p>
        <p class="form_in_input form_in_password-check">
          <label for="password_check">Повторите пароль</label>
          <input type="password" name="" id="password_check" placeholder="123456">
          <p class="error_password password_check"></p>
        </p>
        <p class="form_in_input b-day">
          <label for="b-day">Дата рождения</label>
          <input type="date" name="" id="b-day">
          <p class="error_password b_day"></p>
        </p>
        <p class="form_in_input sex">
          <span>Пол:</span>
          <input type="radio" name="sex" id="female" value="female" checked>
          <label for="female">женский</label>

          <input type="radio" name="sex" id="male" value="male">
          <label for="male">мужской</label>
        </p>
        <button class="form_in_continue" type="button">Продолжить</button>
      </form></div>`
    } else if (value === 'login') {
      this.main.innerHTML = `<div class="main_sp"><form class="form_in form_sp">
        <p class="form_in_input login">
          <label for="login">Логин</label>
          <input type="text" name="" id="login" placeholder="ваш логин">
          <p class="error_password login"></p>
        </p>
        <p class="form_in_input password">
          <label for="password">Пароль</label>
          <input type="password" name="" id="password" placeholder="123456">
        </p>
        <button class="form_in_continue" type="button">Продолжить</button>
      </form></div>`
    }
  }

  onErrorValue(value) {
    console.log(value)
    if (value === 'register-login') {
      this.errorPassword = document.querySelector('.error_password.login');
      this.errorPassword.textContent = 'Логин уже существует';
    }

    if (value === 'login-value') {
      this.errorPassword = document.querySelector('.error_password.login');
      this.errorPassword.textContent = 'Логин и/или пароль неверны';
      document.querySelector('#password').value = '';
    }
  }
}