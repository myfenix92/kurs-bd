import {
  ViewStartPage
} from '../View/index';
import {
  APIClass
} from '../../../API/index';
import {
  setLocalStorageData
} from '../../../LocalStorage/index';

const ViewSP = new ViewStartPage()
const API = new APIClass()

export const ModelStartPage = class {

  init() {
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
      API.createNewUser(login, password, date_birth, sex).then(data => {
        if (data.regStatus) {
          localStorage.clear()
          setLocalStorageData('id_user', data.id_user);
        } else {
          ViewSP.onErrorValue('register-login')
        }
      })
  }

  onLoginUser(login, password) {
    API.loginUser(login, password).then(data => {
      if (data.loginStatus) {
        localStorage.clear()
        setLocalStorageData('id_user', data.id_user);
        setLocalStorageData('token', data.loginToken);
      } else {
        ViewSP.onErrorValue('login-value')
      }
    })
  }
}