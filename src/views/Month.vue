<template>
  <div class="container">
    <card :name="monthData.name"> </card>
    <div class="url">
      <sum field="工作" :content="monthData.work" />
      <sum field="健康" :content="monthData.health" />
      <sum field="爱情" :content="monthData.love" />
      <sum field="财运" :content="monthData.money" />
      <sum field="本月" :content="monthData.all" />
    </div>
  </div>
</template>
<script>
import { computed, onMounted, watch, onActivated, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { getData } from "../services/request";

export default {
  name: "MonthPage",
  setup() {
    const router = useRouter();
    const store = useStore();
    const monthData = computed(() => store.state.month);
    const status = ref("");
    console.log(monthData)
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
      console.log("月你会再一次经过吗");
      if (status.value !== store.state.consName) {
        getData(store);
        status.value = store.state.consName;
      }
    });
    return {
      monthData
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
