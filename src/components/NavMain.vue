<template>
  <nav id="nav">
    <ul class="list">
      <router-link tag="li" class="item" to="/">Home</router-link>
      <router-link tag="li" class="item" to="/propos">A Propos</router-link>
      <router-link tag="li" class="item" to="/evenements">Evenements</router-link>
      <router-link tag="li" class="item" to="/connecter">Se connecter</router-link>
      
    </ul>
  </nav>
</template>

<script>
export default {
  
};
</script>

<style lang="scss" scoped>
#nav {
  color: grey;
  font-size: 15px;
  max-width: 700px;
  cursor: pointer;
  & > .list {
    display: flex;
    align-items: center;
    height: 100%;
    align-items: center;
    & > .item {
      height: 33px;
      list-style: none;
      margin-right: 54px;
    }
    & > .item:last-of-type {
      margin-right: 0;
    }
  }
}















</style>
