//import './styles/start_page/style.css';
//import './styles/main_page/style.css';
import './styles/style.css'
import { ControllerStartPage } from './scripts/start_page/Controller/index';
import { ModelStartPage } from './scripts/start_page/Model/index';
import { ControllerMainPage } from './scripts/main_page/Controller/index'
import { ControllerTablePage } from './scripts/table-page/Controller/index'
import { ModelMainPage } from './scripts/main_page/Model/index'
import { ModelTablePage } from './scripts/table-page/Model/index';
import { getLocalStorageData, setLocalStorageData } from './LocalStorage';

const ControllerSP = new ControllerStartPage()
const ModelSP = new ModelStartPage()

const ControllerMP = new ControllerMainPage()
const ModelMP = new ModelMainPage()

const ModelTP = new ModelTablePage()
const ControllerTP = new ControllerTablePage()

document.body.addEventListener('click', ControllerSP.onClickHandler);
document.body.addEventListener('click', ControllerSP.onContinueHandler);

document.body.addEventListener('click', ControllerMP.onCreateTable)
//document.body.addEventListener('keyup', ControllerMP.onCreateTable)
document.body.addEventListener('click', ControllerMP.onFilterHandler)
document.body.addEventListener('click', ControllerMP.onProfileHandler)
document.body.addEventListener('click', ControllerMP.onChangeProfileHandler)
document.body.addEventListener('click', ControllerMP.onLogOutHandler)
document.body.addEventListener('click', ControllerMP.onclickTable)

document.body.addEventListener('click', ControllerTP.onChangeNameTableHandler)
document.body.addEventListener('click', ControllerTP.onCreateStickerHandler)
document.body.addEventListener('click', ControllerTP.onPopMenu)
document.body.addEventListener('click', ControllerTP.onCreateRecord)
document.body.addEventListener('click', ControllerTP.onFilterHandler)
document.body.addEventListener('click', ControllerTP.onDeleteStickerHandler)
document.body.addEventListener('click', ControllerTP.onChangeNameStickerHandler)
document.body.addEventListener('click', ControllerTP.onChangeRecordHandler)
document.body.addEventListener('click', ControllerTP.onHistoryChangesHandler)
document.body.addEventListener('click', ControllerTP.onDeleteTable)
document.body.addEventListener('keyup', ControllerTP.onChangeRecordHandler)
document.body.addEventListener('keyup', ControllerTP.onChangeNameStickerHandler)
document.body.addEventListener('keyup', ControllerTP.onCreateRecord)
document.body.addEventListener('keyup', ControllerTP.onChangeNameTableHandler)
document.body.addEventListener('keyup', ControllerTP.onCreateStickerHandler)
document.body.addEventListener('keyup', ControllerTP.onChangeNameTableHandler)
document.body.addEventListener('change', ControllerTP.onChangeIsDoneRecord)

//ModelSP.init()
//setLocalStorageData('id_user', 6)
//ModelTP.getStickers(147)

document.addEventListener("DOMContentLoaded", function(){
  if (!getLocalStorageData('token')) {
        ModelSP.init()
      } else {
        ModelMP.init()
      }
 })