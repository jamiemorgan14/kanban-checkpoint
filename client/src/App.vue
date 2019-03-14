<template>
  <div id="app" class="container-fluid">
    <router-view />
    <div class="row">
      <div class="col-3 offset-7">
        <button class="btn btn-danger d-flex justify-content-end align-self-end" @click="logOut()">Log Out</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted() {
      //Authenticate on startup
      this.$store.dispatch('authenticate')
    },
    methods: {
      logOut() {
        this.$store.dispatch('logOut')
      }
    }
  }
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>