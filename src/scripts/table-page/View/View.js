//import '../../../styles/table-page/style.css'

export const ViewTablePage = class {
  
  viewTableData(nameTable) {
    this.main = document.querySelector('main');
    
    this.blockColumn = document.createElement('div');
    this.blockColumn.classList.add('block_columns')

    this.header = document.querySelector('header');
    this.header.innerHTML = '';
    this.headerBlock = document.createElement('div');
    this.headerBlock.classList.add('profile');

    this.headerTable = document.createElement('div');
    this.headerTable.classList.add('name_table_header');

    this.nameTableTitle = document.createElement('p');
    this.nameTableTitle.classList.add('name_table', 'show');
    this.nameTableTitle.textContent = nameTable;

    this.nameTableTitleInput = document.createElement('input');
    this.nameTableTitleInput.classList.add('name_table_input', 'hide');
    this.nameTableTitleInput.value = this.nameTableTitle.textContent;

    this.btnChangeName = document.createElement('button');
    this.btnChangeName.classList.add('change_name_table');
    this.btnChangeName.textContent = 'Change name table';
    this.btnDelete = document.createElement('button');
    this.btnDelete.classList.add('delete_table');
    this.btnDelete.textContent = 'Delete table'

    this.btnCreateColumn = document.createElement('button');
    this.btnCreateColumn .classList.add('create_column');
    this.btnCreateColumn.textContent = 'Create column';
    this.btnHistory = document.createElement('button');
    this.btnHistory.classList.add('history_btn');
    this.btnHistory.textContent = 'History changes';
    
    this.logout = document.createElement('p');
    this.logout.classList.add('logout');
    this.logout.textContent = 'Logout'

    this.headerTable.append(this.nameTableTitle, this.nameTableTitleInput, this.btnChangeName, this.btnDelete);
    this.headerBlock.append(this.headerTable, this.btnCreateColumn, this.btnHistory, this.logout);
    this.header.append(this.headerBlock);
    this.main.append(this.blockColumn)
  }

  viewStickers(id_sticker, nameSticker) {
    
    this.main = document.querySelector('.block_columns');
    
    this.column = document.createElement('div');
    this.column.classList.add('column');
    this.column.setAttribute('data-id_sticker', id_sticker);

    this.titleColumn = document.createElement('p');
    this.titleColumn.classList.add('title_column');
    this.titleSpan = document.createElement('span');
    this.titleSpan.classList.add('title_column_span');
    this.titleSpan.textContent = nameSticker;
    this.titleColumnInput = document.createElement('input');
    this.titleColumnInput.classList.add('title_column_input', 'hide');

    this.btnMenuColumn = document.createElement('button');
    this.btnMenuColumn.classList.add('menu_column');
    this.imgBtnMenu = document.createElement('img');
    this.imgBtnMenu.src = '../../../image/more.png'

    this.popMenu = document.createElement('div');
    this.popMenu.classList.add('pop_menu_column');
    this.popMenu.setAttribute('id', id_sticker);

    this.headerPopMenu = document.createElement('div');
    this.headerPopMenu.classList.add('header_pop_menu');
    this.headerPopMenuTitle = document.createElement('p');
    this.headerPopMenuTitle.classList.add('header_pop_menu_title');
    this.headerPopMenuTitle.textContent = 'Action with column';

    this.hr = document.createElement('hr');

    this.listPopMenu = document.createElement('ul');
    this.listPopMenu.classList.add('list_pop_menu');

    this.liArray = ['Add record', 'Change sticker name', 'Sort by alphabet', 
    'Sort by date create record (new)', 'Sort by date create record (old)', 'Delete column'];
    this.liArrayClass = ['add_record_menu', 'change_sticker_name', 'sort_alphabet', 
    'sort_new', 'sort_old', 'delete_sticker'];

    for (let i = 0; i < this.liArray.length; i++) {
      this.li = document.createElement('li');
      this.li.classList.add(this.liArrayClass[i])
      this.li.textContent = this.liArray[i];
      this.listPopMenu.appendChild(this.li);
    }

    this.columnList = document.createElement('div');
    this.columnList.classList.add('column_list');

    this.btnAddRec = document.createElement('button');
    this.btnAddRec.classList.add('add_record');
    this.btnAddRec.textContent = '+ Add record';

    this.headerPopMenu.append(this.headerPopMenuTitle)
    this.popMenu.append(this.headerPopMenu, this.hr, this.listPopMenu)
    this.btnMenuColumn.append(this.imgBtnMenu)
    this.titleColumn.append(this.titleSpan, this.titleColumnInput, this.btnMenuColumn)
    this.column.append(this.titleColumn, this.popMenu, this.columnList, this.btnAddRec)
    this.main.append(this.column);
  }

  viewRecords(id_record, recordText, i, done) {
    this.recordBlock = document.querySelectorAll('.column_list');

    this.record = document.createElement('p');
    this.record.classList.add('record_block');
    this.recordText = document.createElement('span');
    this.recordTextInput = document.createElement('textarea');
    this.recordTextInput.classList.add('input_record', 'hide');
    this.recordLabel = document.createElement('label');
    this.recordText.classList.add('record')
    this.recordInput = document.createElement('input');
    this.isDone = document.createElement('input');
    this.isDone.setAttribute('type', 'checkbox');
    if (done) {
      this.isDone.setAttribute('checked', done);
    }
    this.isDone.setAttribute('name', 'done');
    this.record.classList.add('show')
    this.recordInput.classList.add('hide');
    this.record.setAttribute('data-id_record', id_record);
    this.recordText.textContent = recordText;
    this.record.append(this.isDone, this.recordLabel, this.recordTextInput, this.recordText);
    
    this.recordBlock[i].appendChild(this.record)
  }
  
  viewCreateStickers(/*id_sticker, nameSticker*/) {
    this.main = document.querySelector('.block_columns');

    this.column = document.createElement('div');
    this.column.classList.add('column');

    this.titleColumn = document.createElement('p');
    this.titleColumn.classList.add('title_column');
    this.titleSpan = document.createElement('span');
    this.titleSpan.classList.add('title_column_span');
    this.titleColumnInput = document.createElement('input');
    this.titleColumnInput.classList.add('title_column_input', 'new_sticker');

    this.btnMenuColumn = document.createElement('button');
    this.btnMenuColumn.classList.add('menu_column');
    this.imgBtnMenu = document.createElement('img');
    this.imgBtnMenu.src = '../../../image/more.png'

    this.popMenu = document.createElement('div');
    this.popMenu.classList.add('pop_menu_column');

    this.headerPopMenu = document.createElement('div');
    this.headerPopMenu.classList.add('header_pop_menu');
    this.headerPopMenuTitle = document.createElement('p');
    this.headerPopMenuTitle.classList.add('header_pop_menu_title');
    this.headerPopMenuTitle.textContent = 'Action with column';

    this.hr = document.createElement('hr');

    this.listPopMenu = document.createElement('ul');
    this.listPopMenu.classList.add('list_pop_menu');
    this.liArray = ['Add record', 'Change sticker name', 'Sort by alphabet', 
    'Sort by date create record (new)', 'Sort by date create record (old)', 'Delete column'];
    this.liArrayClass = ['add_record_menu', 'change_sticker_name', 'sort_alphabet', 
    'sort_new', 'sort_old', 'delete_sticker'];

    for (let i = 0; i < this.liArray.length; i++) {
      this.li = document.createElement('li');
      this.li.classList.add(this.liArrayClass[i])
      this.li.textContent = this.liArray[i];
      this.listPopMenu.appendChild(this.li);
    }

    this.columnList = document.createElement('div');
    this.columnList.classList.add('column_list');

    this.btnAddRec = document.createElement('button');
    this.btnAddRec.classList.add('add_record');
    this.btnAddRec.textContent = '+ Add record';
 
    this.headerPopMenu.append(this.headerPopMenuTitle)
    this.popMenu.append(this.headerPopMenu, this.hr, this.listPopMenu)
    this.btnMenuColumn.append(this.imgBtnMenu)
    this.titleColumn.append(this.titleSpan, this.titleColumnInput, this.btnMenuColumn)
    this.column.append(this.titleColumn, this.popMenu, this.columnList, this.btnAddRec)
    this.main.prepend(this.column);
    this.titleColumnInput.focus()
  }

  viewCreateRecord(i) {
    this.addRec = document.createElement('textarea');
    this.addRec.classList.add('input_create');
    this.column = document.querySelectorAll('.column_list');
    this.column[i].append(this.addRec);
    this.addRec.focus()
  }

}