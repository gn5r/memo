<template>
  <v-app-bar app dark color="primary">
    <v-toolbar-title>簡易メモアプリ</v-toolbar-title>
    <v-spacer />

    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" icon @click="$router.push('/')">
          <v-icon>fas fa-home</v-icon>
        </v-btn>
      </template>
      <span>ホームへ戻る</span>
    </v-tooltip>
  </v-app-bar>
</template>
<script>
export default {
  props: {
    debug: Boolean
  },
  methods: {}
};
</script>
