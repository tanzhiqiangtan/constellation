<template>
  <div class="container">
    <card :name="todayData.name" :allIndex="todayData.all"> </card>
    <num-list :data="todayData" />
    <div class="url">
      <list title="今日日期" :content="todayData.datetime"></list>
      <list title="配对星座" :content="todayData.QFriend"></list>
      <list title="幸运颜色" :content="todayData.color"></list>
      <list title="幸运数字" :content="todayData.number"></list>
      <sum field="今日" :content="todayData.summary" />
    </div>
  </div>
</template>
<script>
import { computed, onActivated, onMounted, onUpdated, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { getData } from "../services/request";
import NumList from "../components/NumList";

export default {
  name: "TodayPage",
  components: {
    NumList
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const todayData = computed(() => store.state.today);
    //定义一个空的状态，当keep-alive缓存是，如何状态和state.consName不一样的时候重新请求数据；
    const status = ref("白羊座");

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
      todayData
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
