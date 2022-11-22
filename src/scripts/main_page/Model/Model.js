import {
  ViewMainPage
} from '../View/index';
// import {
//   ControllerMainPage
// } from '../Controller/index';
import {socket} from '../../../index'
import {
  ModelAdminPage
} from '../../admin_page/Model/index';
import {
  ControllerAdminPage
} from '../../admin_page/Controller/index';
import {
  APIClass
} from '../../../API/index';

import { getLocalStorageData, getIdUser } from '../../../LocalStorage';
import { ModelStartPage } from '../../start_page/Model';

const ViewMP = new ViewMainPage()
const ModelAP = new ModelAdminPage()
const ControllerAP = new ControllerAdminPage()
//const ControllerMP = new ControllerMainPage()
const API = new APIClass()
const ModelSP = new ModelStartPage()

export const ModelMainPage = class {

  init() {
    setTimeout(() => {
      this.id_user = getIdUser();
      this.getLoginUser(this.id_user);
      
      setTimeout(() => {
        if (this.id_user !== 1) {
          this.onGetTables(this.id_user);
          ViewMP.viewTableBlock();
          ViewMP.viewFilterBlock();
          socket.on('chat message', function(msg, send) {
            document.querySelector('.calc_data').textContent = 'У вас новые сообщения'
            ViewMP.viewDialog(msg, new Date(), 0, send)
            
          });
        }
        else {
          ModelAP.init()
          ControllerAP.init()
        }
      }, 700)
    }, 500)
  }

  onGetTables(id_user) {
   // this.onGetCalcData(id_user);
    API.getUserTables(id_user).then(data => {
      data.forEach((el) => {
        ViewMP.viewTables(el.id_table, el.name_table, el.date_create.slice(0, 10), el.count_records, el.bg_image)
      })
    })
  }

  onGetDialogAdmin(id_user) {
    API.getDialogAdmin(id_user).then(data => {
      data.forEach((el) => {
        
        ViewMP.viewDialog(el.message, el.date_sent, el.type_msg)
      })
    })
  }

  onReadNewMsg(id_user) {
    API.readNewMsg(id_user)
  }

  // onGetCalcData(id_user) {
  //   API.getNumericData(id_user).then(data => {
  //     if (data.message) {
  //       localStorage.clear();
  //       ModelSP.init()
  //     } else {
  //       ViewMP.viewCalcBlockAvg(parseFloat(Number(data[0].avg_tab).toFixed(2)));
  //       ViewMP.viewCalcBlockPercent(parseFloat(Number(data[0].percent_tab).toFixed(1)));
  //     }
      
  //   })
  // }

  createTable(id_user, nameTable) {
    API.createNewTable(id_user, nameTable).then(data => {
      if (data.errorMessage) {
        document.querySelector('#new_table').value = '';
        document.querySelector('#new_table').setAttribute('placeholder', data.errorMessage);
      } else {
        setTimeout(() => {
          this.onGetTables(id_user);
        }, 100)
        ViewMP.viewRemoveTable();
        document.querySelector('.filter_create').remove();
      }
    });
  }

  sendNewMsg(id_user, message) {
    API.newMsg(id_user, message)
  }

  filterTable(nameTable, dateFrom, dateTo, id_user) {
    API.getFilterTable(nameTable, dateFrom, dateTo, id_user).then(data => {
      ViewMP.viewRemoveTable();
      data.forEach((el) => {
        ViewMP.viewTables(el.id_table, el.name_table, el.date_create.slice(0, 10), el.count_records, el.bg_image)
      })
    });
  }

  profileData(id_user) {
    API.getAboutUser(id_user).then(data => {
      ViewMP.viewProfile(data.date_birth.slice(0,10), data.all_days, data.sex)
    })
  }

  changeProfileData(id_user, password, b_day, sex) {
   API.changeProfile(id_user, password, b_day, sex);
  }

  checkBanUser() {
    API.checkBan()
   }

  getLoginUser(id_user) {
    API.getAboutUser(id_user).then(data => {
      ViewMP.viewLoginUser(data.login)
    })
  //  API.getUsers()
  }
}