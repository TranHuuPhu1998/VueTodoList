<template>
  <div class="pt-4">
    <ul class="list-group mt-4" v-for="(ItemJob,index) in filterJob" :key="index">
      <li class="list-group-item active">
        <span>Tuyển Dev :</span>
        <span>{{ ItemJob.NameJob }}</span>
      </li>
      <li class="list-group-item">
        <span>Công Ty Tuyển dụng :</span>
        <span>{{ ItemJob.RecruitmentCompany }}</span>
      </li>
      <li class="list-group-item">
        <router-link to="/item">
          <button
            v-on:click="getInfo(ItemJob._id)"
            type="button"
            class="mt-1 btn btn-outline-info"
          >Info</button>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import { eventBus } from "../main.js";

export default {
  data() {
    return {
      keyWord: ""
    };
  },
  computed: {
    ...mapGetters(["allListJob"]),
    filterJob: function() {
      let { keyWord, allListJob } = this;
      if (keyWord) {
        return allListJob.filter(ItemJob => {
          return (
            ItemJob.NameJob.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1
          );
        });
      } else {
        return allListJob;
      }
    }
  },
  methods: {
    ...mapActions(["actionsGetId"]),
    getInfo(id) {
      this.$store.commit("actionsGetId", id);
      // eventBus.GetId(id);
    }
  },
  created() {
    eventBus.$on("keyWord", value => {
      this.keyWord = value;
    });
  }
};
</script>

<style>
</style>