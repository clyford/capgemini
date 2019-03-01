<template>
    <div>
        <header >


  
   <section id="logo_image" role="logo" alt="logo CapGemini">
     
      <img src="assets/images/lgo_final.png">
       <h3>Asso Cap<span>G</span>emini</h3>
   
   </section>

   <section id="bar">
    <nav role="navigation" >
        <a class="bar" href="#" alt="" role="navigation">Dashboard</a>
        <a class="bar" href="#" alt="" role="navigation">Comptes</a>
        <a class="bar" href="#" alt="" role="navigation">Mes évenements</a>
      
       </nav>  
    </section>
    <article class="second">
        <h2 class="naze">Nom Prenom</h2>
        <a class="car" href="#" alt="" role="navigation">Deconnexion</a>
    </article>

<fieldset class="field-container">
   
    
        

<button type="submit" class="flaticon"><img src="assets/images/IMG/search.svg"></button>
<input  placeholder="rechercher" type="search" name="q" aria-label="Search through site content">
</fieldset>
    
</header>

<main role="main">

<input  placeholder="rechercher" type="search" name="q" aria-label="Search through site content">
</main>





    </div>
</template>

<style lang="scss" scoped>

#bar {
   
    display: flex;
    /*justify-content: flex-end;*/
    right: 50px;
    margin-left: auto;
    margin-right: auto;
  max-width: 100%;
    width: 2437px;
  height: 182px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.35);
  background-color: #1f72e2;
   
    }


#logo_image{
    position: absolute;
    width: 30%;
    height: 150px;
    background-color: pink;
    margin: 32px;
    bottom: 35em;
}
#logo_image img{
    height: 200px;
}
#logo_image h3{
    background-color: brown;
    color: grey;
    font-size: 30px;
    position: absolute;
    top: 65px;
    right: 110px;
    font-family: "Montserrat",sans-serif;
}
#logo_image h3 span{
    color: orange;
}




.bar{
    flex-direction: column;
    width: 20%;
    
    /*height: 70px;*/
    background-color: green;
    /*align-items: baseline;*/
    /*justify-content: flex-end;*/
    /*margin: 32px;
    font-size: 15px;
    bottom: 30em;
    right: 100px;*/
    
    bottom: 37em;
    text-decoration: none;
    font-family: "Montserrat",sans-serif;
}
nav a:nth-child(1) {
    margin: 32px;
    
    right: 49em;
    position: absolute;
    font-size: 15px;
    background-color: yellow;
    
}
nav a:nth-child(2){
    margin: 32px;
   
    font-size: 15px;
    position: absolute;
    right: 39em;
    background-color: purple;
}
nav a:nth-child(3){
    margin: 32px;
    font-size: 15px;
    position: absolute;
    right: 29em;
    
    background-color: black;
}
.second h2 {
    background-color: chartreuse;
    color: white;
    position: absolute;
    font-size: 15px;
    bottom: 720px;
    left: 1200px;
    font-family: "Montserrat",sans-serif;
}
.second .car{
   position: absolute;
    left: 1350px;
    font-size: 15px;
    bottom: 720px;
    background-color: #2375e4;
    color: white;
    text-decoration: none;
    font-family: "Montserrat",sans-serif;
    
}

fieldset{
    position: absolute;
    height: 30px;
    width: 600px;
    
    top: 7px;
   left: 500px;
    border-radius: 6px;
    border: none;
}
input[type="search"]{
    background-color: white;
    position: absolute;
    height: 30px;
    width: 558px;
    border: none;
    border-radius: 6px;
    left: 1px;
   /* border-radius: 6px;*/
    
}
button[type="submit"]{
    background-color: white;
    position: absolute;
    left: 550px;
    height: 30px;
    width: 50px;
    border-radius: 6px;
    border: none;
}
button[type="submit"] img{
    height: 15px;
    width: 20px;
    /*color: white;
    background-color: white;*/
    
}
/*.flaticon::before{
    content: " clique ici";
    color: yellow;
}
.flaticon::after{ 
content:"trop tard";
color: black;}*/

.flaticon:hover {
    background: #dac7c7c4;
  }




</style>

<script>
export default {
  name: "MyDashboardnavbard",
  props: {
    msg: String
  }
};
</script>