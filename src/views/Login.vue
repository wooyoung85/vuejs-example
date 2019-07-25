<template>
  <v-container fill-height style="max-width:500px;">
    <v-layout align-center row wrap>
      <v-flex xs12>
        <v-alert :value="isLoginError" type="error" class="mb-3">
          입력하신 정보와 일치하는 계정이 없습니다.
        </v-alert>
        <v-alert :value="isLogin" type="success" class="mb-3">
          로그인 성공!
        </v-alert>
        <v-card>
          <v-toolbar flat>
            <v-toolbar-title>로그인</v-toolbar-title>
          </v-toolbar>
          <div class="pa-3">
            <v-text-field v-model="email" label="이메일을 입력하세요">
            </v-text-field>
            <v-text-field
              v-model="password"
              type="password"
              label="패스워드를 입력하세요"
            >
            </v-text-field>
            <v-btn
              color="primary"
              depressed
              block
              large
              @click="
                login({
                  email: email,
                  password: password
                })
              "
            >
              로그인
            </v-btn>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      email: null,
      password: null
    };
  },
  computed: {
    ...mapState(["isLogin", "isLoginError"])
  },
  methods: {
    ...mapActions(["login"])
  }
};
</script>
