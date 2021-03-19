<template>
  <div class="container">
    <card :name="yearData.name"> </card>
    <div class="url">
      <list title="所在年份" :content="yearData.date"></list>
      <list title="幸运石头" :content="yearData.luckeyStone"></list>
      <sum field="事业" :content="yearData.career && yearData.career[0]" />
      <sum field="爱情" :content="yearData.love && yearData.love[0]" />
      <sum field="财运" :content="yearData.finance && yearData.finance[0]" />
      <sum
        field="本年"
        :content="
          yearData.mima && `${yearData.mima.info}.${yearData.mima.text[0]}`
        "
      />
    </div>
  </div>
</template>
<script>
import { computed, onMounted, ref, watch, onActivated } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { getData } from "../services/request";
export default {
  name: "YearPage",
  setup() {
    const router = useRouter();
    const store = useStore();
    const yearData = computed(() => store.state.year);
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
      yearData
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
