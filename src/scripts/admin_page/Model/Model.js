import {
  ViewAdminPage
} from '../../admin_page/View/index';
import {
  APIClass
} from '../../../API/index';

import { getLocalStorageData, getIdUser } from '../../../LocalStorage';

const ViewAP = new ViewAdminPage()
const API = new APIClass()
export const ModelAdminPage = class {

  init() {
    this.onGetUsers();
  }

  onGetUsers() {
    API.getUsers().then(data => {
      console.log(data)
      ViewAP.ViewCreateTable();
      data.forEach((el) => {
        ViewAP.viewAdminPage(el.id_user, el.login, el.sex, el.date_birth.slice(0, 10), el.date_registr.slice(0, 10), el.count_tables)
      })
    })
  }
}