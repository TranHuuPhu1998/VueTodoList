<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/">HomePage</router-link>
    <router-link to="/new">NewTodo</router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active"></li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Dropdown</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0" v-on:submit.prevent="Search">
        <input
          class="form-control mr-sm-2"
          v-model="keyWord"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>

<script>
import { eventBus } from "../main.js";
export default {
  data() {
    return {
      keyWord: ""
    };
  },
  methods: {
    Search() {
      console.log("1", this.keyWord);
      eventBus.$emit("keyWord", this.keyWord);
    }
  }
};
</script>

<style>
</style>