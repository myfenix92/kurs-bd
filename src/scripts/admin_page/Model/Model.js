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
    })
   
    API.getUsers().then(data => {
      ViewAP.ViewCreateTable();
      data.forEach((el) => {
        ViewAP.viewAdminPage(el.id_user, el.login, el.sex, el.date_birth.slice(0, 10), el.date_registr.slice(0, 10), el.count_tables,
        info_users.find(count_msg => count_msg.id_user === el.id_user).count_msg, el.ban)
      })
    })
  }

  onGetDialogAdmin(id_user) {
    API.getDialogAdmin(id_user).then(data => {
      data.forEach((el) => {
        ViewAP.viewDialog(el.message, el.date_sent, el.type_msg)
      })
    })
  }

  onBannedUser(time_ban, id_user) {
    API.bannedUser(time_ban, id_user);
  }

  onDeleteUser(id_user) {
    console.log(id_user)
    API.deleteUser(id_user);
  }
}