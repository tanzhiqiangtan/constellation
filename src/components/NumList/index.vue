<template>
  <div class="num-list">
    <num-item
      v-for="(item, index) in numData"
      :key="index"
      :data="data"
      :item="item"
    ></num-item>
  </div>
</template>
<script>
import NumItem from "./NumItem";
import numData from "../../datas/num";
export default {
  name: "NumList",
  components: { NumItem },
  props: {
    data: Object
  },
  setup(props) {
    return {
      numData
    };
  }
};
</script>

<style lang="scss" scoped>
.num-list {
  display: flex;
  flex-direction: row;
  margin: 0.15rem 0;
  padding: 0.1rem;
  box-shadow: 0.02rem 0.02rem 0.05rem #999;
}
</style>
