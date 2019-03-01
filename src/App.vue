<template>
  <div id="app">
    <MyHeader/>
    <NavMobile/>
    <main id="content_main">
      <router-view/>
    </main>
    <MyFooter/>
  </div>
</template>
<script>
import MyHeader from "@/views/partials/Header.vue";
import MyFooter from "@/views/partials/Footer.vue";
import NavMobile from "@/components/NavMobile.vue";

export default {
  components: {
    MyHeader,
    MyFooter,
    NavMobile
    
  }
}
</script>

  
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat';
}

li {
  list-style: none;
}

#app {
    margin: 0 auto;
    padding: 32px 20px;
    position: relative;

    #content_main {
      min-height: 50vh;
    }
}
@media screen and (max-width:780px){}


</style>
