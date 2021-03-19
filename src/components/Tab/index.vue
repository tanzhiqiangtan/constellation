<template>
  <footer>
    <div v-for="(item, index) in tabData" :key="index" class="tab-item">
      <icon
        :iconText="item.iconText"
        :path="item.path"
        :tabText="item.tabText"
      />
    </div>
  </footer>
</template>
<script>
import tab from "../../datas/tab";
import Icon from "./Icon";
import { reactive } from "vue";
export default {
  name: "Tab",
  components: {
    Icon
  },
  setup() {
    const tabData = reactive(tab);
    console.log(tabData);
    return {
      tabData
    };
  }
};
</script>

<style lang="scss" scoped>
footer {
  position: fixed;
  display: flex;
  justify-content: space-around;

  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.44rem;
  border-top: 1px solid #ddd;
  background-color: #fff;
}
</style>
