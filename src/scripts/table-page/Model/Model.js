import {
  APIClass
} from "../../../API/index"
import {
  ViewTablePage
} from "../View/index"

const ViewTP = new ViewTablePage()
const API = new APIClass()
export const ModelTablePage = class {

  getStickers(id_table, nameTable) {
    this.number_sticker = 0
    API.getUserTableData(id_table).then(data => {
      data.forEach((e) => {
        ViewTP.viewStickers(e.id_sticker, e.name_sticker)
          this.getStickerValue(e.id_sticker, this.number_sticker++)
      })
    })
    ViewTP.viewTableData(nameTable)
  }

  getStickerValue(id_sticker, i) {
    API.getStickerValue(id_sticker).then(data => {
      data.forEach((e) => {
          ViewTP.viewRecords(e.id_record, e.record, i, e.done);
      })
    })
  }

  changeTableName(id_table, new_name_table) {
    API.changeNameTable(id_table, new_name_table).then(data => {
      if (data.message) {
        this.nameTable = document.querySelector('.name_table_input')
        this.nameTable.value = '';
        this.nameTable.setAttribute('placeholder', data.message);
     }
    })
  }

  isDone(id_record) {
    API.isDone(id_record)
  }

  createSticker(id_table, name_sticker) {
    API.createSticker(id_table, name_sticker);
  }

  createRecord(id_sticker, record) {
    API.createRecord(id_sticker, record);
  }

  filterByAlphabet(id_sticker, i) {
    API.getFilterRecordAlphabet(id_sticker).then(data => {
      data.forEach((e) => {
        ViewTP.viewRecords(e.id_record, e.record, i, e.done);
    })
    })
  }

  filterByNew(id_sticker, i) {
    API.getFilterRecordNew(id_sticker).then(data => {
      data.forEach((e) => {
        ViewTP.viewRecords(e.id_record, e.record, i, e.done);
    })
    })
  }

  filterByOld(id_sticker, i) {
    API.getFilterRecordOld(id_sticker).then(data => {
      data.forEach((e) => {
        ViewTP.viewRecords(e.id_record, e.record, i, e.done);
    })
    })
  }

  deleteSticker(id_sticker) {
    API.deleteSticker(id_sticker);
  }

  changeNameSticker(id_sticker, new_name_sticker) {
    API.changeNameSticker(id_sticker, new_name_sticker);
  }

  changeRecord(id_record, new_record) {
    API.changeRecord(id_record, new_record);
  }

  getHistoryChanges(id_table) {
   this.name_sticker;
   API.getUserTableData(id_table).then(data => {
    this.name_sticker = data;
})
    API.getHistoryChanges(id_table).then(data => {
      ViewTP.viewHistoryChanges()
      data.forEach((e) => {
        this.name_st = this.name_sticker.find(el => el.id_sticker === e.id_sticker);
        if (this.name_st === undefined) {
          ViewTP.viewCreateHistoryChanges(e.changes, 
            e.old_value, e.new_tbl, e.new_stc, '', e.new_rec, e.date_change, e.time_change)
        } else {
          ViewTP.viewCreateHistoryChanges(e.changes, 
            e.old_value, e.new_tbl, e.new_stc, this.name_st.name_sticker, e.new_rec, e.date_change, e.time_change)
        }
      })
    })  
  }

  deleteTable(id_table) {
    API.deleteTable(id_table);
  }
}