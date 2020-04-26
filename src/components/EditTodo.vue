<template>
  <form>
    <h1>New Todo</h1>
    <div v-for="(item,index) in allListJob" :key="index">
      <div v-if="item._id == getId">
        <div class="form-group">
          <label for="exampleFormControlInput1">NameJob</label>
          <input
            type="text"
            class="form-control"
            placeholder="NameJob"
            name="NameJob"
            id="exampleFormControlInput1"
            v-model="item.NameJob"
          />
          <input type="hidden" v-model="item._id" />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">wage</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="wage"
            v-model="item.wage"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">programmingLanguage</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="programmingLanguage"
            v-model="item.programmingLanguage"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">YearsOfExperience</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="YearsOfExperience"
            v-model="item.YearsOfExperience"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">RecruitmentCompany</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="RecruitmentCompany"
            v-model="item.RecruitmentCompany"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">describe</label>
          <input
            v-model="item.describe"
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="describe"
          />
        </div>
      </div>
    </div>
    <button @click="EditTodo(getId)">Submit</button>
  </form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      todo: {
        NameJob: "",
        wage: "",
        programmingLanguage: "",
        YearsOfExperience: "",
        RecruitmentCompany: "",
        describe: "",
        _id: ""
      }
    };
  },
  computed: {
    ...mapGetters(["getId", "allListJob"])
  },
  methods: {
    EditTodo(idget) {
      this.$store.commit("EditItemJob", this.todo);
      this.$router.push("/");
    }
  }
};
</script>

<style>
</style>