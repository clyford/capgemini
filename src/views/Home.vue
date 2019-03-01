<template>
  <div class="home">

    
  <div id="haut">
    <img  id="wallpaper" src="@/assets/images/IMG/work_pack_white-01.png" alt="bureau" role="img">
    
    <div id="alignement">
    <article class="premier">
      <h1>S'entraider pour mieux
        <br>avancer
      </h1>
      <h2>Les associations vers la voie du
        <br>numerique
      </h2>
    </article>

    <article id="inscription">
      <h3>
        <a href="#" role="navigation">Inscription</a>
      </h3>
      <h4>C'est gratuit !</h4>
    </article>
    </div>

</div>

    <ul class="images">
      <li>
        <img class="apiterra" src="@/assets/images/logo/APITERRA.png" alt="logo APITERRA">
      </li>
      <li>
        <img class="capgemini" src="@/assets/images/logo/Cap.png" alt="logo CapGemini">
      </li>
      <li>
        <img
          class="emmaus-connect"
          src="@/assets/images/logo/emmaus-connect.png"
          alt="logo emmaus-connect"
        >
      </li>
      <li>
        <img class="innovavenir" src="@/assets/images/logo/innovavenir.png" alt="logo innovavenir">
      </li>
      <li>
        <img class="univ_Rennes" src="@/assets/images/logo/Univ_Rennes.png" alt="Univ_Rennes">
      </li>
      <li>
        <img
          class="univ_toulouse"
          src="@/assets/images/logo/toulouse.png"
          alt="logo université de toulouse"
        >
      </li>
    </ul>

    <ul class="bas">
      <li class="import">
        <a href="#">
          <img src="@/assets/images/IMG/users.svg">
          <h3 class>Se reunir</h3>
        </a>
      </li>
      <li class="import">
        <a href="#">
          <img src="@/assets/images/IMG/calendar-plus.svg">
          <h3>Trouver des evenements
            <br>au coeur du numerique
          </h3>
        </a>
      </li>
      <li class="import">
        <a href="#">
          <img src="@/assets/images/IMG/meteor.svg">
          <h3>Participer à des
            <br>projets innovants
          </h3>
        </a>
      </li>
    </ul>
    <div id="container_barblue">
      <h2 class="title">S'entraider pour mieux avancer</h2>
      <img class="barblue" src="@/assets/images/IMG/forme.png">
    </div>
  </div>
</template>




 <style lang="scss" scoped>


>
#haut{
  display: flex;
  flex-direction: column;
  
}
#alignement{
  display: flex;
  flex-direction: column;
  position: relative;
}
    .premier{display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    font-size: 49px;
    font-weight: 600;
    color: #515050;
    position: absolute;
    bottom: 690px;
    }
.premier h1 {
  font-size: 49px;
  font-weight: 600;
}
.premier h2 {
  font-size: 38px;
  font-weight: 300;
}
#inscription {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    text-align: center;
    position: absolute;
    bottom: 500px;

}
#inscription h3 {
  width: 285px;
  height: 105px;
  border-radius: 14px;
  background-color: #f0f3f8;
}

#inscription h4 {
  text-align: center;
  width: 285px;
  height: 23px;
  font-size: 19px;
  font-weight: 300;

  color: #737373;
}

.images {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.apiterra {
  width: 100%;
}
.capgemini {
  width: 100%;
}
.emmaus-connect {
  width: 100%;
}
.innovavenir {
  width: 100%;
}
.univ_Rennes {
  width: 100%;
}
.univ_toulouse {
  width: 100%;
}

.bas {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100px;
  text-decoration: none;
  align-items: center;
  text-align: center;
}

.bas img {
  height: 100px;
  width: 20%;
}

.bas a {
  text-decoration: none;
}

#container_barblue {
  display: flex;
  height: 234px;
  justify-content: flex-end;
  margin-top: 81px;
  position: relative;
  align-items: center;
  margin-bottom: 368px;
}
#container_barblue .title {
  font-size: 39px;
  font-weight: 600;
  color:white;
  align-items: center;
  position: absolute;
  right: 0;
  z-index: 1;
  right: 45px;
}
#container_barblue .barblue {
  justify-content: flex-end;
  width: 70%;
  position: absolute;
  z-index: 0;
  top: 0;
}

#wallpaper {
    display: block;
    background-size: cover;
    background: red;
    color: darkred;
    height: 100%;
    max-height: 2086px;
    width: 100%;
    max-width: 1440px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
</style>

<!--<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>--->
