if (!window.indexedDB) {
  window.alert("Your browser doesn't support a stable version of IndexedDB.");
}

export default class IndexDB {
  constructor(_dbName) {
    this.dbName = _dbName;
    this.dbVersionNumber = 1;
  }

  setDBVersionNumber(_dbVersionNumber) {
    this.dbVersionNumber = _dbVersionNumber;
  }

  open(onsuccess, onerror, onupgradeneeded, objName, keyPath, objData) {
    this.objName = objName;
    this.request = window.indexedDB.open(this.dbName, this.dbVersionNumber);

    this.request.onerror = (event) => onerror();
    this.request.onsuccess = (event) => {
      this.db = this.request.result;
      onsuccess();
    };

    this.request.onupgradeneeded = (event) => {
      this.db = event.target.result;
      let objectStore = this.db.createObjectStore(objName, {
        keyPath: keyPath
      });
      if (objData !== undefined) {
        for (let key in objData) {
          console.log("objData", objData[key]);
          objectStore.add(objData[key]);
        }
      }
      onupgradeneeded();
    };
  }

  readAll(callback) {
    console.log("readAll", this.db);
    let objectStore = this.db
      .transaction(this.objName)
      .objectStore(this.objName);
    objectStore.db.openCursor().onsuccess = function (event) {
      let cursor = event.target.result;
      if (cursor) {
        callback(cursor);
        cursor.continue();
      } else {
        console.log("No more entries!");
      }
    };
  }

  read(id) {
    let transaction = this.db.transaction([this.objName]);
    let objectStore = transaction.objectStore(this.objName);
    let keySearch = "" + id;

    return new Promise((resolve, reject) => {
      let request = objectStore.get(id);
      request.onerror = (event) => reject(event);
      request.onsuccess = (event) => resolve(request.result);
    });
  }

  add(objData) {
    let transaction = this.db.transaction([this.objName], "readwrite");
    let objectStore = transaction.objectStore(this.objName);

    return new Promise((resolve, reject) => {
      let request = objectStore.add(objData);
      request.onsuccess = (event) => resolve(event);
      request.onerror = (event) => reject(event);
    });
  }

  put(objData) {
    let transaction = this.db.transaction([this.objName], "readwrite");
    let objectStore = transaction.objectStore(this.objName);

    return new Promise((resolve, reject) => {
      let request = objectStore.put(objData);
      request.onsuccess = (event) => resolve(event);
      request.onerror = (event) => reject(event);
    });
  }

  remove(id) {
    let transaction = this.db.transaction([this.objName], "readwrite");
    let objectStore = transaction.objectStore(this.objName);
    let keySearch = "" + id;

    return new Promise((resolve, reject) => {
      let request = objectStore.delete(id);
      request.onerror = (event) => reject(event);
      request.onsuccess = (event) => resolve(event);
    });
  }
}
