import Vue from "vue";
import Vuex from "vuex";
import router from "./router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: null,
    allUsers: [
      { id: 1, name: "haza1", email: "haza1@gmail.com", password: "12345" },
      { id: 2, name: "haza2", email: "haza2@gmail.com", password: "12345" }
    ],
    isLogin: false,
    isLoginError: false
  },
  mutations: {
    // 로그인 성공
    loginSuccess(state, payload) {
      state.isLogin = true;
      state.isLoginError = false;
      state.userInfo = payload;
    },
    // 로그인 실패
    loginError(state) {
      state.isLogin = false;
      state.isLoginError = true;
    },
    logout(state) {
      state.isLogin = false;
      state.isLoginError = false;
      state.userInfo = null;
    }
  },
  actions: {
    // 로그인 시도
    login({ state, commit }, loginObj) {
      let selectedUser = null;
      state.allUsers.forEach(user => {
        if (user.email === loginObj.email) selectedUser = user;
      });
      if (
        selectedUser === null ||
        selectedUser.password !== loginObj.password
      ) {
        commit("loginError");
      } else {
        commit("loginSuccess", selectedUser);
        router.push({ name: "mypage" });
      }
    },
    logout({ commit }) {
      commit("logout");
      router.push({ name: "home" });
    }
  }
});
