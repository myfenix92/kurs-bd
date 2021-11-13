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
    this.isFocus = document.activeElement === this.nameTableFieldInput
    if (event.target.tagName === 'BUTTON' && event.target.classList.contains('change_name_table')) {
      this.nameTableField.classList.add('hide');
      this.nameTableFieldInput.classList.add('show');
      this.nameTableFieldInput.classList.remove('hide');
      this.isFocus = !this.isFocus
    }
    if (!this.isFocus && this.nameTableFieldInput !== null) {
      this.nameTableField.classList.remove('hide');
      this.nameTableFieldInput.classList.remove('show');
      this.nameTableFieldInput.classList.add('hide');
    }
    if (event.key === 'Enter' && this.isFocus) {
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
    this.isFocus = document.activeElement === document.querySelector('.new_sticker');
    if (event.key === 'Enter' && this.isFocus) {
      if (document.querySelectorAll('.title_column_input')[0].value.trim() !== '') {
        this.name_sticker = document.querySelectorAll('.title_column_input')[0];
        ModelTP.createSticker(144, this.name_sticker.value);
        
        this.name_sticker.classList.add('hide');
        this.name_sticker.classList.remove('new_sticker');
        this.title_column = document.querySelectorAll('.title_column_span')[0];
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
    if (!this.isFocus && document.querySelector('.new_sticker') !== null) {
      document.querySelectorAll('.column')[0].remove();
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
    this.isFocus = document.activeElement === document.querySelector('.input_create')
    if ((event.target.tagName === 'BUTTON' && event.target.classList.contains('add_record')) ||
      (event.target.tagName === 'LI' && event.target.classList.contains('add_record_menu'))) {
      this.id_sticker = event.target.parentNode.getAttribute('data-id_sticker') != null ? event.target.parentNode.getAttribute('data-id_sticker') : event.target.parentNode.parentNode.parentNode.getAttribute('data-id_sticker')
      ViewTP.viewCreateRecord(this.id_stickers.indexOf(this.id_sticker))
      this.isFocus = !this.isFocus
    }
    if (!this.isFocus && document.querySelector('.input_create') !== null) {
       document.querySelector('.input_create').remove()
    }
    if (event.key === 'Enter' && this.isFocus && !event.shiftKey) {
      this.value = document.querySelector('.input_create')
      if (this.value.value.trim() !== '') {
        ModelTP.createRecord(this.id_sticker, this.value.value)
        setTimeout(() => {
          API.getStickerValue(this.id_sticker).then(data => {
            document.querySelector('.input_create').remove()
            ViewTP.viewRecords(data[data.length - 1].id_record, data[data.length - 1].record, this.id_stickers.indexOf(this.id_sticker), data[data.length - 1].done)
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

  onDeleteStickerHandler(event) {
    this.id_stickers = [];
    document.querySelectorAll('.column').forEach((e) => {
      this.id_stickers.push(e.getAttribute('data-id_sticker'))
    })

    if (event.target.tagName === 'LI' && event.target.classList.contains('delete_sticker')) {
      this.id_sticker = event.target.parentNode.parentNode.parentNode.getAttribute('data-id_sticker')
      document.querySelectorAll('.column').forEach((e) => {
        if (e.getAttribute('data-id_sticker') === this.id_sticker) {
            e.remove()
        }
      })
      ModelTP.deleteSticker(this.id_sticker)
    }
  }

  onChangeNameStickerHandler(event) {
    this.id_stickers = [];
    document.querySelectorAll('.column').forEach((e) => {
      this.id_stickers.push(e.getAttribute('data-id_sticker'))
    })
    this.id_sticker;
    this.nameStickerField = document.querySelectorAll('.title_column_span');
    this.nameStickerFieldInput = document.querySelectorAll('.title_column_input');
    this.isFocus = document.activeElement === this.nameStickerFieldInput[this.id_stickers.indexOf(this.id_sticker)]
    if (event.target.tagName === 'LI' && event.target.classList.contains('change_sticker_name')) {
      this.id_sticker = event.target.parentNode.parentNode.parentNode.getAttribute('data-id_sticker')
      document.querySelectorAll('.column').forEach((e) => {
        if (e.getAttribute('data-id_sticker') === this.id_sticker) {
          this.isFocus = !this.isFocus
          this.nameStickerFieldInput[this.id_stickers.indexOf(this.id_sticker)].value = this.nameStickerField[this.id_stickers.indexOf(this.id_sticker)].textContent
          this.nameStickerField[this.id_stickers.indexOf(this.id_sticker)].classList.add('hide')
          this.nameStickerFieldInput[this.id_stickers.indexOf(this.id_sticker)].classList.add('show');
          this.nameStickerFieldInput[this.id_stickers.indexOf(this.id_sticker)].classList.remove('hide');
          this.nameStickerFieldInput[this.id_stickers.indexOf(this.id_sticker)].focus();
        }
      })
    }
    if (!this.isFocus && document.querySelector('input.show') !== null) {
      this.nameStickerField[this.id_stickers.indexOf(this.id_sticker)].classList.remove('hide');
      this.nameStickerFieldInput[this.id_stickers.indexOf(this.id_sticker)].classList.remove('show');
      this.nameStickerFieldInput[this.id_stickers.indexOf(this.id_sticker)].classList.add('hide');
    }
    if (event.key === 'Enter' && this.isFocus) {
      if (this.nameStickerFieldInput[this.id_stickers.indexOf(this.id_sticker)].value.trim() === '') {
        this.nameStickerFieldInput[this.id_stickers.indexOf(this.id_sticker)].value = '';
        this.nameStickerFieldInput[this.id_stickers.indexOf(this.id_sticker)].setAttribute('placeholder', 'Name sticker cant be empty');
      } else {
        this.nameStickerField[this.id_stickers.indexOf(this.id_sticker)].textContent = this.nameStickerFieldInput[this.id_stickers.indexOf(this.id_sticker)].value
        this.nameStickerFieldInput[this.id_stickers.indexOf(this.id_sticker)].value = '';
        this.nameStickerField[this.id_stickers.indexOf(this.id_sticker)].classList.remove('hide');
        this.nameStickerFieldInput[this.id_stickers.indexOf(this.id_sticker)].classList.remove('show');
        this.nameStickerFieldInput[this.id_stickers.indexOf(this.id_sticker)].classList.add('hide');
        ModelTP.changeNameSticker(this.id_sticker, this.nameStickerField[this.id_stickers.indexOf(this.id_sticker)].textContent);
      }
    }
  }

  onChangeRecordHandler(event) {
    this.id_records = [];
    document.querySelectorAll('.record_block').forEach((e) => {
      this.id_records.push(e.getAttribute('data-id_record'))
    })
    
     this.recordField = document.querySelectorAll('.record');
     this.recordFieldInput = document.querySelectorAll('.input_record');
     this.isFocus = document.activeElement === this.recordFieldInput[this.id_records.indexOf(this.id_record)]
    if ((event.target.tagName === 'P' || event.target.tagName === 'SPAN') || event.target.parentNode.classList.contains('record')) {
      this.id_record = event.target.parentNode.getAttribute('data-id_record') != null ? event.target.parentNode.getAttribute('data-id_record') : event.target.getAttribute('data-id_record')
      this.isFocus = !this.isFocus
      document.querySelectorAll('.record').forEach((e) => {
        if (e.parentNode.getAttribute('data-id_record') === this.id_record) {
          e.parentNode.childNodes[0].classList.add('hide')
          e.parentNode.childNodes[1].classList.add('hide')
         this.recordFieldInput[this.id_records.indexOf(this.id_record)].value = this.recordField[this.id_records.indexOf(this.id_record)].textContent
         this.recordField[this.id_records.indexOf(this.id_record)].classList.add('hide')
          this.recordFieldInput[this.id_records.indexOf(this.id_record)].classList.add('show');
         this.recordFieldInput[this.id_records.indexOf(this.id_record)].classList.remove('hide');
          this.recordFieldInput[this.id_records.indexOf(this.id_record)].focus() 
        }
      })
    }
    if (!this.isFocus && document.querySelector('textarea.show') !== null) {
      document.querySelectorAll('label').forEach((e) => {
        if (e.classList.contains('hide')) {
          e.classList.remove('hide')
        }
      })
      document.querySelectorAll('[type="checkbox"]').forEach((e) => {
        if (e.classList.contains('hide')) {
          e.classList.remove('hide')
        }
      })
      this.recordField[this.id_records.indexOf(this.id_record)].classList.remove('hide');
      this.recordFieldInput[this.id_records.indexOf(this.id_record)].classList.remove('show');
      this.recordFieldInput[this.id_records.indexOf(this.id_record)].classList.add('hide');

    }
    if (event.key === 'Enter' && !event.shiftKey && this.isFocus) {
      this.id_record = event.target.parentNode.getAttribute('data-id_record') != null ? event.target.parentNode.getAttribute('data-id_record') : event.target.getAttribute('data-id_record')
      if (this.recordFieldInput[this.id_records.indexOf(this.id_record)].value.trim() === '') {
        this.recordFieldInput[this.id_records.indexOf(this.id_record)].value = '';
        this.recordFieldInput[this.id_records.indexOf(this.id_record)].setAttribute('placeholder', 'Record cant be empty');
      } else {
        document.querySelectorAll('label').forEach((e) => {
          if (e.classList.contains('hide')) {
            e.classList.remove('hide')
          }
        })
        document.querySelectorAll('[type="checkbox"]').forEach((e) => {
          if (e.classList.contains('hide')) {
            e.classList.remove('hide')
          }
        })
        this.recordField[this.id_records.indexOf(this.id_record)].textContent = this.recordFieldInput[this.id_records.indexOf(this.id_record)].value.slice(0, this.recordFieldInput[this.id_records.indexOf(this.id_record)].value.length - 1)
        this.recordField[this.id_records.indexOf(this.id_record)].classList.remove('hide');
        this.recordFieldInput[this.id_records.indexOf(this.id_record)].classList.remove('show');
        this.recordFieldInput[this.id_records.indexOf(this.id_record)].classList.add('hide');
        ModelTP.changeRecord(this.id_record, this.recordFieldInput[this.id_records.indexOf(this.id_record)].value);
      }
    }
  }
}