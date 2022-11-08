export const ViewAdminPage = class {
  // constructor() {
  //   this.isError = true;
  //   this.isErrorLogin = true;
  // }

  ViewCreateTable() {
    this.main = document.querySelector('.main_mp');
    this.adminTable = document.createElement('table');
    this.main.appendChild(this.adminTable);
    this.headerTable = ['id', 'login', 'sex', 'birth', 'registr', 'count', 'msg'];
    this.thead = this.adminTable.createTHead();
    for(let i = 0; i < this.headerTable.length; i++) {
      this.th = document.createElement('th');
      this.th.textContent = this.headerTable[i];
      this.thead.appendChild(this.th);
    }
  }

  viewAdminPage(id, login, sex, birth, registr, count_tbls, msg) {
    this.table = document.querySelector('table');
    let htmlAdminTable = `
    <tr>
      <td>${id}</td>
      <td>${login}</td>
      <td>${sex}</td>
      <td>${birth}</td>
      <td>${registr}</td>
      <td>${count_tbls}</td>
      <td>${msg}</td>
    </tr>`
   this.table.insertAdjacentHTML('beforeend', htmlAdminTable)
  }
}