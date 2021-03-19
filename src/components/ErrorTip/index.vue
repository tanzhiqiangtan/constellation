<template>
  <div class="error-box">
    <p>{{ errorData[errorCode] }}</p>
    <img :src="require('../../assets/img/error.png')" alt="" />
  </div>
</template>
<script>
import errorData from "../../datas/error";
export default {
  name: "ErrorTip",
  props: ["errorCode"],
  setup(props) {
    console.log(props.errorCode);
    return {
      errorData
    };
  }
};
</script>

<style lang="scss" scoped>
.error-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;

  img {
    width: 0.5rem;
  }

  p {
    margin-top: 0.15rem;
    font-size: 0.14rem;
    color: #999;
  }
}
</style>
