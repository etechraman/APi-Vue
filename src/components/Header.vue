<template>
  <nav class="navbar is-warning" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item">
        <router-link to="/" v-if="!isLoggedIn">VUE</router-link>
      </div>
    </div>
    <div class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <a v-if="!isLoggedIn" @click="login" class="button is-white">Login</a>
          <a v-if="isLoggedIn" @click="logout" class="button is-white"
            >Logout</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapGetters({
      isLoggedIn: "isLoggedIn",
    }),
    isLoggedIn: {
      get() {
        return this.$store.state.login.isLoggedIn;
      },
      set(val) {
        this.$store.commit("updateIsLogegdIn", val);
      },
    },
  },
  methods: {
    ...mapActions({
      dologout: "logout",
    }),
    login() {
      this.$router.push("login");
    },
    logout() {
      this.dologout();
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
