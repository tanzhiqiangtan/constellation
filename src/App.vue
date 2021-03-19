<template>
  <div id="app">
    <my-header>星座物语</my-header>
    <navs />
    <error-tip v-if="errorCode" :errorCode="errorCode"></error-tip>
    <router-view v-slot="{ Component }" v-if="!errorCode">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>

    <tab />
  </div>
</template>
<script>
import { useStore } from "vuex";
import MyHeader from "./components/Header/index";
import Tab from "./components/Tab/index";
import Navs from "./components/Nav/index";
import { useRouter } from "vue-router";
import { computed } from "vue";
import ErrorTip from "./components/ErrorTip";
export default {
  name: "app",
  components: {
    MyHeader,
    Tab,
    Navs,
    ErrorTip
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    router.push("/");
    return {
      errorCode: computed(() => store.state.errorCode)
    };
  }
};
</script>
<style lang="scss">
#app {
  margin-top: 0.44rem;
  padding-bottom: 0.2rem;
}
</style>
