<template>
  <div class="nav-item">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "NavItem",

  setup(props, ctx) {}
};
</script>

<style lang="scss" scoped>
.nav-item {
  padding-right: 0.3rem;
  width: 0.8rem;
  height: 100%;
  line-height: 0.44rem;
  text-align: center;
  font-size: 0.14rem;
  &.nav-current {
    color: #db7093;
    font-weight: bold;
  }
}
</style>
