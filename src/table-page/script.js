console.log(12)

document.querySelector('.create_column').addEventListener('click', () => {
  let divColumn = document.createElement('div')
  divColumn.className = 'column'
  let pTitle = document.createElement('p')
  pTitle.className = 'title_column'
  let spanName = document.createElement('span')
  spanName.className = 'name_column'
  spanName.setAttribute("contenteditable", "true")
  let btnMenu = document.createElement('button')
  btnMenu.className = 'menu_column'
  let imgBtn = document.createElement('img')
  imgBtn.src = '../image/more.png'
  let divColumnList = document.createElement('div')
  divColumnList.className = 'column_list'
  let btnAddRec = document.createElement('button')
  btnAddRec.className = 'add_record'
  btnAddRec.textContent = '+ Add record'

  btnMenu.append(imgBtn)
  pTitle.append(spanName, btnMenu)
  divColumn.append(pTitle, divColumnList, btnAddRec)
  document.querySelector('.block_columns').prepend(divColumn)
  spanName.focus()

})


document.querySelector('.add_record').addEventListener('click', () => {
  let newRec = document.createElement('p')
  document.querySelector('.column_list').append(newRec)
  newRec.setAttribute("contenteditable", "true");
  newRec.focus()
})