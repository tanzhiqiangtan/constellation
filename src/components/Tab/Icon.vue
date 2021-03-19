<template>
  <router-link :to="path" class="icon">
    <i>{{ iconText }}</i>
    <span>{{ tabText }}</span>
  </router-link>
</template>
<script>
export default {
  name: "icon",
  props: {
    path: String,
    iconText: String,
    tabText: String
  }
};
</script>

<style lang="scss" scoped>
.icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  i {
    display: inline-block;
    width: 0.25rem;
    height: 0.25rem;
    line-height: 0.25rem;
    background-color: #ddd;
    color: #999;
    font-size: 0.12rem;
    text-align: center;
    border-radius: 50%;
  }
  span {
    font-size: 0.12rem;
  }
  &.router-link-active {
    i {
      background-color: #db7093;
      color: #fff;
    }
    span {
      color: #db7093;
    }
  }
}
</style>
