<template>
  <div class="loginForm">
    <section>
      <b-field label="Username" class="mt-5">
        <b-input required v-model="username" maxlength="30"></b-input>
      </b-field>
      <b-field label="Password">
        <b-input required type="password" v-model="password" password-reveal>
        </b-input>
      </b-field>
      <button
        :class="{ button: true, 'is-full': true, 'is-loading': login_progress }"
        @click="loginClick()"
      >
        Login
      </button>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "LoginForm",
  watch: {
    user(val) {
      if (val.username) {
        this.$router.push("profile");
      }
    },
    error_message: function(val) {
      if (val) {
        this.$snackbar.open({
          duration: 5000,
          message: "Login failed. " + val.message,
          type: "is-danger",
          position: "is-bottom-left",
        });
      }
    },
  },
  computed: {
    ...mapGetters({
      user: "getUser",
      isLoggedIn: "isLoggedIn",
    }),
    login_progress: function() {
      return this.$store.state.login.login_progress;
    },
    error_message: function() {
      return this.$store.state.login.error;
    },
    username: {
      get() {
        return this.$store.state.login.username;
      },
      set(val) {
        this.$store.commit("updateUsername", val);
      },
    },
    password: {
      get() {
        return this.$store.state.login.password;
      },
      set(val) {
        this.$store.commit("updatePassword", val);
      },
    },
  },
  methods: {
    ...mapActions(["login"]),
    loginClick() {
      this.$store.dispatch("login", {
        username: this.username,
        password: this.password,
      });
    },
  },
};
</script>

<style></style>
