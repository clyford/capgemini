<template>
  <div class="evenements">
          <section id="presentation">

          

          <div id="evenements_candidats">
            <h2 class="titreevenement">Evénements candidats,
            <br>événements clients :</h2>
           <span class="titreevenementsuite">nous rapprocher de vous</span></div>

           <img id="imagescalendar" src="@/assets/images/calendar.png" alt="calendrier">

          


        </section>

          <div id="calendrier">
                  <section id="bareventsearch">
                        <article>
                          <h3 class="chercher">Je cherche </h3>
                          <select class="event">
                            <option value="Evenement">--Evenement--</option>
                            <option value="Projet">Projet</option>
                            
                          </select>
                        </article>

                        <article>
                            <h3 class="lieu">Lieu </h3>
                            <select class="event">
                              <option value="paris">Paris</option>
                              <option value="Clamart">Clamart</option>
                              
                            </select>
                        </article>

                        <article>
                            <h3 class="le">Le </h3>
                            <select class="event">
                                <option value="Evenement">--Evenement--</option>
                                <option value="Projet">Projet</option>
                              
                            </select>
                        </article>

                          <div id="icone">
                               <div id="buttonsearch">
                                 <img class="loupe" src="@/assets/images/IMG/search.svg" alt="">
                                <input class="bouton" type="button" required>
                                
                                </div>
                          </div>
                </section>




                    <h2 class="alaune">Nos événements à la une</h2>
                    <section class="ateliers">
                            <div class="blocuno">
                                  <img class="code" src="@/assets/images/IMG/Vignette-Cap-sur-le-Code.jpg" alt="">
                                  <input class="rechercher" type="button" value="education">
                                  <h2 class="atelierscollege">Ateliers collège</h2>
                                  <h3>
                                  <img class="endroit" src="@/assets/images/IMG/map-marker-alt.svg" alt=""> Suresnes - Paris 
                                  </h3>
                                  <h4>
                                    <img class="calendrier" src="@/assets/images/IMG/calendar-plus.svg" alt=""> 19 février 2019
                                  </h4>
                                  <h5>
                                    Event information
                                    <img src="@/assets/images/IMG/star.svg" alt="">
                                  </h5>
                            </div>

                            <div class="blocdos">
                              <img class="code" src="@/assets/images/IMG/Vignette-Cap-sur-le-Code.jpg" alt="">
                              <input class="rechercher" type="button" value="education">
                              <h2 class="atelierscollege">
                                Ateliers libres
                              </h2>
                              <h3>
                              <img class="endroit" src="@/assets/images/IMG/map-marker-alt.svg" alt=""> Suresnes - Paris 
                              </h3>
                              <h4>
                                <img class="calendrier" src="@/assets/images/IMG/calendar-plus.svg" alt=""> 25 mars 2019
                              </h4>
                              <h5>
                                Event information
                                <img src="@/assets/images/IMG/star.svg" alt="">
                              </h5>
                            </div>

                            <div class="bloctres">
                                  <img class="code" src="@/assets/images/IMG/Vignette-Cap-sur-le-Code.jpg" alt="">
                                  <input class="rechercher" type="button" value="education">
                                  <h2 class="atelierscollege">
                                    Ateliers collège
                                  </h2>
                                  <h3>
                                  <img class="endroit" src="@/assets/images/IMG/map-marker-alt.svg" alt=""> Suresnes - Paris 
                                  </h3>
                                  <h4>
                                    <img class="calendrier" src="@/assets/images/IMG/calendar-plus.svg" alt=""> 13 avril 2019
                                  </h4>
                                  <h5>
                                    Event information
                                    <img src="@/assets/images/IMG/star.svg" alt="">
                                  </h5>
                                  </div>
                          </section>
          </div>

          <h2 class="autreevent">Nos événements</h2>
          <section class="lastevent">
            <div class="Rectanglegris">
              
              <h2 class="nettoyage">Nettoyage de plages et rivières</h2>
              <div class="gris">
              <h3 class="france"><img class="endroit" src="@/assets/images/IMG/map-marker-alt.svg" alt=""> Suresnes - Paris</h3>
              <h4 class="tobe"> <img class="calendrier" src="@/assets/images/IMG/calendar-plus.svg" alt=""> To Be Determined</h4>
              <h5 class="infoevent">Event information</h5>
              </div>
            </div>

            <div class="Rectanglegris">
              
              <h2 class="informatique">Bases de l’informatique</h2>
              <div class="secondrectangle">
              <h3 class="france"><img class="endroit" src="@/assets/images/IMG/map-marker-alt.svg" alt=""> Suresnes - Paris</h3>
              <h4 class="tobe"> <img class="calendrier" src="@/assets/images/IMG/calendar-plus.svg" alt=""> To Be Determined</h4>
              <h5 class="infoevent">Event information</h5>
              </div>
            </div>
            
            <div class="Rectanglegris">
              
              <h2 class="apicole">Club apicole</h2>
              <div class="thirdrectangle">
              <h3 class="france"><img class="endroit" src="@/assets/images/IMG/map-marker-alt.svg" alt=""> Suresnes - Paris</h3>
              <h4 class="tobe"> <img class="calendrier" src="@/assets/images/IMG/calendar-plus.svg" alt=""> To Be Determined</h4>
              <h5 class="infoevent">Event information</h5>
              </div>
              </div>
            <a class="other_event" href=""> <h3 > Afficher d’autres événements</h3></a>
          </section>
  </div>
