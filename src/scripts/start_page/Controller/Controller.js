import {
  ModelStartPage
} from "../Model/index";
import {
  ModelMainPage
} from "../../main_page/Model/index";
import {
  ViewStartPage
} from "../View/index";

const ModelSP = new ModelStartPage()
const ModelMP = new ModelMainPage()
const ViewSP = new ViewStartPage()

export const ControllerStartPage = class {
  constructor() {
    this.clickValue;
  }

  onClickHandler(event) {
    if (event.target.classList.contains('header_btn_register') && event.target.tagName === 'BUTTON') {
      this.clickValue = 'register';
      ModelSP.onChangeForm(this.clickValue)
    } else
    if (event.target.classList.contains('header_btn_log') && event.target.tagName === 'BUTTON') {
      this.clickValue = 'login';
      ModelSP.onChangeForm(this.clickValue)
    }
  }

  onContinueHandler(event) {
    this.errorPassword = document.querySelector('.error_password.password');
    this.errorPasswordCheck = document.querySelector('.error_password.password_check');
    this.login = document.querySelector('#login');
    this.password = document.querySelector('#password');
    this.passwordCheck = document.querySelector('#password_check');
    this.date_birth = document.querySelector('#b-day');
    this.sex = Array.from(document.getElementsByName('sex'));
    if (this.clickValue === 'register') {
      if (event.target.classList.contains('form_in_continue') && event.target.tagName === 'BUTTON') {
        document.querySelectorAll('.error_password').forEach((e) => {
          e.textContent = '';
        })
        if (this.password.value === this.passwordCheck.value &&
          (this.password.value.length < 6 || this.password.value.length > 20)) {
          this.errorPasswordCheck.textContent = '';
          this.errorPassword.textContent = 'Длина меньше 6 или 20 символов';
        } else if (this.password.value !== this.passwordCheck.value) {
          this.errorPasswordCheck.textContent = '';
          this.errorPasswordCheck.textContent = 'Пароли не совпадают';
        } else if (document.querySelector('#b-day').value === '') {
          this.errorPassword = document.querySelector('.error_password.b_day');
          this.errorPassword.textContent = 'Введите дату рождения';
        } else if (this.password.value === this.passwordCheck.value) {
          ModelSP.onRegisterUser(this.login.value, this.password.value, this.date_birth.value, this.sex.find(r => r.checked).value);
          document.querySelector('header').innerHTML = '';
          document.querySelector('main').innerHTML = '';
          ModelMP.init();
        }

      }
    }

    if (this.clickValue === 'login') {
      if (event.target.classList.contains('form_in_continue') && event.target.tagName === 'BUTTON') {
        ModelSP.onLoginUser(this.login.value, +this.password.value);
        setTimeout(() => {
          if (localStorage.length !== 0) {
            document.querySelector('header').innerHTML = '';
            document.querySelector('main').innerHTML = '';
            ModelMP.init()
          }
        }, 300)

      }
    } 
  };

}