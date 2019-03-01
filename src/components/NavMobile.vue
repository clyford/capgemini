<template>
    <nav id="menu" role="menu" :class="{'is-active':  isNavOn}">
      <router-link tag="li" class="item" to="/">Home</router-link>
      <router-link tag="li" class="item" to="/propos">A Propos</router-link>
      <router-link tag="li" class="item" to="/evenements">Evenements</router-link>
      <router-link tag="li" class="item" to="/connecter">Se connecter</router-link>
    </nav>
</template>

<script>
export default {
  name: "burger",
  props: {
    msg: String
  },
  computed: {
    isNavOn() {
      return this.$store.getters["navMobileStatus"];
    }
  }
};
</script>



<style lang="scss" scoped>

@media (max-width: 550px) {
  
  #burger {
    
    color: blue;
    background-color: black;
  }
}

#menu .item {text-decoration: none;
color: black;}

#menu .item :hover{color: red;}

/*AFFICHAGE MENU*/

#menu{
  top: 0;
  left: 0;
    position: absolute;
    z-index: 10;
    width: 33vw;
    padding: 125px 50px 50px;
    height: 100vh;
    background: white;
    list-style: none;
    /* pour le mettre sur la gauche
    transform: translate(-150%,0);
    -webkit-transform: translate(-150%,0);
    */
    left: -33vw;
    transition: left .5s linear;
    cursor: pointer;

    &.is-active {
      left: 0;
    }
}




</style>

