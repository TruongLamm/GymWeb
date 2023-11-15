<!-- eslint-disable -->
<template>
    <v-card
      class="d-flex align-center justify-center rounded-0 bg"
      width="100vw"
      min-height="100vh"
      height="wrap-content"
    >
      <div>
        <v-card
          class="pa-10 d-flex flex-column align-center justify-space-between rounded-xl"
          style="background-color: rgba(255, 255, 255, 1); border: 1px solid rgb(183, 180, 180);"
          width="682px"
          height="auto"
        >
          <h1 class="title_login">{{ isLogin ? $t("logIn") : $t("register") }}</h1>
          <div style="width: 100%">
            <v-text-field
              name="input-10-2"
              :label="this.$t('name')"
              value=""
              color="#000000"
              :rules="[rules.required, rules.min]"
              v-model="userInput.userName"
              class="input-group--focused login_input"
              v-show="!isLogin"
              type="text"
              variant="outlined"
              prepend-inner-icon="mdi-account"
            />
  
            <v-text-field
              name="input-10-2"
              label="Company"
              v-show="!isLogin"
              :rules="[rules.required, rules.min]"
              value=""
              color="#333333"
              v-model="userInput.userCompany"
              class="input-group--focused login_input"
              variant="outlined"
              prepend-inner-icon="mdi-domain"
            />
  
            <v-text-field
              name="input-10-2"
              label="Email"
              value=""
              :rules="[rules.required, rules.min]"
              color="#333333"
              v-model="userInput.userEmail"
              class="input-group--focused login_input"
              variant="outlined"
              prepend-inner-icon="mdi-email"
            />
  
            <v-text-field
              name="input-10-2"
              color="#333333"
              label="Phone"
              :rules="[rules.required, rules.min]"
              value=""
              v-show="!isLogin"
              v-model="userInput.userPhone"
              class="input-group--focused login_input"
              variant="outlined"
              prepend-inner-icon="mdi-phone"
            />
  
            <v-text-field
              :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show3 ? 'text' : 'password'"
              name="input-10-2"
              :label="this.$t('password')"
              :hint="this.$t('hintPasswordField')"
              value=""
              v-show="isLogin"
              color="#333333"
              v-model="userInput.userPassword"
              class="input-group--focused login_input"
              @click:append="show3 = !show3"
              @keyup.enter="callback"
              variant="outlined"
              prepend-inner-icon="mdi-key"
            />
            <v-checkbox
              v-model="policyChecked"
              v-show="!isLogin"
              color="green"
              :rules="[rules.required]"
              class="mb-5 register_checkbox"
              light
              :label="'Agree to the all policy of GymLife'"
            />
          </div>
          <div
            v-if="isError && !isLogin"
            class="d-flex justify-start"
            style="width: 100%; color: red"
          >
            <h5>{{ errorMessage }}</h5>
          </div>
          <g-recaptcha
            data-sitekey="6LcEqtQlAAAAAGHpVRo-Yb6sVo0o_3fa9jT2qhoP"
            class="input-group--focused width-100 d-flex justify-center"
            style="width: 100%"
            :data-validate="validate"
            :data-callback="callback"
          >
            <v-btn
              elevation="2"
              min-width="150px"
              :loading="loader"
              :disabled="loading"
              @click="loader = 'loading'"
              class="mb-3 width-100 btn_login"
              >{{ isLogin ? $t("logIn") : $t("register") }}</v-btn
            >
          </g-recaptcha>  
          <a class="switchTabMsg" @click="isLogin = !isLogin">{{
            isLogin ? $t("switchTabRegister") : $t("switchTabLogin")
          }}</a>
          <LoginWithGoogle></LoginWithGoogle>
        </v-card>
      </div>
    </v-card>
  </template>
<!-- eslint-disable -->
  <script>
  import gRecaptcha from "@finpo/vue2-recaptcha-invisible";
  import { mapGetters } from "vuex";
  import LoginWithGoogle from "../Atoms/LoginWithGoogle.vue";
  
  export default {
    components: {
      gRecaptcha,
      LoginWithGoogle,
    },
    mounted() {},
    data() {
      return {
        userInput: {
          userName: "",
          userPhone: "",
          userEmail: "",
          userCompany: "",
          userPassword: "",
        },
        isLogin: true,
        show3: false,
        policyChecked: false,
        loading: false,
        loader: null,
        isError: false,
        errorMessage: "",
        isRan: false,
      };
    },
    watch: {},
    computed: {
      ...mapGetters("User", []),
      rules() {
        return {
          required: (value) => !!value || this.$t("required"),
          min: (v) => v.length >= 0 || this.$t("hintPasswordField"),
          emailMatch: () => this.$t("emailMatch"),
          passwordMatch: (v) =>
            this.userPassword === v || this.$t("passwordMatch"),
        };
      },
    },
    methods: {
      validate() {
        return true;
      },
      async callback(token) {
        if (token) {
          alert("Please check you are not robot!!!");
        } else {
          alert("Please check you are not robot!!!");
        }
      },
    },
  };
  </script>
  
<style scoped lang="scss">
  .width-100 {
    width: 100%;
  }
  .button-submit {
    width: 200%;
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
    background-color: transparent;
    color: #7cc242;
    border-radius: 2em;
    border-width: 2px;
    background: 0 0;
    font-weight: bold;
    margin-top: 10px;
  }
  .direction-column {
    margin-top: 40px;
    flex-direction: column;
  }
  .bg {
    flex-direction: column;
    background-size: cover;
    font-family: "Poppins", sans-serif;
  }
  
  .hidden {
    display: none !important;
  }
  
  a:hover {
    font-weight: bolder;
  }
  
  .switchTabMsg {
    text-align: center;
    width: fit-content;
    color: black !important;
    text-decoration: underline;
  }
  
  .passwordRules {
    margin-top: -25px;
    margin-left: 15px;
    font-size: small;
    opacity: 0.6;
  }
  .login_input{
    padding: 23px 36px;
  }

  .title_login{
    color: #FF4601;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
  }
  .register_checkbox{
    margin-left: 35px;
  }
  .btn_login{
    background-color: #FF4601 !important;
    color: white;
    border-radius: 10px;
    border: 2px solid #FF4601;
    padding: 7px 20px;
    width: 528px;
    height: 70px !important;
    font-size: 30px;
    font-style: normal;
    letter-spacing: normal;
    font-weight: 500;
    text-transform: inherit;
    display: block;
    margin: 0 auto;
    margin-top: 20px;
  }
</style>
  