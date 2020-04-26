<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import ListTodo from "./ListTodo.vue";
import NewTodo from "./NewTodo";
export default {
  components: {
    appListTodo: ListTodo,
    appNewTodo: NewTodo
  }
};
</script>

<style>
</style>