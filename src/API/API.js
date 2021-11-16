import regeneratorRuntime from 'regenerator-runtime';
import { setLocalStorageData, getLocalStorageData } from '../LocalStorage/index';

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
    })
    this.data = await this.res.json();
    return this.data
  }

  async getUserTables(id_user) {
    this.url = `${this.path}/main/tables/${id_user}`;
    this.res = await fetch(this.url, {
      method: 'GET',
      headers: {
        'Authorization': "Bearer " + getLocalStorageData('token'),
        'Content-Type': 'application/json',
      }
    });
    this.data = await this.res.json();
    return this.data;
  }

  async getNumericData(id_user) {
    this.url = `${this.path}/main/numeric/${id_user}`;
    this.res = await fetch(this.url, {
      method: 'GET',
      headers: {
        "Authorization": "Bearer " + getLocalStorageData('token'),
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
    try {
    this.url = `${this.path}/user/${id_user}`;
    this.res = await fetch(this.url, {
      headers: {
        Authorization: "Bearer " + getLocalStorageData('token'),
      }
    });
    this.data = await this.res.json();
    return this.data
    } catch (error) {
      console.log(error)
    }
    
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

  async getUserTableData(id_table) {
    this.url = `${this.path}/table/${id_table}`;
    this.res = await fetch(this.url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    this.data = await this.res.json();
    return this.data;
  }

  async getStickerValue(id_sticker) {
    this.url = `${this.path}/table/sticker/${id_sticker}`;
    this.res = await fetch(this.url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    this.data = await this.res.json();
    return this.data;
  }

  async changeNameTable(id_table, new_name_table) {
    this.bodyData = {
      id_table,
      new_name_table,
    }
    this.url = `${this.path}/table/${id_table}`;
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

  async isDone(id_record) {
    this.bodyData = {
      id_record,
    }
    this.url = `${this.path}/table/record/done`;
    this.res = await fetch(this.url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.bodyData)
    });
    this.data = await this.res.json();
    return this.data
  }

  async createSticker(id_table, name_sticker) {
    this.bodyData = {
      id_table,
      name_sticker
    }

    this.url = `${this.path}/table/sticker`;
    this.res = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.bodyData)
    });
   // this.data = this.res.json();
   //return this.data;
  }

  async createRecord(id_sticker, record) {
    this.bodyData = {
      id_sticker,
      record
    }
    this.url = `${this.path}/table/record`;
    this.res = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.bodyData)
    });
   // this.data = this.res.json();
   //return this.data;
  }

  async getFilterRecordAlphabet(id_sticker) {
    this.url = `${this.path}/table/sort/alphabet/${id_sticker}`;
    this.res = await fetch(this.url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    this.data = await this.res.json();
    return this.data;
  }

  
  async getFilterRecordOld(id_sticker) {
    this.url = `${this.path}/table/sort/old/${id_sticker}`;
    this.res = await fetch(this.url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    this.data = await this.res.json();
    return this.data;
  }

  
  async getFilterRecordNew(id_sticker) {
    this.url = `${this.path}/table/sort/new/${id_sticker}`;
    this.res = await fetch(this.url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    this.data = await this.res.json();
    return this.data;
  }

  async deleteSticker(id_sticker) {
    this.url = `${this.path}/table/sticker/${id_sticker}`;
    this.res = await fetch(this.url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }

  async changeNameSticker(id_sticker, new_name_sticker) {
    this.bodyData = {
      id_sticker, 
      new_name_sticker
    }
    this.url = `${this.path}/table/change/sticker`;
    this.res = await fetch(this.url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.bodyData)
    });
  //  this.data = await this.res.json();
  //  return this.data
  }

  async changeRecord(id_record, new_record) {
    this.bodyData = {
      id_record, 
      new_record
    }

    this.url = `${this.path}/table/change/record`;
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

  async getHistoryChanges(id_table) {
    this.url = `${this.path}/table/history/${id_table}`;
    this.res = await fetch(this.url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    this.data = await this.res.json();
    return this.data;
  }

  async deleteTable(id_table) {
    this.url = `${this.path}/table/${id_table}`;
    this.res = await fetch(this.url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }
}