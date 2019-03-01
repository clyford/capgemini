<template>
  <footer>
    <nav id="nav_footer">
      <ul class="list">
        <router-link tag="li" class="item" to="/propos">Contact</router-link>
        <router-link tag="li" class="item" to="/propos">A Propos</router-link>
        <router-link tag="li" class="item" to="/propos">nos associations</router-link>
        <router-link tag="li" class="item" to="/propos">Mentions légales</router-link>
        <router-link tag="li" class="item" to="/propos">Agenda</router-link>
      </ul>
    </nav>
    <div id="bottom">
      <Logo/>
      <nav id="reseau_sociaux">
        <ul class="list">
          <li class="item">
            <a href="#">
              <img class="reseau" src="@/assets/images/IMG/facebook-square.svg">
            </a>
          </li>
          <li class="item">
            <a href="#">
              <img class="reseau" src="@/assets/images/IMG/linkedin-in.svg">
            </a>
          </li>
          <li class="item">
            <a href="#">
              <img class="reseau" src="@/assets/images/IMG/twitter.svg">
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>
import Logo from "@/components/Logo.vue";
export default {
  name: "MyFooter",
  components: {
    Logo
  },
  props: {
    msg: String
  }
};
</script>

<style lang="scss" scoped>
.reseau {
  width: 22px;
  height: 22px;
}

#nav_footer {
  max-width: 75%;
  margin: 0 auto;
}

#nav_footer .list {
  display: flex;
  & > .item {
      flex: 1;
  }
}

#bottom {
  display: flex;
   justify-content: space-between;
 & > * {
     width: 50%;
 }
}


#reseau_sociaux {
    display: flex;
    align-items: center;
}

#reseau_sociaux .list {
    display: flex;
}
</style>
