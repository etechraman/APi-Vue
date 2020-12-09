import axios from "axios";
export default {
  state: {
    username: "",
    password: "",
    user: {},
    isLoggedIn: false,
    error: false,
    login_progress: false,
  },
  getters: {
    getUser: (state) => state.user,
    isLoggedIn: (state) => state.isLoggedIn,
  },
  actions: {
    async login({ commit }, payload) {
      try {
        commit("login_progress", true);
        const response = await axios.post(
          "https://reqres.in/api/login",
          payload
        );
        delete payload.password;
        payload.token = response;
        commit("login", payload);
        commit("updateUsername", "");
        commit("updatePassword", "");
        commit("login_progress", false);
      } catch (err) {
        commit("login_progress", false);
        commit("login_fail", err);
      }
    },
    logout({ commit }) {
      commit("logout");
    },
  },
  mutations: {
    login(state, data) {
      state.user = data;
      state.isLoggedIn = true;
      localStorage.setItem("user", JSON.stringify(state.user));
      localStorage.setItem("isLoggedIn", state.isLoggedIn);
    },
    login_fail: (state, data) => {
      state.error = data;
    },
    login_progress: (state, data) => {
      state.login_progress = data;
    },
    logout(state) {
      state.user = {};
      state.isLoggedIn = false;
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("user");
    },
    updateUsername(state, val) {
      state.username = val;
    },
    updatePassword(state, val) {
      state.password = val;
    },
    updateIsLoggedIn(state, val) {
      state.isLoggedIn = val;
    },
  },
};
