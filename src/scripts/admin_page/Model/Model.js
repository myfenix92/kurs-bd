import {
  ViewAdminPage
} from '../../admin_page/View/index';
import {
  APIClass
} from '../../../API/index';

import { getLocalStorageData, getIdUser } from '../../../LocalStorage';

const ViewAP = new ViewAdminPage()
const API = new APIClass()
let info_users = []
export const ModelAdminPage = class {

  init() {
    this.onGetUsers();
    this.onGetCountUsers();
  }

  onGetCountUsers() {
    API.getCountUsers().then(data => {
      console.log(data)
      data.forEach((el) => {
        ViewAP.viewAdminCountUsers(el.all_users, el.online)
      })
    })
  }

  onGetUsers() {
    info_users = [];
    API.getMsgFromUsers().then(data => {
        data.forEach((el) => {
          info_users.push(el);
        })
        console.log(info_users)
    })
   
    API.getUsers().then(data => {
      ViewAP.ViewCreateTable();
      data.forEach((el) => {
        ViewAP.viewAdminPage(el.id_user, el.login, el.sex, el.date_birth.slice(0, 10), el.date_registr.slice(0, 10), el.count_tables,
        info_users.find(count_msg => count_msg.id_user === el.id_user).count_msg)
      })
    })
    
  }
}