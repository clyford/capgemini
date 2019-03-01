<template>
  <div class="about">
    


    
     <div id="unique">
       <img id="proposconnexion"  src="@/assets/images/Capture.png" alt="bureau" role="img">
        <div id="propos">
  
            <h2>
                Notre plateforme à <br><span>votre service</span>
            </h2>
            <p>
              Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu'il n'y a rien d'embarrassant caché dans le texte. Tous les générateurs de Lorem Ipsum sur Internet tendent à reproduire le même extrait sans fin, ce qui fait de lipsum.com le seul vrai générateur de Lorem Ipsum. Iil utilise un dictionnaire de plus de 200 mots latins, en combinaison de plusieurs structures de phrases, pour générer un Lorem Ipsum irréprochable. Le Lorem Ipsum ainsi obtenu ne contient aucune répétition, ni ne contient des mots farfelus, ou des touches d'humour.
             
            </p>
      </div>
       
      
        
    </div>


     
   </div>
  
</template>

<style lang="scss" scoped>
#unique{
  display: flex;
}
#proposconnexion img{
  /*max-width: 1440px;*/
  /*max-height: 1594px;*/
  max-width:100%;
  max-height: 100%;
  background-size: cover;

}

#propos{
    
    display: flex;
    position: relative;
    flex-direction: column;
    justify-items: flex-start;
    margin-top: 300px;
    width: 40%;
    
}

#propos h2{
    margin-bottom: 34px;
    font-size: 24px;
    
  }
  #propos h2 span{
    color: #2375e4;
}
#propos p{
  
  font-size: 15px;
}



</style>

