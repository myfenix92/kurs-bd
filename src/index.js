import './styles/style.css'
import {ControllerAdminPage} from './scripts/admin_page/Controller/index';
import {ControllerStartPage} from './scripts/start_page/Controller/index';
import {ModelStartPage} from './scripts/start_page/Model/index';
import {ControllerMainPage} from './scripts/main_page/Controller/index'
import {ControllerTablePage} from './scripts/table-page/Controller/index'
import {ModelMainPage} from './scripts/main_page/Model/index'
import {ModelTablePage} from './scripts/table-page/Model/index';
import {getLocalStorageData} from './LocalStorage';
//import {socket} from 'socket.io-client'

const ControllerAP = new ControllerAdminPage();
const ControllerSP = new ControllerStartPage();
const ModelSP = new ModelStartPage();
const ControllerMP = new ControllerMainPage();
const ModelMP = new ModelMainPage();
const ControllerTP = new ControllerTablePage();
const ModelTP = new ModelTablePage();

var socket = io('http://localhost:8080', { });

document.body.addEventListener('click', ControllerAP.onCreateTable);
document.body.addEventListener('click', ControllerAP.onBannedUser);
document.body.addEventListener('click', ControllerAP.onDeleteUser);
document.body.addEventListener('click', ControllerAP.sendMsg1);
document.body.addEventListener('click', ControllerSP.onClickHandler);
document.body.addEventListener('click', ControllerSP.onContinueHandler);
document.body.addEventListener('click', ControllerMP.onCreateTable);
document.body.addEventListener('click', ControllerMP.onclickTable);
document.body.addEventListener('click', ControllerMP.onFilterHandler);
document.body.addEventListener('click', ControllerMP.onProfileHandler);
document.body.addEventListener('click', ControllerMP.onChangeProfileHandler);
document.body.addEventListener('click', ControllerMP.onShowMsgBlock);
document.body.addEventListener('click', ControllerMP.sendMsg);
document.body.addEventListener('click', ControllerMP.onLogOutHandler);
document.body.addEventListener('click', ControllerTP.onChangeNameTableHandler);
document.body.addEventListener('keyup', ControllerTP.onChangeNameTableHandler);
document.body.addEventListener('change', ControllerTP.onChangeIsDoneRecord);
document.body.addEventListener('click', ControllerTP.onCreateStickerHandler);
document.body.addEventListener('keyup', ControllerTP.onCreateStickerHandler);
document.body.addEventListener('click', ControllerTP.onPopMenu);
document.body.addEventListener('click', ControllerTP.onCreateRecord);
document.body.addEventListener('keyup', ControllerTP.onCreateRecord);
document.body.addEventListener('click', ControllerTP.onFilterHandler);
document.body.addEventListener('click', ControllerTP.onDeleteStickerHandler);
document.body.addEventListener('click', ControllerTP.onChangeNameStickerHandler);
document.body.addEventListener('keyup', ControllerTP.onChangeNameStickerHandler);
document.body.addEventListener('click', ControllerTP.onChangeRecordHandler);
document.body.addEventListener('keyup', ControllerTP.onChangeRecordHandler);
document.body.addEventListener('click', ControllerTP.onHistoryChangesHandler);
document.body.addEventListener('click', ControllerTP.onviewBgImageChangesHandler);
document.body.addEventListener('click', ControllerTP.onViewColorHandler);
document.body.addEventListener('click', ControllerTP.onViewImageHandler);
document.body.addEventListener('click', ControllerTP.onViewImageLoadMoreHandler);
document.body.addEventListener('click', ControllerTP.onChangeBgTable);
document.body.addEventListener('keyup', ControllerTP.onViewImageInputHandler);
document.body.addEventListener('click', ControllerTP.onBackToTables);
document.body.addEventListener('click', ControllerTP.onDeleteTable);
document.body.addEventListener('click', ControllerTP.onLogOutHandler);

document.addEventListener("DOMContentLoaded", function () {
  var body = document.querySelector('body')
  if (getLocalStorageData('token')) {
    if (getLocalStorageData('bg_table').includes('unsplash')) {     
      body.style.setProperty('--body-image', `url("${getLocalStorageData('bg_table')}=&w=2400)") 50%/cover`);
    } else {
      body.style.setProperty('--body-image', `${getLocalStorageData('bg_table')}`);
    }
  }



  if (!getLocalStorageData('token') && getLocalStorageData('id_table') === null) {
    body.style.setProperty('--body-image', `linear-gradient(#218aba, #162657)`);
    ModelSP.init();
  }
  if (getLocalStorageData('token') && getLocalStorageData('id_table') === undefined) {
    body.style.setProperty('--body-image', `linear-gradient(#218aba, #162657)`);
    ModelMP.init();
  }
  if (getLocalStorageData('token') && getLocalStorageData('id_table') !== undefined) {
    setTimeout(() => {
      ModelTP.getStickers(getLocalStorageData('id_table'), getLocalStorageData('name_table'))
    }, 300);
  }
});

export {socket}