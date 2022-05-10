<template>
  <div> 
     <nav-bar/> 
    <div class="market">
        <img :src="Fishes" class="fishes"/>
         <div class="text"> 
          <span>De 
            <br/> 
            LA MER 
             <br/>
               à
              <br/> 
                L'ASSIETTES </span>
        </div>
      <div class="box">
       <div class="ext_con">
           <div class="int_cont"> 
              <span class="POISSONIER">POISSONIER</span> 
              <p>Jean-Pière(Maraicher)</p> 
              <p class="gap">Rue de Marché (75012)</p> 
             </div> 
         </div> 
         <div class="schedule" v-for="(value, name) in schedule" :key=value>
             {{ name }}  <span class="timing">{{ value }}</span> 
        </div>
        
        </div>
    <div class="Promos">
        <p class="promo">Promos du moment</p> 
     <div v-if="edit===true"><the-basics  :Switch="Switch"/> </div>
      
    </div>
    <side-bar-menue  :show="show"/>
  </div>
  <div v-if="showMore===true">
    <div class="blur" ><selected-product /> </div>
</div>
</div>
</template>


<script>


import NavBar from "./NavBar.vue"
import Fishes from "../assets/fishBackground.png"
import schedule from "../../public/schedule.json"
import SideBarMenue from "./SideBarMenue.vue";
import SelectedProduct from "./SelectedItem.vue"
import TheBasics from "./TheBasics.vue"


export default {
components:{
 SideBarMenue ,
 TheBasics,
 NavBar,
 SelectedProduct,
},
data(){
  return{  
   Fishes,
   edit:false,
   showMore: false,
   schedule,
   
  }
} ,
 methods:{
      show:function(){
        this.edit = !this.edit
        
      },
      Switch: function(){
       this.showMore = !this.showMore
     
     }
     
    }
}
</script>
<style scoped  >
.blur{
position: absolute;
width: 1542px;
height: 1475px;
left: -9px;
top: -71px;
background: rgba(196, 196, 196, 0.5);
backdrop-filter: blur(15px);
}
.box{
 position: absolute;
 width: 25%;
 height: 80%;
 left: 287px;
 top: 50px;
 color:white;
border-radius: 4px;
background: rgba(249, 245, 245, 0.25);
box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5), inset 25.8333px -25.8333px 25.8333px rgba(194, 194, 194, 0.1), inset -25.8333px 25.8333px 25.8333px rgba(255, 255, 255, 0.1);
backdrop-filter:  blur( 9.5px );
-webkit-backdrop-filter: blur( 9.5px );

}
.market{
  position: absolute;
  width:100%;
  height: 70%;
  top:82px;
  left:-1px;
  background-color: black;
  box-shadow: inset 112px -112px 112px rgba(0, 0, 0, 0.171), inset -112px 112px 112px rgba(255, 255, 255, 0.171);

}

.text{
  position: absolute;
width: 30%;
height: 40%;
left:48%;
top: 15%;
display:table-row;
font-family: 'Poppins';
font-style: normal;
font-weight: 800;
font-size: 64px;
line-height: 83px;
letter-spacing: -0.055em;
color: #FEFAE5;
}
.POISSONIER{
  position : absolute;
  padding-top:0.55rem;
  margin-left :12px;

}
.ext_cont{
  position: relative;
  bottom:45px;
}
.int_cont { 
    padding: 40px 30;
    margin-left :22px;
    justify-content: space-between;
    max-height: 50px;

}
.int_cont p{
  position: relative;
  left:2%;
top:2.55rem;

}
.gap{
  margin-top: -15px;
  margin-left:15px;
  margin-bottom:44px;
}
.schedule{
  position: relative;
    top:5%;
    margin-top:5%;
    margin-left:50px;  
    display: flex;
    justify-content: space-between;
    max-height: 86px;
 }
.timing{
    
    margin-right:55px;
 }
.fishes{
 height:100%; 
 width:100%; 

}
.promo{
position: absolute;
width: 558px;
height: 24px;
left: 287px;
top: 625px;

font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 129.5%;
/* or 41px */

letter-spacing: -0.025em;

color: #3A3244;

}


</style>