<template>
  <header class="header">
    <img src="../../assets/img/cons.png" alt="星座物语" />
    <h1><slot></slot></h1>
  </header>
</template>
<script>
export default {
  name: "MyHeard"
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 0.44rem;
  line-height: 0.44rem;
  font-size: 0.18rem;
  color: #fff;
  background: #db7093;
  img {
    width: 0.23rem;
    margin-right: 0.05rem;
  }
}
</style>
