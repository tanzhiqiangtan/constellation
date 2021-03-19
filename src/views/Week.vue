<template>
  <div class="container">
    <card :name="weekData.name"> </card>
    <div class="url">
      <list title="本周日期" :content="weekData.date"></list>
      <sum field="工作" :content="weekData.work" />
      <sum field="健康" :content="weekData.health" />
      <sum field="爱情" :content="weekData.love" />
      <sum field="财运" :content="weekData.money" />
    </div>
  </div>
</template>
<script>
import { computed, onMounted, ref, watch, onActivated } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { getData } from "../services/request";
export default {
  name: "WeekPage",
  setup() {
    const router = useRouter();
    const store = useStore();
    const weekData = computed(() => store.state.week);
    const status = ref("");
    watch(
      () => {
        return router.currentRoute.value.name;
      },
      (value) => {
        store.commit("setType", value);
      }
    );

    onMounted(() => {
      getData(store);
    });
    onActivated(() => {
      if (status.value !== store.state.consName) {
        getData(store);
        status.value = store.state.consName;
      }
    });
    return {
      weekData
    };
  }
};
</script>

<style lang="scss" scoped>
.url {
  padding: 0.15rem 0.1rem;
  box-sizing: border-box;
}
</style>