</template>


<style lang="scss" scoped>
.evenements{
  max-width: 100%;
  max-height: 100%;
  width: 1440px;
  height: 3035px;


}
#presentation{
  display: flex;
  flex-direction: row;
  width: 100%;
}
#imagescalendar{
width: 50%;
max-width: 724px;
max-height: 660px;




}
#evenements_candidats{
  margin-top: 200px;
  width:50%;
  height: 50%;
  font-size: 35px;
  max-width: 706px;
  max-height: 177px;
  color: #515050;
  
}


#evenements_candidats .titreevenementsuite {
  font-weight: 300;
}

#bareventsearch {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
 
  max-width: 100%;
  width: 1231px;
  height: 213px;
  background-color: #e5ebfe;
  
  margin-left: 103px;
  margin-right: 103px;
  margin-top: 21px;
  padding-left: 160px;
}
.event{
     width: 271px;
    height: 48px;
    border-radius: 8px;
    background-color: #ffffff;
    margin-right: 48px;

}



#icone{
width:25%;
display: flex;
}
#buttonsearch{
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 1px;
  margin-bottom: 1px;
  background-color: green;
}
.bouton{
 width: 50px;
  height: 50px;
  background-color: #fc9d4f;
  cursor: pointer;
  
}
.loupe{
  width: 40px;
  height: 40px;
  position: absolute;
  right: 1px;
  bottom: 3px;
  z-index: 1;
  cursor: pointer;
}
/************************************************************event a la une*********************************************************************************/
 .alaune{
  width: 637px;
  height: 59px;
  font-family: Montserrat;
  font-size: 49px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #515050;
  margin-left: 103px;
  margin-top: 65px;
  margin-bottom: 55px;
}
.ateliers{
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100vh;
  margin-right:105px ;
  margin-right:105px ;
  margin-bottom: 132px;
}

.ateliers img{
  width:15px;
  height: 15px;
}
.ateliers input{
  width: 184px;
  height: 51px;
  background-color: #fc9d4f;
  border: none;
  margin-bottom: 50px;
  cursor: pointer;

}
.ateliers .blocuno{
  display: flex;
  flex-direction: column;
  align-items:center;
  width: 365px;
  height: 549px;
  box-shadow: 0 2px 4px 0 rgba(121, 121, 121, 0.5);
  background-color: white;
  border: solid 1px #ebebeb;
   & > .code {
  width: 200px;
  height: 200px;
   }

}
.ateliers .blocdos{
  display: flex;
  flex-direction: column;
  /*justify-content: center;*/
  align-items:center;
  width: 365px;
  height: 549px;
  box-shadow: 0 2px 4px 0 rgba(121, 121, 121, 0.5);
  background-color: white;
  border: solid 1px #ebebeb;
   & > .code {
  width: 200px;
  height: 200px;
   }

}

.ateliers .bloctres{
  display: flex;
  flex-direction: column;
  align-items:center;
  width: 365px;
  height: 549px;
  box-shadow: 0 2px 4px 0 rgba(121, 121, 121, 0.5);
  background-color: white;
  border: solid 1px #ebebeb;
   & > .code {
  width: 200px;
  height: 200px;
   }
}

.atelierscollege {
  width: 262px;
  height: 40px;
  font-size: 33px;
  font-weight: 600;
  color: #515050;
  margin-bottom: 32px;

}


