<template>
  <div>
    <ul class="list-group" v-for="(item,index) in allListJob" :key="index">
      <div v-if="item._id == getId">
        <li class="list-group-item active">
          <span></span>
          <span>NameJob :</span>
          <span>{{item.NameJob}}</span>
        </li>
        <li class="list-group-item">
          <span>Wage :</span>
          <span>{{item.wage}}</span>
        </li>
        <li class="list-group-item">
          <span>programmingLanguage :</span>
          <span>{{item.programmingLanguage}}</span>
        </li>
        <li class="list-group-item">
          <span>YearsOfExperience :</span>
          <span>{{item.YearsOfExperience}}</span>
        </li>
        <li class="list-group-item">
          <span>describe:</span>
          <span>{{ item.describe }}</span>
        </li>
      </div>
    </ul>
    <li class="list-group-item">
      <button type="button" class="btn btn-primary" @click="Delete(getId)">DELETE</button>
      <button type="button" class="btn btn-secondary" @click="Edit(getId)">EDIT</button>
      <button type="button" class="btn btn-success" @click="Clip(getId)">CLIP</button>
    </li>
  </div>
</template>

<script>
import { eventBus } from "../main.js";
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["getId", "allListJob"])
  },
  data: function() {
    return {
    };
  },
  methods: {
    Delete(id) {
      this.$store.commit("DeleteItemJob", id);
      this.$router.push("/");
    },
    Edit(id){
      this.$router.push("/edit")
    }
  }
};
</script>

<style>
</style>