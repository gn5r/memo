export default {
  data: () => ({
    // Confirm用オブジェクト
    confirmObj: {
      dialog: false,
      title: "",
      titleIcon: "",
      titleColor: "",
      message: "",
      buttons: [],
    },
  }),

  // 関数定義
  methods: {
    /**
     * 確認用ダイアログを表示する
     * @param {String} message ダイアログ内に表示するメッセージ
     * @param {function} callback "はい"を押した後のコールバック関数
     */
    confirm(message, callback = null) {
      // ダイアログを表示するためのパラメーター設定
      this.confirmObj.title = "確認";
      this.confirmObj.titleIcon = "fas fa-exclamation-circle";
      this.confirmObj.titleColor = "info";
      this.confirmObj.message = message;
      this.confirmObj.buttons = [
        {
          text: "はい",
          color: "info",
          function: () => {
            this.close();
            if (callback !== null && typeof callback === "function") callback();
          },
        },
        {
          text: "いいえ",
          color: "error",
          function: this.close,
        },
      ];

      // パラメーターの設定後、ダイアログを表示する
      this.open();
    },

    /**
     * 警告ダイアログを表示する
     * @param {String} message ダイアログ内に表示するメッセージ
     * @param {function} callback "はい"を押した後のコールバック関数
     */
    warning(message, callback = null) {
      // ダイアログを表示するためのパラメーター設定
      this.confirmObj.title = "警告";
      this.confirmObj.titleIcon = "fas fa-exclamation-triangle";
      this.confirmObj.titleColor = "warning";
      this.confirmObj.message = message;
      this.confirmObj.buttons = [
        {
          text: "はい",
          color: "success",
          function: () => {
            this.close();
            if (callback !== null && typeof callback === "function") callback();
          },
        },
        {
          text: "いいえ",
          color: "error",
          function: this.close,
        },
      ];

      // パラメーターの設定後、ダイアログを表示する
      this.open();
    },

    /**
     * エラーダイアログを表示する
     * @param {String} message ダイアログ内に表示するメッセージ
     */
    error(message) {
      // ダイアログを表示するためのパラメーター設定
      this.confirmObj.title = "警告";
      this.confirmObj.titleIcon = "";
      this.confirmObj.titleColor = "error";
      this.confirmObj.message = message;
      this.confirmObj.buttons = [
        {
          text: "はい",
          color: "",
          function: this.close,
        },
      ];
      this.open();
    },

    // ダイアログを表示する
    open() {
      this.confirmObj.dialog = true;
    },
    // ダイアログを閉じる
    close() {
      this.confirmObj.dialog = false;
    },
  },
};
