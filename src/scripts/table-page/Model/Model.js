import {
  APIClass
} from "../../../API/index"
import {
  ViewTablePage
} from "../View/index"

const ViewTP = new ViewTablePage()
const API = new APIClass()
export const ModelTablePage = class {

  getStickers( /*id_table*/ ) {
    this.number_sticker = 0
    API.getUserTableData(144).then(data => {
      data.forEach((e) => {
        ViewTP.viewStickers(e.id_sticker, e.name_sticker)
          this.getStickerValue(e.id_sticker, this.number_sticker++)
      })
    })
    ViewTP.viewTableData('cute table')
  }

  getStickerValue(id_sticker, i) {
    API.getStickerValue(id_sticker).then(data => {
      data.forEach((e) => {
        console.log(e)
        ViewTP.viewRecords(e.id_record, e.record, i, e.done);
      })
    })
  }

  changeTableName(id_table, new_name_table) {
    API.changeNameTable(id_table, new_name_table)
    .then(data => {
     if (data.message) {
      document.querySelector('.name_table_input').value = '';
     // document.querySelector('.name_table_input').setAttribute('placeholder', data.message);
     } else {
       console.log('good')
     }
    })
  }

  isDone(id_record) {
    API.isDone(id_record)
  }
}