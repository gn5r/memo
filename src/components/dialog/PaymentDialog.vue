<template>
  <v-dialog v-model="dialog" max-width="800">
    <v-card>
      <!-- ダイアログタイトル -->
      <v-card-title class="pa-0">
        <v-toolbar dark color="info">
          <v-toolbar-title class="headline">メモの追加</v-toolbar-title>
          <v-spacer />
          <v-toolbar-items>
            <!-- propsのenableCloseがtrueの時に閉じるボタンを表示(描画)する。デフォルトは非表示 -->
            <v-btn v-if="enableClose" icon @click="$emit('update:dialog', false)">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
      </v-card-title>

      <v-card-text>
        <v-container fluid>
          <v-form ref="form" lazy-validation>
            <v-row align="center" justify="center">
              <!-- formで囲ってデータ追加時に入力チェックを行う -->
              <v-col cols="6">
                <v-text-field label="タイトル" v-model="item.title"></v-text-field>
              </v-col>
              <v-col cols="5">
                <v-text-field label="合計額" v-model="totalCost" readonly></v-text-field>
              </v-col>
              <v-col cols="1">
                <v-icon color="success" @click="addData">fas fa-plus-circle</v-icon>
              </v-col>
            </v-row>
          </v-form>

          <v-row align="center" justify="center" v-for="content in item.contents" :key="content.no">
            <v-col cols="6">
              <v-text-field label="名称" v-model="content.text"></v-text-field>
            </v-col>
            <v-col cols="5">
              <v-text-field label="金額" v-model="content.cost"></v-text-field>
            </v-col>
            <v-col cols="1">
              <v-icon color="error" @click="delData(content.no)">fas fa-minus-circle</v-icon>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="success" @click="addContent">追加</v-btn>
        <v-btn color="error" @click="$emit('update:dialog',false)">キャンセル</v-btn>
      </v-card-actions>

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
    </v-card>
  </v-dialog>
</template>

<script>
import Confirm from "@/components/common/Confirm";
import confirmScript from "../../util/confirm";

export default {
  mixins: [confirmScript],
  name: "PaymentDialog",
  props: {
    dialog: Boolean,
    enableClose: Boolean
  },
  data: () => ({
    item: {
      title: "",
      total: 0,
      contents: [
        {
          no: 1,
          text: "",
          cost: 0
        }
      ]
    }
  }),

  methods: {
    // 要素を追加する
    addData() {
      const content = {
        no: this.item.contents.length + 1,
        text: "",
        cost: 0
      };
      this.item.contents.push(content);
    },
    // 要素を削除する
    delData(no) {
      const idx = this.item.contents.findIndex(content => content.no === no);
      if (idx !== -1) this.item.contents.splice(idx, 1);
    },

    // 追加ボタン
    addContent() {
      this.confirm("入力した内容でCookieに保存します。よろしいですか？", () => {
        // syncしているdialogフラグをfalseにしてダイアログを閉じる
        this.$emit("update:dialog", false);
        // 入力したデータを親に返却
        this.$emit("add", this.item);
      });
    }
  },

  created() {},
  computed: {
    // 合計額を算術プロパティで計算する
    totalCost: {
      get() {
        let total = Number(0);
        this.item.contents.forEach(content => {
          total += Number(content.cost);
        });
        return total;
      }
    }
  },
  components: {
    Confirm
  }
};
</script>

<style scoped></style>
