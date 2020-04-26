<template>
  <div id="app">
    <appNavbar />
    <div class="container">
      <appHomePage />
    </div>
  </div>
</template>

<script>
import HomePage from "./components/HomePage.vue";
import Navbar from "./components/NavBar.vue";
export default {
  name: "App",
  data() {
    return {
      datasTodo: []
    };
  },
  components: {
    appHomePage: HomePage,
    appNavbar: Navbar
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