.endroit{
        width: 365px;
        height: 549px;
        box-shadow: 0 2px 4px 0 rgba(121, 121, 121, 0.5);
        border: solid 1px #ebebeb;

      }
 .calendrier{
   margin-top: 25px;
  font-size: 25px;
}
.blocuno h5{
  background-color: red;
  margin-top: 60px;
  width: 365px;
  height: 50px;
  box-shadow: 0 2px 4px 0 rgba(121, 121, 121, 0.5);
  border: solid 1px #ebebeb;
}
.blocdos h5{
  background-color: red;
  margin-top: 60px;
  width: 365px;
  height: 50px;
  box-shadow: 0 2px 4px 0 rgba(121, 121, 121, 0.5);
  border: solid 1px #ebebeb;
}
.blocuno h5{
  margin-top: 60px;
  width: 365px;
  height: 50px;
  box-shadow: 0 2px 4px 0 rgba(121, 121, 121, 0.5);
  border: solid 1px #ebebeb;
  top: 50px;
  background-color: rgba(35, 117, 228, 0.5);
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
}
.blocdos h5{
  margin-top: 60px;
  width: 365px;
  height: 50px;
  box-shadow: 0 2px 4px 0 rgba(121, 121, 121, 0.5);
  border: solid 1px #ebebeb;
  top: 50px;
  background-color: rgba(35, 117, 228, 0.5);
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
}
.bloctres h5{
  margin-top: 60px;
  width: 365px;
  height: 50px;
  box-shadow: 0 2px 4px 0 rgba(121, 121, 121, 0.5);
  border: solid 1px #ebebeb;
  top: 50px;
  background-color: rgba(35, 117, 228, 0.5);
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
}
.blocuno h5 img{
 
  margin-left: 150px;
  width: 25px;
  height: 25px;
  margin-top: 10px;
}
.blocdos h5 img{
 
  margin-left: 150px;
  width: 25px;
  height: 25px;
  margin-top: 10px;
}
.bloctres h5 img{
 
  margin-left: 150px;
  width: 25px;
  height: 25px;
  margin-top: 10px;
  
}

/******************************************************nos evenements********************************************************************************/
.autreevent {
  width: 425px;
  height: 59px;
  font-family: Montserrat;
  font-size: 49px;
  font-weight: 600;
  color: #515050;
  margin-bottom: 54px;
}

.Rectanglegris {
  display: flex;
  flex-wrap: wrap;
  width: 1231px;
  height: 200px;
  box-shadow: 0 2px 4px 0 rgba(121, 121, 121, 0.5);
  background-color: #fcfafa;
  margin-bottom:46px ;
  margin-left: 100px;

}


.gris{
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  flex-wrap: wrap;
  justify-content: space-between;
}
.gris .france{
  font-size: 18px;
  color: #515050;
  font-family: Montserrat;
  margin-left: 10px;
  font-weight: 500;
  &> .endroit{
      width: 20px;
      height: 20px;
  }
}

.gris  .tobe{
        font-size: 18px;
        font-weight: 500;
        color: #515050;
        font-family: Montserrat;
        margin-left: 70px;
        &> .calendrier{
                 width: 20px;
                 height: 20px;
                 
        }
      }

 .infoevent{
  width: 166px;
  height: 22px;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
  color: #515050;
  margin-left: 90px;
 }
/************************************second rectangle gris********************************************/
.secondrectangle{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
}
.secondrectangle .france{
  font-size: 18px;
  color: #515050;
  font-family: Montserrat;
  margin-left: 89px;
  font-weight: 500;
  &> .endroit{
      width: 20px;
      height: 20px;
  }
}

.secondrectangle  .tobe{
        font-size: 18px;
        font-weight: 500;
        color: #515050;
        font-family: Montserrat;
        margin-left: 70px;
        &> .calendrier{
                 width: 20px;
                 height: 20px;
                 
        }
      }

.secondrectangle .infoevent{
  width: 166px;
  height: 22px;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
  color: #515050;
  margin-left: 90px;
 }
 /************************************third rectangle gris********************************************/
.thirdrectangle{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
}
.thirdrectangle .france{
  font-size: 18px;
  color: #515050;
  font-family: Montserrat;
  margin-left: 89px;
  font-weight: 500;
  &> .endroit{
      width: 20px;
      height: 20px;
  }
}

.thirdrectangle  .tobe{
        font-size: 18px;
        font-weight: 500;
        color: #515050;
        font-family: Montserrat;
        margin-left: 70px;
        &> .calendrier{
                 width: 20px;
                 height: 20px;
                 
        }
      }

.thirdrectangle .infoevent{
  width: 166px;
  height: 22px;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
  color: #515050;
  margin-left: 208px;
 }
 .nettoyage{
 
display: relative;
text-align: center;
  
 }


 .other_event{
  text-decoration-color:#2375e4;
  margin-bottom: 20px;
}

 .other_event h3{
  width: 598px;
  height: 48px;
  font-family: Montserrat;
  font-size: 39px;
  font-weight: 600;
  color: #515050;
  margin-left: 10px;
  margin-left: 464px;
  
}
</style>

<script>
// @ is an alias to /src


export default {
  name: 'evenements'

}
</script>