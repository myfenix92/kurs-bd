import {
  ModelTablePage
} from "../Model/index";

import {
  ViewTablePage
} from "../View/index";

import {
  APIClass
} from "../../../API/index"

const ModelTP = new ModelTablePage()
const ViewTP = new ViewTablePage()
const API = new APIClass()

export const ControllerTablePage = class {

  onChangeNameTableHandler(event) {
    this.nameTableField = document.querySelector('.name_table');
    this.nameTableFieldInput = document.querySelector('.name_table_input');
    if (event.target.tagName === 'BUTTON' && event.target.classList.contains('change_name_table')) {
      this.nameTableField.classList.add('hide');
      this.nameTableFieldInput.classList.add('show');
      this.nameTableFieldInput.classList.remove('hide');
    }
    if (event.key === 'Enter') {
      if (this.nameTableFieldInput.value.trim() === '') {
        this.nameTableFieldInput.value = '';
        this.nameTableFieldInput.setAttribute('placeholder', 'Name cant be empty');
      } else {
        ModelTP.changeTableName(144, this.nameTableFieldInput.value);
        this.nameTableField.textContent = this.nameTableFieldInput.value
        this.nameTableField.classList.remove('hide');
        this.nameTableFieldInput.classList.remove('show');
        this.nameTableFieldInput.classList.add('hide');
      }
    }
  }

  onChangeIsDoneRecord(event) {
    if (event.target.parentNode.tagName === 'P' && event.target.parentNode.classList.contains('show')) {
    this.id_record = event.target.parentNode.getAttribute('data-id_record');
     ModelTP.isDone(this.id_record)
    }
  }

  onCreateStickerHandler(event) {
    
    if (event.target.tagName === 'BUTTON' && event.target.classList.contains('create_column')) {
      ViewTP.viewCreateStickers()
      
    }
    if (event.key === 'Enter') {
      if (document.querySelectorAll('.title_column_input')[0].value.trim() !== '') {
       
        this.name_sticker = document.querySelectorAll('.title_column_input')[0];
        ModelTP.createSticker(144, this.name_sticker.value);
        
        this.name_sticker.classList.add('hide');
        this.title_column = document.querySelectorAll('.title_column')[0];
        this.title_column.textContent = this.name_sticker.value;
      } else {
        this.name_sticker = document.querySelectorAll('.title_column_input')[0];
        this.name_sticker.value = '';
        this.name_sticker.setAttribute('placeholder', 'Name cant be empty')
      }
      setTimeout(() => {
        API.getUserTableData(144).then(data => {
          document.querySelectorAll('.column')[0].setAttribute('data-id_sticker', data[0].id_sticker)
          document.querySelectorAll('.pop_menu_column')[0].setAttribute('id', data[0].id_sticker)
        })
      }, 500)
    } 
  }

  onPopMenu(event) {
    if (event.target.parentNode.classList.contains('menu_column')) {
      document.querySelectorAll('.pop_menu_column').forEach((e) => {
        if (!e.classList.contains('show') && e.getAttribute('id') === event.path[3].getAttribute('data-id_sticker')) {
           e.classList.add('show')
        } else {
          e.classList.remove('show')
        }
      }) 
    } else {
      document.querySelectorAll('.pop_menu_column').forEach((e) => {
          e.classList.remove('show')
      }) 
    }
  }

  onCreateRecord(event) {
    this.id_stickers = [];
    document.querySelectorAll('.column').forEach((e) => {
      this.id_stickers.push(e.getAttribute('data-id_sticker'))
    })
    this.id_sticker;
    if ((event.target.tagName === 'BUTTON' && event.target.classList.contains('add_record'))
    || (event.target.tagName === 'LI' && event.target.classList.contains('add_record_menu'))) {
      this.id_sticker = event.target.parentNode.getAttribute('data-id_sticker') != null ? event.target.parentNode.getAttribute('data-id_sticker') : event.target.parentNode.parentNode.parentNode.getAttribute('data-id_sticker')
      ViewTP.viewCreateRecord(this.id_stickers.indexOf(this.id_sticker))
    } 
    // else {
    //   if (!event.target.classList.contains('input_create')) {
    //     if (document.querySelector('.input_create') === null) {
    //       return
    //     } else {
    //       document.querySelector('.input_create').remove()
    //     }
        
    //   }
    // }
    if (event.key === 'Enter') {
      this.value = document.querySelector('.input_create')
      if (this.value.value.trim() !== '') {
        ModelTP.createRecord(this.id_sticker, this.value.value)
        setTimeout(() => {
          API.getStickerValue(this.id_sticker).then(data => {
            document.querySelector('.input_create').remove()
            ViewTP.viewRecords(data[data.length-1].id_record, data[data.length-1].record, this.id_stickers.indexOf(this.id_sticker), data[data.length-1].done)
          })
        }, 300)
      } else {
        this.value.value = '';
        this.value.setAttribute('placeholder', 'Record cant be empty')
      } 

    }
    
  }

  onFilterHandler(event) {
    this.id_stickers = [];
    document.querySelectorAll('.column').forEach((e) => {
      this.id_stickers.push(e.getAttribute('data-id_sticker'))
    })
    this.id_sticker;
    if (event.target.tagName === 'LI' && event.target.classList.contains('sort_alphabet')) {
      this.id_sticker = event.target.parentNode.parentNode.parentNode.getAttribute('data-id_sticker')
      document.querySelectorAll('.column_list').forEach((e) => {
        if (e.parentNode.getAttribute('data-id_sticker') === this.id_sticker) {
          e.innerHTML = ''
        }
      })
      ModelTP.filterByAlphabet(this.id_sticker, this.id_stickers.indexOf(this.id_sticker))
    }

    if (event.target.tagName === 'LI' && event.target.classList.contains('sort_new')) {
      this.id_sticker = event.target.parentNode.parentNode.parentNode.getAttribute('data-id_sticker')
      document.querySelectorAll('.column_list').forEach((e) => {
        if (e.parentNode.getAttribute('data-id_sticker') === this.id_sticker) {
          e.innerHTML = ''
        }
      })
      ModelTP.filterByNew(this.id_sticker, this.id_stickers.indexOf(this.id_sticker))
    }

    if (event.target.tagName === 'LI' && event.target.classList.contains('sort_old')) {
      this.id_sticker = event.target.parentNode.parentNode.parentNode.getAttribute('data-id_sticker')
      document.querySelectorAll('.column_list').forEach((e) => {
        if (e.parentNode.getAttribute('data-id_sticker') === this.id_sticker) {
          e.innerHTML = ''
        }
      })
      ModelTP.filterByOld(this.id_sticker, this.id_stickers.indexOf(this.id_sticker))
    }
  }
}