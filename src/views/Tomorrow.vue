<template>
  <div class="container">
    <card :name="tomorrowData.name"> </card>
    <div class="url">
      <list title="明日日期" :content="tomorrowData.datetime"></list>
      <list title="配对星座" :content="tomorrowData.QFriend"></list>
      <list title="幸运颜色" :content="tomorrowData.color"></list>
      <list title="幸运数字" :content="tomorrowData.number"></list>
      <sum field="明日" :content="tomorrowData.summary" />
    </div>
  </div>
</template>
<script>
import { computed, onMounted, ref, watch, onActivated } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { getData } from "../services/request";
export default {
  name: "TomorrowPage",
  setup() {
    const router = useRouter();
    const store = useStore();
    const tomorrowData = computed(() => store.state.tomorrow);
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
      tomorrowData
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
