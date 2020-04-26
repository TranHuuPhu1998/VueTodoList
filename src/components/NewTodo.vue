<template>
  <form>
    <h1>New Todo</h1>
    <div class="form-group">
      <label for="exampleFormControlInput1">NameJob</label>
      <input
        type="text"
        class="form-control"
        placeholder="NameJob"
        id="exampleFormControlInput1"
        v-model="todo.NameJob"
      />
    </div>
    <div class="form-group">
      <label for="exampleFormControlInput1">wage</label>
      <input
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="wage"
        v-model="todo.wage"
      />
    </div>
    <div class="form-group">
      <label for="exampleFormControlInput1">programmingLanguage</label>
      <input
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="programmingLanguage"
        v-model="todo.programmingLanguage"
      />
    </div>
    <div class="form-group">
      <label for="exampleFormControlInput1">YearsOfExperience</label>
      <input
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="YearsOfExperience"
        v-model="todo.YearsOfExperience"
      />
    </div>
    <div class="form-group">
      <label for="exampleFormControlInput1">RecruitmentCompany</label>
      <input
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="RecruitmentCompany"
        v-model="todo.RecruitmentCompany"
      />
    </div>
    <div class="form-group">
      <label for="exampleFormControlInput1">describe</label>
      <input
        v-model="todo.describe"
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="describe"
      />
    </div>
    <button @click="AddTodo">Submit</button>
  </form>
</template>

<script>

export default {
  data() {
    return {
      todo: {
        NameJob: "",
        wage: "",
        programmingLanguage: "",
        YearsOfExperience: "",
        RecruitmentCompany: "",
        describe: ""
      }
    };
  },
  methods: {
    AddTodo() {
      this.$store.commit("NewItemJob", this.todo);
      this.$router.push("/");
    }
  }
};
</script>

<style>
</style>