<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Header from "@/components/Header";

export default {
  name: "app",
  components: {
    Header,
  },
  computed: {
    ...mapGetters({
      isLoggedIn: "isLoggedIn",
      user: "getUser",
    }),
  },
  mounted: function() {
    if (localStorage.getItem("isLoggedIn") !== null) {
      this.$store.state.login.isLoggedIn = JSON.parse(
        localStorage.getItem("isLoggedIn")
      );
      this.$store.state.login.user = JSON.parse(localStorage.getItem("user"));
    } else return;
  },
};
</script>

<style></style>
