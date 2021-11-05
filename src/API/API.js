import regeneratorRuntime from 'regenerator-runtime';

export const APIClass = class {
  constructor() {
    this.path = 'http://127.0.0.8:8080'
  }

  async createNewUser(login, password, date_birth, sex) {
    this.bodyData = {
      login,
      password,
      date_birth,
      sex
    }

    this.url = `${this.path}/register`;
    this.res = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.bodyData)
    });
    this.data = await this.res.json();
    return this.data
  }

  async loginUser(login, password) {
    this.bodyData = {
      login,
      password
    }

    this.url = `${this.path}/login`;
    this.res = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.bodyData)
    });
    this.data = await this.res.json();
    return this.data
  }

  async getUserTables(id_user) {
    this.url = `${this.path}/main/tables/${id_user}`;
    this.res = await fetch(this.url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    this.data = await this.res.json();
    // console.log(this.data)
    return this.data;
  }

  async getNumericData(id_user) {
    this.url = `${this.path}/main/numeric/${id_user}`;
    this.res = await fetch(this.url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    this.data = await this.res.json();
    return this.data;
  }

  async createNewTable(id_user, nameTable) {
    this.bodyData = {
      id_user,
      nameTable,
    }

    this.url = `${this.path}/main`;
    this.res = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.bodyData)
    });
    this.data = this.res.json();
    return this.data;
  }

  async getFilterTable(nameTable, dateFrom, dateTo, id_user) {
    let params = {
        nameTable,
        dateFrom,
        dateTo
      };

      this.query = Object.keys(params)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
        .join('&');

      this.url = `http://127.0.0.8:8080/main/filter/${id_user}?${this.query}`;
      this.res = await fetch(this.url);
      this.data = await this.res.json();
      return this.data;
  }

  async getAboutUser(id_user) {
    this.url = `${this.path}/user/${id_user}`;
    this.res = await fetch(this.url);
    this.data = await this.res.json();
    return this.data
  }

  async changeProfile(id_user, password, date_birth, sex) {
    this.bodyData = {
      id_user,
      password,
      date_birth,
      sex
    }

    this.url = `${this.path}/profile`;
    this.res = await fetch(this.url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.bodyData)
    });
    this.data = await this.res.json();
  //  return this.data
  }
}