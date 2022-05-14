<template>
      <div class="market"> 

     <nav-bar :showCart="showCart"/> 
     
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
            <span class="POISSONIER">POISSONIER</span> 
              <div class="int_cont"> 
              <p>Jean-Pière(Maraicher)</p> 
              <p class="gap">Rue de Marché (75012)</p> 
            </div>        
         <div class="schedule-content" v-for="(value, name) in schedule" :key=value>
          <div > {{ name }}  <span class="timing">{{ value }}</span> </div> 
         </div>
      </div>

        <p class="promo">Promos du moment</p> 
        <div class="sidebar"><side-bar-menue /></div> 
        <div><the-basics  :Switch="Switch"/> </div>    
 </div>
  <div v-if="showMore"   class="target">
    <selected-product :show="Switch" /> 
   </div>
   
   <div v-if="open" class="pannel">    
      <shopping-cart :cart="showCart" />
   </div>
</template>


<script>


import NavBar from "./NavBar.vue"
import Fishes from "../assets/fishBackground.png"
import schedule from "../../public/schedule.json"
import SideBarMenue from "./SideBarMenue.vue";
import SelectedProduct from "./SelectedItem.vue"
import TheBasics from "./TheBasics.vue"
import ShoppingCart from "./ShoppingCart.vue"


export default {
components:{
 SideBarMenue,
 TheBasics,
 NavBar,
 SelectedProduct,
 ShoppingCart
},
data(){
  return{  
    Fishes,
    showMore: false,
    schedule,
    open:false, 
  }
} ,
 methods:{  
      Switch: function(){
       this.showMore = !this.showMore   
     },
     showCart(){
      this.open = !this.open
    }
   },
   
}
</script>
<style scoped  >

.market{
position: absolute;
width:100%;
height: 100%;
}
.fishes{
position: absolute;
top:12.8%;
width:100%;
height:60%;
box-shadow: inset 112px -112px 112px rgba(0, 0, 0, 0.171), inset -112px 112px 112px rgba(255, 255, 255, 0.171);

}
.text{
position: absolute;
width: 25%;
max-height:25%;
left:47%;
top: 20%;
display:table-row;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 3rem;
line-height: 1.5em;
letter-spacing: -0.055em;
color: #FEFAE5;
}
.box{
 position: relative;
 width: 23%;
 min-width:20%;
 height: 50%;
 max-height:70%; 
 left: 22%;
 top:5%;
 color:white;
border-radius: 1.5%;
background: rgba(249, 245, 245, 0.25);
box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5), inset 25.8333px -25.8333px 25.8333px rgba(194, 194, 194, 0.1), inset -25.8333px 25.8333px 25.8333px rgba(255, 255, 255, 0.1);
backdrop-filter:  blur( 9.5px );
-webkit-backdrop-filter: blur( 9.5px );

}
.POISSONIER{
  position : absolute;
  padding-top:0.55rem;
  margin-left :2%;

}

.int_cont { 
    position: absolute;
    top:5%;
    left :13%;
    justify-content: space-between;
    /* height: 50%; */
} 
.int_cont p{  
  left:2%;
  padding-top:0.85rem;
}
.gap{
  margin-top: -15px;
  margin-left:15px;
  margin-bottom:44px;
}
 .schedule-content{
   position: relative;
   min-width:70%;
   top:27%;
   left:15%;
   padding-top:0.5rem;
   font-family: 'Poppins';
   font-style: normal;
   font-weight: 400;
  font-size: 13px;
  line-height: 1em;
 }
.timing{
  position:absolute;
  left:45%;
 }

.promo{
  position:absolute;
  top:82%;
  left:10%;
 max-width: 16vw;
height: 14%;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
 /* @media screen and (min-width: 820px) and (max-width: 940px) { */
    font-size: 2em;
 
line-height: 1.5em;
letter-spacing: -0.025em;
color: #3A3244;

}


</style>