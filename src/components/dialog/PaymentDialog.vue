<template>
  <v-dialog v-model="dialog" max-width="800">
    <v-card>
      <!-- ダイアログタイトル -->
      <v-card-title class="pa-0">
        <v-toolbar dark :color="titleColor">
          <v-toolbar-title class="headline">メモの追加</v-toolbar-title>
          <v-spacer />
          <v-toolbar-items>
            <!-- propsのenableCloseがtrueの時に閉じるボタンを表示(描画)する。デフォルトは非表示 -->
            <v-btn
              v-if="enableClose"
              icon
              @click="$emit('update:dialog', false)"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
      </v-card-title>

      <v-card-text>
        <v-container fluid>
          <v-row align="center" justify="center">
            <v-col cols="12">
              <v-text-field label="タイトル"></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: Boolean,
    enableClose: Boolean
  },
  data: () => ({}),

  created() {}
};
</script>

<style scoped></style>
