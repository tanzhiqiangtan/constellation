<template>
  <div
    class="nav"
    v-current-nav="{
      className: 'nav-item',
      currentName: 'nav-current',
      currentIndex
    }"
    @click="changeCurrentIndex"
  >
    <div class="scrool-wrapper">
      <div class="nav-wrapper" :style="`width:${nav.length * 0.8}rem`">
        <nav-item
          v-for="(item, index) in nav"
          :key="index"
          :data-index="index"
          >{{ item }}</nav-item
        >
      </div>
    </div>
  </div>
</template>
<script>
import NavItem from "./NavItem";
import nav from "../../datas/nav";
import { ref } from "vue";
import { CurrentNav } from "../../directive";
import { useStore } from "vuex";
import { getData } from "../../services/request";
export default {
  name: "Nav",
  directives: {
    CurrentNav
  },
  components: {
    NavItem
  },
  setup() {
    //当前nav索引 默认0
    const currentIndex = ref(0);
    //获取store
    const store = useStore();
    //点击改变当前索引
    const changeCurrentIndex = (e) => {
      if (e.target.className === "nav-item") {
        currentIndex.value = parseInt(e.target.dataset.index);
        //通过点击改变改变vuex 的consName 星座名称
        const consName = e.target.innerText;
        store.commit("setConsName", consName);
        //重新请求数据
        getData(store);
      }
    };
    return {
      nav,
      currentIndex,
      changeCurrentIndex
    };
  }
};
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  z-index: 1;
  top: 0.44rem;
  height: 0.44rem;
  width: 100%;
  border: 1px solid #ddd;
  overflow: hidden;
  background-color: #fff;
  .scrool-wrapper {
    overflow-x: scroll;
    height: 0.5rem;
    .nav-wrapper {
      display: flex;
      height: 0.44rem;
    }
  }
}
</style>
