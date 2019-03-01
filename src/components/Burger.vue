<template>
    <span id="burger" @click="$store.commit('toggleMobileNav')">BURGER</span>
</template>

<script>
export default {
    
}
</script>


<style lang="scss" scoped>



@media (max-width: 550px) {
  
  #burger {
    display: none;
  }
}
</style>
