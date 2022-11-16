export const ViewTablePage = class {
  
  viewTableData(nameTable) {
    this.main = document.querySelector('main');
    
    this.blockColumn = document.createElement('div');
    this.blockColumn.classList.add('block_columns')

    this.header = document.querySelector('header');
    this.header.innerHTML = '';
    this.headerBlock = document.createElement('div');
    this.headerBlock.classList.add('header_tp');

    this.headerTable = document.createElement('div');
    this.headerTable.classList.add('name_table_header');

    this.nameTableTitle = document.createElement('p');
    this.nameTableTitle.classList.add('name_table', 'show');
    this.nameTableTitle.textContent = nameTable;

    this.nameTableTitleInput = document.createElement('input');
    this.nameTableTitleInput.classList.add('name_table_input', 'hide');
    this.nameTableTitleInput.setAttribute('maxLength', '50');
    this.nameTableTitleInput.value = this.nameTableTitle.textContent;

    this.btnChangeName = document.createElement('button');
    this.btnChangeName.classList.add('change_name_table');
    this.btnChangeName.textContent = 'Изменить имя доски';
    this.btnChangeBgImage = document.createElement('button');
    this.btnChangeBgImage.classList.add('change_bg_table');
    this.btnChangeBgImage.textContent = 'Изменить фон доски';
    this.btnDelete = document.createElement('button');
    this.btnDelete.classList.add('delete_table');
    this.btnDelete.textContent = 'Удалить доску'

    this.btnCreateColumn = document.createElement('button');
    this.btnCreateColumn .classList.add('create_column');
    this.btnCreateColumn.textContent = 'Создать стикер';
    this.btnGetTables = document.createElement('button');
    this.btnGetTables .classList.add('get_tables');
    this.btnGetTables.textContent = 'Показать доски';
    this.btnHistory = document.createElement('button');
    this.btnHistory.classList.add('history_btn');
    this.btnHistory.textContent = 'История доски';
    
    this.logout = document.createElement('p');
    this.logout.classList.add('logout');
    this.logout.textContent = 'Выйти';

    this.aboutChanges = document.createElement('p');
    this.aboutChanges.classList.add('about_changes');
    this.aboutChanges.textContent = `Для сохранения изменений использовать клавишу Enter. В записях для перехода на новую строку использовать сочетание клавиш Shift+Enter`;

    this.headerTable.append(this.nameTableTitle, this.nameTableTitleInput, this.btnChangeName, this.btnChangeBgImage, this.btnDelete);
    this.headerBlock.append(this.headerTable, this.btnGetTables, this.btnCreateColumn, this.btnHistory, this.logout);
    this.header.append(this.headerBlock);
    this.main.append(this.blockColumn, this.aboutChanges)
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
    this.imgBtnMenu.src = './image/more.png'

    this.popMenu = document.createElement('div');
    this.popMenu.classList.add('pop_menu_column');
    this.popMenu.setAttribute('id', id_sticker);

    this.headerPopMenu = document.createElement('div');
    this.headerPopMenu.classList.add('header_pop_menu');
    this.headerPopMenuTitle = document.createElement('p');
    this.headerPopMenuTitle.classList.add('header_pop_menu_title');
    this.headerPopMenuTitle.textContent = 'Действия со стикером';

    this.hr = document.createElement('hr');

    this.listPopMenu = document.createElement('ul');
    this.listPopMenu.classList.add('list_pop_menu');

    this.liArray = ['Сортировать по алфавиту', 
    'Сортировать по дате создания (новые)', 'Сортировать по дате создания (старые)', 'Удалить стикер'];
    this.liArrayClass = ['sort_alphabet', 
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
    this.btnAddRec.textContent = '+ добавить запись';

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
  
  viewCreateStickers() {
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
    this.headerPopMenuTitle.textContent = 'Действия со стикером';

    this.hr = document.createElement('hr');

    this.listPopMenu = document.createElement('ul');
    this.listPopMenu.classList.add('list_pop_menu');
   
    this.liArray = ['Сортировать по алфавиту', 
    'Сортировать по дате создания (новые)', 'Сортировать по дате создания (старые)', 'Удалить стикер'];

    this.liArrayClass = ['sort_alphabet', 
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
    this.btnAddRec.textContent = '+ добавить запись';
 
    this.headerPopMenu.append(this.headerPopMenuTitle)
    this.popMenu.append(this.headerPopMenu, this.hr, this.listPopMenu)
    this.btnMenuColumn.append(this.imgBtnMenu)
    this.titleColumn.append(this.titleSpan, this.titleColumnInput, this.btnMenuColumn)
    this.column.append(this.titleColumn, this.popMenu, this.columnList, this.btnAddRec)
    this.main.append(this.column);
    this.titleColumnInput.focus()
  }

  viewCreateRecord(i) {
    this.addRec = document.createElement('textarea');
    this.addRec.classList.add('input_create');
    this.column = document.querySelectorAll('.column_list');
    this.column[i].append(this.addRec);
    this.addRec.focus()
  }

  viewHistoryChanges() {
    this.main = document.querySelector('main');
    this.overlay = document.createElement('div');
    this.overlay.classList.add('history_overlay');

    this.historyBlock = document.createElement('div');
    this.historyBlock.classList.add('history_block');
    this.titleHistoryBlock = document.createElement('h3');
    this.titleHistoryBlock.classList.add('h3_history');
    this.titleHistoryBlock.textContent = 'История доски';

    this.historyList = document.createElement('div');
    this.historyList.classList.add('history_list');
    
    this.historyBlock.append(this.titleHistoryBlock, this.historyList);
    this.overlay.appendChild(this.historyBlock);
    this.main.appendChild(this.overlay);
  }

  viewBgImageChanges() {
    this.main = document.querySelector('main');
    this.overlay = document.createElement('div');
    this.overlay.classList.add('bg_img_block');

    this.titleBgImageBlock = document.createElement('h3');
    this.titleBgImageBlock.classList.add('h3_bg_img');
    this.titleBgImageBlock.textContent = 'Выберите фон';

    this.bgImageBtn = document.createElement('button');
    this.bgImageBtn.classList.add('btn_img')
    this.bgImageBtn.textContent = 'Изображение'

    this.bgColorBtn = document.createElement('button');
    this.bgColorBtn.classList.add('btn_color')
    this.bgColorBtn.textContent = 'Цвет'

    this.br = document.createElement('br');

    this.bgColorInput = document.createElement('input');
    this.bgColorInput.classList.add('input_img')
    this.bgColorInput.placeholder = 'Изображения'
    this.bgColorInput.style.display = 'none'

    this.bgImageList = document.createElement('div');
    this.bgImageList.classList.add('bg_image_list');

    this.bgImageError = document.createElement('p');
    this.bgImageError.classList.add('bg_image_error');


    this.btnLoadMore = document.createElement('button');
    this.btnLoadMore.textContent = 'Загрузить еще'
    this.btnLoadMore.classList.add('btn_load_img')
    this.btnLoadMore.style.display = 'none'
    this.bgImageList.appendChild(this.btnLoadMore)

    this.overlay.append(this.titleBgImageBlock, this.bgImageBtn, this.bgColorBtn, this.br, this.bgColorInput, this.bgImageError, this.bgImageList, this.btnLoadMore);
    this.main.appendChild(this.overlay);
  }

  viewColorBlock() {
    this.bgImageList = document.querySelector('.bg_image_list');
    document.querySelector('.input_img').value = '';
    document.querySelector('.input_img').style.display = 'none'
    document.querySelector('.btn_load_img').style.display = 'none'
    while(this.bgImageList.firstChild){
      this.bgImageList.removeChild(this.bgImageList.firstChild);
  }
    this.colorArray = ['gray', 'red', 'orange', 'yellow', 'green', 'lightblue', 'blue', 'purple']
    for (let i = 0; i < this.colorArray.length; i++) {
      this.bgColorBlock = document.createElement('div');
      this.bgColorBlock.classList.add('color', `color_${this.colorArray[i]}`);
      this.bgColorBlock.style.background = this.colorArray[i]
      this.bgImageList.appendChild(this.bgColorBlock);
    }
  }

  viewImageBlock(id, image) {
    this.bgImageList = document.querySelector('.bg_image_list');
    if (document.querySelector('.color') !== null) {
      while(this.bgImageList.firstChild){
        this.bgImageList.removeChild(this.bgImageList.firstChild);
    }
    }
    document.querySelector('.input_img').style.display = 'inline'
    
      this.bgImgBlock = document.createElement('div');
      this.bgImgBlock.classList.add('image', `image_${id}`);
      this.bgImgBlock.style.backgroundImage = `url(${image}=&w=200)`
      this.bgImageList.appendChild(this.bgImgBlock);
  }

  highlight(target) {
    this.selected;
    if (this.selected) { // убрать существующую подсветку, если есть
      this.selected.style.outline = 'none'
    }
    this.selected = target;
    this.selected.style.outline = 'dashed'; // подсветить новый td
  }

  viewCreateHistoryChanges(changes, old_value, table, sticker, id_sticker, record, date, time) {
    this.historyList = document.querySelector('.history_list')
      this.recordHistory = document.createElement('p');
      this.recordHistory.classList.add('record_history');

      switch(changes) {
        case 'создали доску':
        case 'создали стикер':
        case 'удалили стикер':
          this.recordHistory.insertAdjacentHTML('afterbegin',
        `Вы <span class="change">${changes}</span> ${old_value}
        <br>
        <small><span class="date_history">${date.slice(0, 10).split('-').reverse().join('-')}</span> в
        <span class="time_history">${time.slice(0, 8)}</span></small>`);
        break;
        case 'переименовали доску':
          this.recordHistory.insertAdjacentHTML('afterbegin',
          `Вы <span class="change">${changes}</span> ${old_value} <span class="change">на</span> ${table}
          <br>
          <small><span class="date_history">${date.slice(0, 10).split('-').reverse().join('-')}</span> в
          <span class="time_history">${time.slice(0, 8)}</span></small>`);
          break;
        case 'переименовали стикер':
          this.recordHistory.insertAdjacentHTML('afterbegin',
          `Вы <span class="change">${changes}</span> ${old_value} <span class="change">на</span> ${sticker}
          <br>
          <small><span class="date_history">${date.slice(0, 10).split('-').reverse().join('-')}</span> в
          <span class="time_history">${time.slice(0, 8)}</span></small>`);
          break;
        case 'новую запись':
          this.recordHistory.insertAdjacentHTML('afterbegin',
        `Вы добавили <span class="change">${changes}</span> ${old_value}
        <span class="sticker_value">в стикере <strong>${id_sticker}</strong></span>
        <br>
        <small><span class="date_history">${date.slice(0, 10).split('-').reverse().join('-')}</span> в
        <span class="time_history">${time.slice(0, 8)}</span></small>`)
        break;
        case 'изменили запись':
          this.recordHistory.insertAdjacentHTML('afterbegin',
        `Вы <span class="change">${changes}</span> ${old_value} <span class="change">на</span> ${record}
        <span class="sticker_value">в стикере <strong>${id_sticker}</strong></span>
        <br>
        <small><span class="date_history">${date.slice(0, 10).split('-').reverse().join('-')}</span> в
        <span class="time_history">${time.slice(0, 8)}</span></small>`)
        break;
        default:
          break;
      }
      
      this.historyList.append(this.recordHistory);
  }
}