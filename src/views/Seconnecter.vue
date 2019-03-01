<template>
  <div id="connecter" role="main">
    <img id="fondconnexion" src="@/assets/images/Redimension.jpg" alt="bureau" role="img">

    <form id="contact" action method="post">
      <div class="container">
        <h1 class="title">Connectez vous à votre compte</h1>

        <input class="input" placeholder="  Veuillez entrer votre adresse mail Capgemini  "  type="email" required>
        
        <input class="input" placeholder="  Veuillez entrer votre mot de passe  " type="tel" required>

        <div id="souvenir">
          <input type="checkbox" class="souvenir" name="souvenir" checked>
          <label for="souvenir">Se Souvenir de moi</label>
        </div>

        <button id="submit">
          <span>Connexion</span>
        </button>
        
        <span id="links">
          <a href="#">S'inscrire</a>
          <a href="#">Mot de passe oublié ?</a>
        </span>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>

#connecter {
  display: flex;
  position: relative;
}

#fondconnexion {
  background-size: cover;
  max-height: 100%;
  max-width: 100%;
  top: 42px;
  position: relative;
}

#contact {
  display: flex;
  position: relative;
  left: -200px;
  flex-direction: column;
  padding: 67px 75px 49px 75px;
  width: 100%;
  max-width: 699px;
  height: 685.6px;
  opacity: 0.94;
  border-radius: 55px;
  box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.15);
  background-color: #ffffff;
}

#contact, #contact a {
  color: #444444;
}

#contact .container {
  opacity: 1;
}

#contact .title,
#contact .input {
  width: 100%;
}

#contact .title {
  font-size: 19.8px;
  font-weight: normal;
  letter-spacing: 1.7px;
  margin-bottom: 68px;
}

#contact .input {
  height: 90.7px;
  border-radius: 2.2px;
  border: none;
  padding-left: 36.5px;
  background-color: #e5e9ed;
  &:first-of-type {
    margin-bottom: 24.3px;
  }
  &:last-of-type {
    margin-bottom: 35.3px;
  }
}

input[type="checkbox"] {
  width: 15.6px;
  height: 15.4px;
  background-color: #ffffff;
}

#souvenir {
  display: flex;
  width: 100%;
  max-width: 160px;
  justify-content: space-between;
  margin-bottom: 62.4px;
}

#submit {
  height: 88.7px;
  width: 100%;
  border-radius: 6px;
  background-color: #0078e1;
  color: white;
  margin-bottom: 48.3px;
  cursor: pointer;
}


label {
  font-size: 13.1px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
}

#links {
  display: flex;
  justify-content: space-between;
  max-width: 219px;
  font-size: 13.1px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  margin: 0 auto;
}

</style>


<script>
// @ is an alias to /src

export default {
  name: "connecter"
};
</script>