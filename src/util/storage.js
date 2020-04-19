// データ保存用オブジェクトをSymbol宣言
const items = Symbol();

// データオブジェクトの名前
const name = Symbol();

/**
 * localStorageアクセス用クラス
 *
 * このクラスを使ってlocalStorageのCRUDを行う
 * @export Storage
 * @class Storage
 */
export class Storage {
  /**
   * localStorageからデータを取得する
   *
   * データがない場合は新規作成
   * @param {*} name データ名称(データオブジェクト名)
   * @memberof Storage
   */
  constructor(dataName) {
    this[name] = dataName;
    this[items] = JSON.parse(localStorage.getItem(dataName)) || [];
  }

  /**
   * データを追加する
   * @param {*} item
   */
  add(item) {
    item.no = this[items].length + 1;
    this[items].push(item);
    localStorage.setItem(this[name], JSON.stringify(this[items]));
  }

  /**
   * アイテムのNoを指定して削除する
   * @param {Number} no
   */
  del(no) {
    const idx = this[items].findIndex(item => item.no == no);
    if (idx !== -1) this[items].splice(idx, 1);
    localStorage.setItem(this[name], JSON.stringify(this[items]));

    return this[items];
  }
  /**
   * localStorageに保存されているすべてのデータを削除する
   */
  deleteAll() {
    this[items] = [];
    localStorage.removeItem(this[name]);

    return this[items];
  }

  /**
   * 保存されているデータを取得する
   *
   * @readonly
   * @memberof Storage
   * @returns {Array} items
   */
  get getItems() {
    return this[items];
  }
}
