//import './styles/start_page/style.css';
//import './styles/main_page/style.css';
import { ControllerStartPage } from './scripts/start_page/Controller/index';
import { ModelStartPage } from './scripts/start_page/Model/index';
import { ControllerMainPage } from './scripts/main_page/Controller/index'
import { ModelMainPage } from './scripts/main_page/Model/index'

const ControllerSP = new ControllerStartPage()
const ModelSP = new ModelStartPage()

const ControllerMP = new ControllerMainPage()
const ModelMP = new ModelMainPage()

document.body.addEventListener('click', ControllerSP.onClickHandler);
document.body.addEventListener('click', ControllerSP.onContinueHandler);

document.body.addEventListener('click', ControllerMP.onCreateTable)
document.body.addEventListener('keyup', ControllerMP.onCreateTable)
document.body.addEventListener('click', ControllerMP.onFilterHandler)
document.body.addEventListener('click', ControllerMP.onProfileHandler)
document.body.addEventListener('click', ControllerMP.onChangeProfileHandler)
document.body.addEventListener('click', ControllerMP.onLogOutHandler)

ModelSP.init()