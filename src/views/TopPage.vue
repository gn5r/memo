<template>
  <v-container fluid>
    <v-card>
      <v-card-text>
        <v-data-table
          v-model="selected"
          :headers="headers"
          :items="items"
          :expanded.sync="expanded"
          item-key="no"
          show-expand
          hide-default-footer
        >
          <!-- テーブルヘッダーに各種ボタンを配置する -->
          <template v-slot:top>
            <v-toolbar flat>
              <v-spacer />
              <!-- 追加ボタン -->
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on" icon @click="addData">
                    <v-icon color="success" large>fas fa-plus-circle</v-icon>
                  </v-btn>
                </template>
                <!-- ツールチップに表示されるテキスト -->
                <span>データを追加</span>
              </v-tooltip>

              <!-- 全削除ボタン -->
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on" icon @click="delAllData">
                    <v-icon color="error" large>fas fa-trash-alt</v-icon>
                  </v-btn>
                </template>
                <!-- ツールチップに表示されるテキスト -->
                <span>データを追加</span>
              </v-tooltip>
            </v-toolbar>
          </template>

          <!-- アイテムごとの編集と削除 -->
          <template v-slot:item.actions="{ item }">
            <v-icon @click="editData(item)">mdi-pencil</v-icon>
            <v-icon @click="delData(item.no)">mdi-delete</v-icon>
          </template>

          <!-- 行を展開型にする。展開すると行毎の内訳を表示する -->
          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">
              <div v-for="content in item.contents" :key="content.no" class="body-1">
                {{ content.text }} :
                {{ content.cost }}
              </div>
            </td>
          </template>

          <template v-slot:no-data>
            <v-alert type="error" class="body-1 font-weight-bold">データが存在しません</v-alert>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>

    <!-- 共通ダイアログ -->
    <confirm
      v-if="confirmObj.dialog"
      :dialog.sync="confirmObj.dialog"
      :title="confirmObj.title"
      :titleIcon="confirmObj.titleIcon"
      :titleColor="confirmObj.titleColor"
      :message="confirmObj.message"
      :buttons="confirmObj.buttons"
    />

    <payment-dialog
      v-if="dialog"
      :dialog.sync="dialog"
      :mode="mode"
      :editItem="memoData"
      enableClose
      @add="addItem"
    />
  </v-container>
</template>

<script>
import { Storage } from "../util/storage";
import Confirm from "@/components/common/Confirm";
import confirmScript from "../util/confirm";
import PaymentDialog from "@/components/dialog/PaymentDialog";

export default {
  mixins: [confirmScript],
  name: "TopPage",
  data: () => ({
    // テーブルヘッダーを定義
    headers: [
      {
        text: "No",
        align: "center",
        sortable: true,
        value: "no"
      },
      {
        text: "タイトル",
        align: "center",
        sortable: false,
        value: "title"
      },
      {
        text: "合計額",
        align: "center",
        sortable: false,
        value: "total"
      },
      {
        text: "操作",
        sortable: false,
        value: "actions"
      },
      {
        text: "",
        value: "data-table-expand"
      }
    ],
    // テーブルアイテムを定義
    items: [],
    // テーブルアイテム展開用
    expanded: [],
    // 選択されたテーブルアイテムを保存する
    selected: [],

    // storageクラスインスタンス
    storage: Storage,

    // データ追加・編集ダイアログ
    dialog: false,

    // データ登録時のモード
    mode: "add",

    //  編集アイテム
    memoData: ""
  }),

  methods: {
    delData(no) {
      console.debug(`item no = ${no}`);
      this.confirm("削除しますがよろしいですか？", () => {
        this.items = this.storage.del(no);
      });
    },
    delAllData() {
      this.warning(
        "保存されているデータを全て削除しますがよろしいですか?",
        () => {
          this.items = this.storage.deleteAll();
        }
      );
    },

    addItem(item) {
      this.storage.add(item);
    },

    addData() {
      this.mode = "add";
      this.dialog = true;
    },

    editData(item) {
      console.debug(item);
      this.mode = "edit";
      this.memoData = item;
      this.dialog = true;
    }
  },

  // コンポーネンツがマウントされたときにlocalStorageクラスのインスタンス生成、データを取得する
  mounted() {
    this.storage = new Storage("data");
    this.items = this.storage.getItems;
  },

  created() {},

  components: {
    Confirm,
    PaymentDialog
  }
};
</script>

<style scoped></style>
