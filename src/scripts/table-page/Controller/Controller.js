import {
  ModelTablePage
} from "../Model/index";

const ModelTP = new ModelTablePage()

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
}