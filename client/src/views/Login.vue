<template>
  <div class="login login-forms">
    <div class="row">
      <div class="col-12 text-center">
        <h1>Welcome to KanBan</h1>
      </div>
    </div>

    <div class="row form-container" v-if="loginForm">
      <div class="col-12 d-flex align-items-end justify-content-center">
        <form @submit.prevent="loginUser" class="form-width">
          <input type="email" v-model="creds.email" placeholder="eMail" class="login-form">
          <br>
          <input type="password" v-model="creds.password" placeholder="Password" class="login-form mt-1">
          <br>
          <button type="submit" class="btn btn-block btn-outline-light mt-3 text-center">Login</button>
        </form>
      </div>
    </div>
    <div v-if="!loginForm" class="row form-container">
      <div class="col-6 text-center col-12 d-flex align-items-end justify-content-center">
        <form @submit.prevent="register" class="mt-2 text-center form-width">
          <input type="email" v-model="newUser.email" placeholder="eMail" class="login-form">
          <br>
          <input type="password" v-model="newUser.password" placeholder="Password" class="login-form mt-1">
          <br>
          <input type="text" v-model="newUser.name" placeholder="Username" class="login-form mt-1">
          <br>
          <button type="submit" class="btn btn-block btn-outline-light mt-3 text-center">Create Account</button>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-12 form-container col-12 d-flex align-items-start justify-content-center"">
        <div class="
        action mt-3" @click="loginForm = !loginForm, newUser={}">
        <p v-if="loginForm">No account? Click here to Register</p>
        <p v-else>Already have an account? Click here to Login</p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import router from "@/router.js";
  export default {
    name: "login",
    mounted() {
      this.creds.password = ''
    },
    data() {
      return {
        loginForm: true,
        creds: {
          email: "",
          password: ""
        },
        newUser: {
          email: "",
          password: "",
          name: ""
        }
      };
    },
    methods: {
      register() {
        this.$store.dispatch("register", this.newUser);
      },
      loginUser() {
        this.$store.dispatch("login", this.creds);
      }
    }
  };
</script>

<style scoped>
  .action {
    cursor: pointer;
  }

  input {
    height: 50px;
    width: 100%;
    text-align: center;
    border: 1px solid rgba(224, 224, 224, 0.473);
  }

  .form-container {
    height: 40vh
  }

  .form-width {
    width: 60%
  }
</style>