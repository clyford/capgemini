<template>

    <div class="rectangles">

       <img  id="salariesconnexion" src="@/assets/images/wonderful_world.jpg" alt="bureau" role="img">
        <form id="formcontactes" method="post">
          
            
              <h1 class="titre"> Rejoignez notre Communaute</h1>
              <p class="slogan">Nous utiliserons ces informations pour vous proposer des évènements et des projets près de chez vous.</p>
              <input class="nom" placeholder="  Votre Nom  "  required>
              <input class="prenom" placeholder="  Votre prenom  "   required>
              <input placeholder="  Votre pseudo  "  required>
              <input placeholder="  Votre adresse mail Capgemini  " type="email"  required>
              <input placeholder="  mot de passe  " required>
              <input placeholder="  Veuillez confirmer votre mot de passe  " required>
              <input placeholder="  Votre ville  "  required>
              <input placeholder="  Votre entité Capgemini  "  required>
              <button name="submit" type="submit" id="newcontactsubmit" data-submit="...Sending"><span>Connexion</span></button>
             
            
        </form>
        
        
    </div>
    


</template>

<style lang="scss" scoped>
.rectangles{
  display: flex;
  position: relative;
}
#salariesconnexion{
  background-size: cover;
  width: 2400px;
  height: 1800px;
  max-height: 100vh;
  max-width: 100%;
  position: relative;
 
  
}
#formcontactes{
 display: flex;
    position:relative;
    width: 720px;
    height: 800px;
    flex-direction: column;
     background-color: rgba(255, 255, 255, 0.94);
    margin-left: -720px;
    margin-bottom: 88px;
    padding-top: 50px;
    padding-left: 90px;
    padding-right: 90px;
    
}
  
.titre{
color: #444444;
font-size: 19.8px;
} 
.slogan {
  color: #444444;
  height: 72px;
  width: 503px;
  font-size: 19.8px;
  margin-bottom: 35px;
}
input{
height: 65px;
width: 511px;
margin-bottom: 36px;
}

/*
pour case nom prenom cote a cote 
.nom{
  color: red;
  
  width: 200px;
  margin-bottom: 36px;
  
}
 .prenom{
     color: blue;
    width: 200px;
    height: 65px;
    top: 50px;
    top: 10px;
    position: relative;
    top: -73px;
    left: 308px;
    margin-bottom: 36px;
}
*/

button{
height: 65px;
width: 511px;
color:white ;
background-color: #0078e1;
border: none;

}


</style>


//<script>
// @ is an alias to /src

//export default {
//  name: 'inscrire'

//}
//</script>

<script>
export default {
  name: 'incrire',
  computed: {

  data() {
  },
  },
  methods: {
    displayMessage(msg, status) {
      if (!msg) return console.error(`the message is required !`);
      const possibleStatuses = ["success", "warning", "error"];
      if (possibleStatuses.includes(status)) {
        this.msgCls = status;
        this.msg = msg;
      } else console.warning(`${status} is not a valid css class for messages`);
    },
    createSalaried() {
      // this.user.id = Date.now();
      // this.$store.commit("addUser", this.user);
      this.$store.dispatch("addSalaried", this.salaried)
      .then(res => {
        this.displayMessage("new salaried has been created", "success");
      })
      .catch(res => {
        this.displayMessage("error during salaried creation", "error");
      })
    },
    handleSubmit(e) {
      e.preventDefault();
      if (!this.user.name || !this.user.lastname) {
        return this.displayMessage("Sorry, name AND lastname are required", "warning");
      }
      if (this.$route.params.id) this.updateUser();
      else this.createUser();
    }
  },
  props: ["title"]
};
</script>
