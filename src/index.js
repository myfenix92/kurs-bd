import './styles/style.css';
import './scripts/start_page/styles/style_sp.css';
import './scripts/main_page/styles/style_mp.css';
import './scripts/main_page/styles/style_mp_msg.css';
import './scripts/table-page/styles/style_tp.css';
import './scripts/admin_page/styles/style_ap.css';

import {ControllerAdminPage} from './scripts/admin_page/Controller/index';
import {ControllerStartPage} from './scripts/start_page/Controller/index';
import {ModelStartPage} from './scripts/start_page/Model/index';
import {ControllerMainPage} from './scripts/main_page/Controller/index';
import {ControllerTablePage} from './scripts/table-page/Controller/index';
import {ModelMainPage} from './scripts/main_page/Model/index';
import {ModelTablePage} from './scripts/table-page/Model/index';
import {getLocalStorageData, getIdUser} from './LocalStorage';

const ControllerAP = new ControllerAdminPage();
const ControllerSP = new ControllerStartPage();
const ModelSP = new ModelStartPage();
const ControllerMP = new ControllerMainPage();
const ModelMP = new ModelMainPage();
const ControllerTP = new ControllerTablePage();
const ModelTP = new ModelTablePage();

// eslint-disable-next-line no-undef
const socket = io('http://localhost:8080', {
	transportOptions: {
		polling: {
			extraHeaders: {
				'Authorization': `Bearer ${getLocalStorageData('token')}`,
			},
		},
	},
});

document.body.addEventListener('click', ControllerAP.onShowMsgUser);
document.body.addEventListener('click', ControllerAP.closeMsgBlock);
document.body.addEventListener('click', ControllerAP.onBannedUser);
document.body.addEventListener('click', ControllerAP.onDeleteUser);
document.body.addEventListener('click', ControllerAP.sendMsg);
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
document.body.addEventListener('mousedown', mouseDownHandler());

document.addEventListener('DOMContentLoaded', function () {
	if (getIdUser() !== 1 && getIdUser()) {
		socket.on('connect', () => {
			socket.emit('room', `${getIdUser()}`);
		});
	}

	ModelMP.checkBanUser();
	var body = document.querySelector('body');
	if (getLocalStorageData('token')) {
		if (getLocalStorageData('bg_table').includes('unsplash')) {     
			body.style.setProperty('--body-image', `url("${getLocalStorageData('bg_table')}=&w=2400)") 50%/cover`);
		} else {
			body.style.setProperty('--body-image', `${getLocalStorageData('bg_table')}`);
		}
	}



	if (!getLocalStorageData('token') && getLocalStorageData('id_table') === null) {
		body.style.setProperty('--body-image', 'linear-gradient(#4B5ED7, #3F92D2, #5FD3B3)');
		ModelSP.init();
	}
	if (getLocalStorageData('token') && getLocalStorageData('id_table') === undefined) {
		body.style.setProperty('--body-image', 'linear-gradient(#4B5ED7, #3F92D2, #5FD3B3)');
		ModelMP.init();
	}
	if (getLocalStorageData('token') && getLocalStorageData('id_table') !== undefined) {
		setTimeout(() => {
			ModelTP.getStickers(getLocalStorageData('id_table'), getLocalStorageData('name_table'));
		}, 300);
	}
});


setTimeout(() =>{
	document.querySelectorAll('.record_block').forEach((e) => {
		e.addEventListener('dragstart', dragStart);
	});
	document.querySelectorAll('.column_list').forEach((e) => {
		e.addEventListener('dragenter', dragEnter);
		e.addEventListener('dragover', dragOver);
		e.addEventListener('drop', dragDrop);
	});
}, 1000);

let pos = { right: 0, left: 0, x: 0, y: 0 };
let dragStartVar = 0;
let dragEndVar = 0;
let id_record = 0;

function mouseDownHandler(event) {
	let block_column = document.querySelector('.block_columns');
	if (block_column) {
		block_column.style.userSelect = 'none';
		pos = {
			left: block_column.scrollLeft,
			right: block_column.scrollRight,
			x: event.clientX,
			y: event.clientY,
		};
	}

	document.addEventListener('mousemove', mouseMoveHandler);
	document.addEventListener('mouseup', mouseUpHandler);
}

function mouseMoveHandler(e) {
	let block_column = document.querySelector('.block_columns');
	const dx = e.clientX - pos.x;
	const dy = e.clientY - pos.y;
	if (block_column) {
		block_column.scrollRight = pos.right - dy;
		block_column.scrollLeft = pos.left - dx;
	}
}

function mouseUpHandler() {
	let block_column = document.querySelector('.block_columns');
	document.removeEventListener('mousemove', mouseMoveHandler);
	document.removeEventListener('mouseup', mouseUpHandler);
	if (block_column) {
		block_column.style.removeProperty('user-select');
	}
}

function dragStart(e) {
	document.removeEventListener('mousedown', mouseDownHandler);
	e.dataTransfer.setData('id', e.target.id);
	e.dataTransfer.effectAllowed = 'move';
	id_record = e.target.id;
	dragStartVar =  e.target.closest('.column').dataset.id_sticker;
}

function dragEnter(e) {
	e.preventDefault();
	dragEndVar = e.target.closest('.column').dataset.id_sticker;
	return true;
}

function dragDrop(e) {
	var data = e.dataTransfer.getData('id');
	if (dragStartVar !== dragEndVar) {
		e.target.closest('.column_list').appendChild(document.getElementById(data));
		ModelTP.moveRecordFromSticker(dragEndVar, id_record);
	} 
			
}

function dragOver(e) {
	e.preventDefault();
	e.dataTransfer.dropEffect = 'move';
}

export {socket};