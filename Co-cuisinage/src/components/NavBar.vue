<template>
    <div class="nav">
     <img :src="fishIcon" class="icon" />
        <span class="title">Poissonier</span>
          <ul  class="tabs">
            <li>acceuil</li>
            <li class="selected">Boutique</li>
            <li>Le Blog</li>
            <li>Espace Perso</li>
            <li>A Propos</li>
          </ul>     
          
          <img :src="searchIcon" class="searchIcon">
          <img :src="userIcon" class="userIcon">
          <img :src="basket" class="basket">
        
       
    </div> 
    
</template>
<script>
import fishIcon from "../../public/fish_icon.png"
import userIcon from "../assets/Group 2.png"
import searchIcon from "../assets/Group 4.png"
import basket from "../assets/Vector.png"

export default {
    data(){
     return{
    fishIcon ,
    userIcon,
    searchIcon,
    basket
  }
} 
}
</script>
<style scoped>

.nav{
position: relative;
width:100%;
height: 12.88%;
background-color: #4F95FF;
}

.title{
 position: absolute;
left: 4.33%;
top: 40%;
color:#FEFAE5;
font-family: "cera-round-pro";
font-weight: 70em;
font-size: 1em;
line-height : 1.2em;
}
.icon{
  position: absolute;
  left: 2.33%;
  top:39%;
  width:2vw;
  height:3vh;
  transform: rotate(-30.37deg);
} 
.tabs{
  position: absolute;
  top: 50%;
  left: 55%;
  width:54%;
  align-items: center;
  color: #f6f4e6;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.tabs li {
  height:3vh;
  padding: 2.58%;
  padding-bottom: 4.28%;
  padding-top: 1.28%;
  font-size: 1em;
  font-weight: 50;
  display: inline-block;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
/* .tabs .selected :hover::before{
   opacity: 1;
  visibility: visible;
  pointer-events: auto;
background: #FEFAE5 ;
color: #4F95FF;

} */

.basket{
position: absolute;
max-width: 1.8%;
height: 23%;
left:90.78%;
bottom: 1.8rem;
/* padding-left:0.1rem; */
} 
.searchIcon{
position: absolute;
max-width: 2.1%;
height: 34%;
bottom: 1.53rem;
left:85%;

}
.userIcon{
  position: absolute; 
  left:88%;
  bottom: 1.3rem;
  max-width: 2%;
 height: 35%;
} 
.selected{

color: #4F95FF;
background:  #f6f4e6;
border-radius: 2px;
}

</style>