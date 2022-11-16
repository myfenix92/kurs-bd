import {
  ModelTablePage
} from "../Model/index";

import {
  ViewTablePage
} from "../View/index";

import { ModelStartPage } from "../../start_page/Model/index";
import { ModelMainPage } from "../../main_page/Model/index";

import {
  APIClass
} from "../../../API/index"
import { getLocalStorageData, setLocalStorageData } from "../../../LocalStorage";

const ModelTP = new ModelTablePage()
const ModelSP = new ModelStartPage()
const ModelMP = new ModelMainPage()
const ViewTP = new ViewTablePage()
const API = new APIClass()

let numberPage = 1;
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
        this.nameTableFieldInput.setAttribute('placeholder', 'имя не может быть пустым');
      } else {
        ModelTP.changeTableName(getLocalStorageData('id_table'), this.nameTableFieldInput.value);
        setTimeout(() => {
          if (this.nameTableFieldInput.placeholder !== 'имя доски уже существует') {
            console.log(this.nameTableFieldInput.placeholder)
            setLocalStorageData('name_table', this.nameTableFieldInput.value)
            this.nameTableField.textContent = this.nameTableFieldInput.value
            this.nameTableField.classList.remove('hide');
            this.nameTableFieldInput.classList.remove('show');
            this.nameTableFieldInput.classList.add('hide');
          }
        }, 200)
        
      }
    }
  }

  onChangeIsDoneRecord(event) {
    if (event.target.tagName === 'INPUT' && event.target.parentNode.classList.contains('show')) {
      this.id_record = event.target.parentNode.getAttribute('data-id_record');
      ModelTP.isDone(this.id_record)
    }
  }

  onCreateStickerHandler(event) {
    if (event.target.tagName === 'BUTTON' && event.target.classList.contains('create_column')) {
      if (document.querySelectorAll('.new_sticker').length < 1) {
        ViewTP.viewCreateStickers()
      } 
    }
    this.isFocus = document.activeElement === document.querySelector('.new_sticker');
    if (event.key === 'Enter' && this.isFocus) {
      if (document.querySelectorAll('.title_column_input')[0].value.trim() !== '') {
        this.name_sticker = document.querySelectorAll('.title_column_input')[0];
        ModelTP.createSticker(getLocalStorageData('id_table'), this.name_sticker.value);
        
        this.name_sticker.classList.add('hide');
        this.name_sticker.classList.remove('new_sticker');
        this.title_column = document.querySelectorAll('.title_column_span')[0];
        this.title_column.textContent = this.name_sticker.value;
      } else {
        this.name_sticker = document.querySelectorAll('.title_column_input')[0];
        this.name_sticker.value = '';
        this.name_sticker.setAttribute('placeholder', 'имя стикера не может быть пустым')
      }
      setTimeout(() => {
        API.getUserTableData(getLocalStorageData('id_table')).then(data => {
          document.querySelectorAll('.column')[0].setAttribute('data-id_sticker', data[0].id_sticker)
          document.querySelectorAll('.pop_menu_column')[0].setAttribute('id', data[0].id_sticker)
        })
      }, 500)
    } 
    if (!this.isFocus && document.querySelector('.new_sticker') !== null && !event.target.classList.contains('create_column')) {
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
      this.id_sticker = event.target.parentNode.getAttribute('data-id_sticker') !== null ? event.target.parentNode.getAttribute('data-id_sticker') : event.target.parentNode.parentNode.parentNode.getAttribute('data-id_sticker')
      this.isFocus = !this.isFocus
      if (document.querySelector('.input_create') !== null) {
        document.querySelector('.input_create').remove()
     }
     ViewTP.viewCreateRecord(this.id_stickers.indexOf(this.id_sticker))
    }
    if (!this.isFocus && document.querySelector('.input_create') !== null) {
       document.querySelector('.input_create').remove()
    }
    if (event.key === 'Enter' && this.isFocus && !event.shiftKey) {
      this.value = document.querySelector('.input_create')
      if (this.value.value.trim() !== '') {
        ModelTP.createRecord(this.id_sticker, this.value.value.slice(0, this.value.value.length - 1))
        setTimeout(() => {
          API.getStickerValue(this.id_sticker).then(data => {
            document.querySelector('.input_create').remove()
            ViewTP.viewRecords(data[data.length - 1].id_record, data[data.length - 1].record, this.id_stickers.indexOf(this.id_sticker), data[data.length - 1].done)
            ViewTP.viewCreateRecord(this.id_stickers.indexOf(this.id_sticker))
          })
        }, 300)
        
      } else {
        this.value.value = '';
        this.value.setAttribute('placeholder', 'Запись не может быть пустой')
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

    if (event.target.tagName === 'LI' && event.target.classList.contains('sort_old')) {
      this.id_sticker = event.target.parentNode.parentNode.parentNode.getAttribute('data-id_sticker')
      document.querySelectorAll('.column_list').forEach((e) => {
        if (e.parentNode.getAttribute('data-id_sticker') === this.id_sticker) {
          e.innerHTML = ''
        }
      })
      ModelTP.filterByNew(this.id_sticker, this.id_stickers.indexOf(this.id_sticker))
    }

    if (event.target.tagName === 'LI' && event.target.classList.contains('sort_new')) {
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
    if (!this.isFocus && document.querySelector('.title_column_input.show') !== null) {
      this.nameStickerField[this.id_stickers.indexOf(this.id_sticker)].classList.remove('hide');
      this.nameStickerFieldInput[this.id_stickers.indexOf(this.id_sticker)].classList.remove('show');
      this.nameStickerFieldInput[this.id_stickers.indexOf(this.id_sticker)].classList.add('hide');
    }
    if (event.key === 'Enter' && this.isFocus) {
      if (this.nameStickerFieldInput[this.id_stickers.indexOf(this.id_sticker)].value.trim() === '') {
        this.nameStickerFieldInput[this.id_stickers.indexOf(this.id_sticker)].value = '';
        this.nameStickerFieldInput[this.id_stickers.indexOf(this.id_sticker)].setAttribute('placeholder', 'Имя стикера не может быть пустым');
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
    
     if (this.id_record !== null && !this.isFocus) {
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
      this.recordField.forEach((e) => {
        e.classList.remove('hide');
      })
      this.recordFieldInput.forEach((e) => {
        e.classList.add('hide');
      })
      this.recordFieldInput.forEach((e) => {
        e.classList.remove('show');
      })
      this.id_record = null
    }

     this.id_record = event.target.parentNode.getAttribute('data-id_record') != null ? event.target.parentNode.getAttribute('data-id_record') : event.target.getAttribute('data-id_record')
    
     if ((event.target.tagName === 'P' || event.target.tagName === 'SPAN') || event.target.parentNode.classList.contains('record')) {
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

    if (event.key === 'Enter' && !event.shiftKey && this.isFocus) {
      this.id_record = event.target.parentNode.getAttribute('data-id_record') != null ? event.target.parentNode.getAttribute('data-id_record') : event.target.getAttribute('data-id_record')
      if (this.recordFieldInput[this.id_records.indexOf(this.id_record)].value.trim() === '') {
        this.recordFieldInput[this.id_records.indexOf(this.id_record)].value = '';
        this.recordFieldInput[this.id_records.indexOf(this.id_record)].setAttribute('placeholder', 'запись не может быть пустой');
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
        this.recordField[this.id_records.indexOf(this.id_record)].textContent = this.recordFieldInput[this.id_records.indexOf(this.id_record)].value.replace(/\n*$/gi, '')
        this.recordField[this.id_records.indexOf(this.id_record)].classList.remove('hide');
        this.recordFieldInput[this.id_records.indexOf(this.id_record)].classList.remove('show');
        this.recordFieldInput[this.id_records.indexOf(this.id_record)].classList.add('hide');
        ModelTP.changeRecord(this.id_record, this.recordFieldInput[this.id_records.indexOf(this.id_record)].value.replace(/\n*$/gi, ''));
      }
    }
  }

  onHistoryChangesHandler(event) {
    if (event.target.tagName === 'BUTTON' && event.target.classList.contains('history_btn')) {
      ModelTP.getHistoryChanges(getLocalStorageData('id_table'))
    } else {
      if (document.querySelector('.history_overlay') !== null)
      document.querySelector('.history_overlay').remove()
    }
  }

  onviewBgImageChangesHandler(event) {
    if (event.target.tagName === 'BUTTON' && event.target.classList.contains('change_bg_table') && document.querySelector('.bg_img_block') === null) {
      ViewTP.viewBgImageChanges()
    }
    // if (event.target.classList.contains('change_bg_table') && document.querySelector('.bg_img_block') !== null) {
    //   console.log(event.target)
    //   document.querySelector('.bg_img_block').remove()
    // }
  }

  onDeleteTable(event) {
    if (event.target.tagName === 'BUTTON' && event.target.classList.contains('delete_table')) {
      ModelTP.deleteTable(getLocalStorageData('id_table'));
      setLocalStorageData('id_table');
      setLocalStorageData('name_table');
      document.querySelector('header').innerHTML = '';
      document.querySelector('main').innerHTML = '';
      setTimeout(() => {
        ModelMP.init()
      }, 100)
    }
  }

  onBackToTables(event) {
    if (event.target.tagName === 'BUTTON' && event.target.classList.contains('get_tables')) {
      setLocalStorageData('id_table');
      setLocalStorageData('name_table');
      document.querySelector('header').innerHTML = '';
      document.querySelector('main').innerHTML = '';
      var body = document.querySelector('body')
      
      body.style.setProperty('--body-image', `linear-gradient(#218aba, #162657)`)
      ModelMP.init()
    }
  }

  onLogOutHandler(event) {
    if (event.target.classList.contains('logout') && event.target.tagName === 'P') {
      localStorage.clear();
      document.querySelector('header').innerHTML = '';
      document.querySelector('main').innerHTML = '';
      ModelSP.init()
    }
  }

  onViewColorHandler(event) {
    if (event.target.tagName === 'BUTTON' && event.target.classList.contains('btn_color')) {
      if (document.querySelector('.color') === null) {
        ViewTP.viewColorBlock()
      }
    }
  }


  onViewImageHandler(event) {
    if (event.target.tagName === 'BUTTON' && event.target.classList.contains('btn_img')) {
      if (document.querySelector('.image') === null) {
        numberPage = 1;
        ModelTP.getBgImage(numberPage)
      }
    }
  }

  onViewImageLoadMoreHandler(event) {
    if (event.target.tagName === 'BUTTON' && event.target.classList.contains('btn_load_img')) { 
      if (document.querySelector('.input_img').value === '') {
        document.querySelector('.input_img').value = 'morning'
        
      }
      ModelTP.getBgImage(++numberPage, document.querySelector('.input_img').value)
        
    }
  }

  onViewImageInputHandler(event) {
    this.image = ''
    if(event.key === 'Enter' && (document.querySelector('.image') !== null || document.querySelector('.bg_image_error') !== null)) {
      this.image = document.querySelector('.input_img').value
      numberPage = 1;
      this.bgImageList = document.querySelector('.bg_image_list');
      while(this.bgImageList.firstChild){
        this.bgImageList.removeChild(this.bgImageList.firstChild);
    }
    ModelTP.getBgImage(numberPage, this.image)      
  }
  }

  onChangeBgTable(event) {
  let composed = []
   if (event.target.classList.contains('image')) {
    ViewTP.highlight(event.target)
    composed = event.composedPath()

    document.querySelector('body').style.background = 'none'
    document.querySelector('body').style.backgroundImage = 
    `url("${composed[0].style.backgroundImage.slice(5, composed[0].style.backgroundImage.length - 9)}=&w=2400)"`
    document.querySelector('body').style.backgroundSize = `cover`
    document.querySelector('body').style.backgroundPosition = `50%`
    API.changeBgTable(getLocalStorageData('id_table'), 
    composed[0].style.backgroundImage.slice(5, composed[0].style.backgroundImage.length - 9))
   }
   if (event.target.classList.contains('color')) {
    ViewTP.highlight(event.target)
    composed = Event.composedPath()
    document.querySelector('body').style.background = composed[0].style.background
    API.changeBgTable(getLocalStorageData('id_table'), composed[0].style.background)
   }
  }
}