<template>
  <div id="logo">
    <img class="img" alt="logo capgemini" src="@/assets/images/lo.png">
    <h2 class="title">
      Asso Cap
      <span class="accroche">G</span>emini
    </h2>
  </div>
</template>

<script>
export default {
  name: "logo",
  props: {
    msg: String
  }
};
</script>

<style lang="scss" scoped>
#logo {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 232px;
}
#logo .title {
  color: grey;
  font-size: 15px;
  position: absolute;
  right: 0;
}
#logo .accroche {
  color: blue;
}
#logo .img {
  height: 100%;
  max-height: 138px;
  max-width: 138px;
}
</style>
