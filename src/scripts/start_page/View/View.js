import '../../../styles/start_page/style.css'

export const ViewStartPage = class {
  constructor() {
    this.isError = true;
    this.isErrorLogin = true;
  }

  viewHeaderStartPage() {
    this.header = document.querySelector('header');
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
    this.header.append(this.headerTitle, this.descript, this.headerBtn);
  }

  viewStartPage(value) {
    this.main = document.querySelector('main');
    if (value === 'register') {
        this.main.innerHTML = `<form class="form_in">
        <p class="form_in_input login">
          <label for="login">Login</label>
          <input type="text" id="login" placeholder="yourLogin" maxLength="25">
          <p class="error_password login"></p>
        </p>
        <p class="form_in_input password">
          <label for="password">Password</label>
          <input type="password" name="" id="password" placeholder="123456">
          <p class="error_password password"></p>
        </p>
        <p class="form_in_input form_in_password-check">
          <label for="password_check">Password check</label>
          <input type="password" name="" id="password_check" placeholder="123456">
          <p class="error_password password_check"></p>
        </p>
        <p class="form_in_input b-day">
          <label for="b-day">B-day</label>
          <input type="date" name="" id="b-day">
          <p class="error_password b_day"></p>
        </p>
        <p class="form_in_input sex">
          <p>Choose a sex:</p>
          <input type="radio" name="sex" id="female" value="female" checked>
          <label for="female">female</label>

          <input type="radio" name="sex" id="male" value="male">
          <label for="male">male</label>
        </p>
        <button class="form_in_continue" type="button">Продолжить</button>
      </form>`
    } else if (value === 'login') {
      this.main.innerHTML = `<form class="form_in">
        <p class="form_in_input login">
          <label for="login">Login</label>
          <input type="text" name="" id="login" placeholder="yourLogin">
          <p class="error_password login"></p>
        </p>
        <p class="form_in_input password">
          <label for="password">Password</label>
          <input type="password" name="" id="password" placeholder="123456">
        </p>
        <button class="form_in_continue" type="button">Продолжить</button>
      </form>`
    }
  }

  onErrorValue(value) {
    if (value === 'register-login') {
      this.errorPassword = document.querySelector('.error_password.login');
      this.errorPassword.textContent = 'Login already exists';
    }

    if (value === 'login-value') {
      this.errorPassword = document.querySelector('.error_password.login');
      this.errorPassword.textContent = 'Login or password do not match';
      document.querySelector('#password').value = '';
    }
  }
}