<template>
  <v-app>
    <header-bar />
    <v-content>
      <top-page />
    </v-content>
    <footer-bar />
  </v-app>
</template>

<script>
import HeaderBar from "@/components/common/HeaderBar";
import FooterBar from "@/components/common/FooterBar";
import TopPage from "@/views/TopPage";

export default {
  name: "App",

  components: {
    HeaderBar,
    FooterBar,
    TopPage
  },

  data: () => ({
    //
  })
};
</script>
