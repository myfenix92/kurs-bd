import {ModelAdminPage} from "../Model/index";
import {ViewAdminPage} from '../View/index';
import {APIClass} from "../../../API/index";
import {socket} from '../../../index'
const ViewAP = new ViewAdminPage()
const ModelAP = new ModelAdminPage()
const API = new APIClass()


export const ControllerAdminPage = class {

    init() {
        socket.on('chat message', function(msg, send) {
        ViewAP.viewDialog(msg, new Date(), 1, send)
    });
    }

    onCreateTable(event) {
        if (event.target.classList.contains('btn-msg') && event.target.tagName === 'BUTTON') {
            ViewAP.viewShowMessageBlock(event.target.id);
            ModelAP.onGetDialogAdmin(event.target.id);
        }
    }

    onBannedUser(event) {
        if (event.target.classList.contains('btn-ban') && event.target.tagName === 'BUTTON') {
            this.isBanUser = prompt(
                `Забанить пользователя c ID ${event.target.id}? (введите время в часах)`
            );
            while (isNaN(Number(this.isBanUser)) || Number(this.isBanUser) <= 0) {
                if (this.isBanUser === null) {
                    break;
                }
                alert(`Введите положительное число`);
                this.isBanUser = prompt(
                    `Забанить пользователя c ID ${event.target.id}? (введите время в часах)`
                );
            }
            if (this.isBanUser !== null) {
                ModelAP.onBannedUser(this.isBanUser, event.target.id);
                alert(`Пользователь забанен на ${this.isBanUser} часов`);
                location.reload();
            }
        }
    }

    onDeleteUser(event) {
        if (event.target.classList.contains('btn-delete') && event.target.tagName === 'BUTTON') {
            this.isDeleteUser = confirm(`Удалить пользователя c ID ${event.target.id}?`);
            if (this.isDeleteUser) {
                ModelAP.onDeleteUser(event.target.id);
                alert('Пользователь удален');
                location.reload();
            }
        }
    }

    sendMsg(e) {
        let id_user = document.querySelector('.msg_admin').getAttribute('id')
        if (document.querySelector('.send_msg_btn') && 
        e.target.closest('button') && 
        e.target.closest('button').classList.contains('send_msg_btn') &&
        document.querySelector('.header_text_login').textContent === 'admin') {
            socket.emit('chat message', document.querySelector('textarea').value, 0);
            ModelAP.sendNewMsg(id_user, document.querySelector('textarea').value)
            document.querySelector('textarea').value = ''
        }

      }
}
