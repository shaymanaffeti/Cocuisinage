<template>
    <div class="test1"> 
      <div class="test" v-for="item in items" :key="item.id">
       <div class="card" @click="this.Switch()" >
         <img :src="item.picture"  class="image"/>
          <span class="name">
            {{ item.name}}
          </span>
          <div class="group5">
            <img :src="stars"  /> <p>4.1</p>           
          </div>
          <span class ="price"> {{item.price}}</span>
          <ul class="wrapper">
            <li class="icon plus">
              <span class="tooltip">ajouter</span>
                <span>+</span>
            </li>
          </ul>           
      </div>           
     </div>
    </div>
     <div class="parent">
      <div class="child">Voir Plus</div>
  </div>     
</template>
<script>
import items from "../../public/fishes.json"

import stars from "../assets/stars.png"

export default {
   data(){
       return{
       items,
       stars,
      
       }
   },

  props:{
   
    Switch :{ type : Function},
    
  },
   
  
}
</script>
<style >

.test1{ 
position:absolute;
display: flex;
flex-direction: row;
align-items: center;
justify-content:center;
top:721px;
left:209px;
}

.test{
margin:20px 0px ; 
width: 252px;
height: 353px;
margin-left:45px;

}


.card{
width: 252px;
height: 353px;
left: 281px;
top: 755px;
background-color: rgb(255, 251, 251);
box-shadow: 5px 20px 30px -14px rgba(0, 0, 0, 0.1);

}
.name{
width: 182px;
height: 71.94px;
left: 29px;
top: 222px;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 106.5%;
color: #3A3244;
}
.image{
width: 251px;
height: 182px;
right: 2px;
top: 1px;
background: #FEFEFE;
border-radius: 27px;
}

.group5{
width: 69px;
height: 12.7px;
left: 28px;
top: 244.13px;
}
.group5 p {
position: relative;
width: 32px;
height: 14.81px;
left: 86px;
top: -27.83px;
font-family: 'Poppins';
font-style: normal;
font-weight: 300;
font-size: 13px;
line-height: 106.5%;
/* or 14px */
color: #000000;
}
.price{
  position: relative;
width: 182px;
height: 33px;
left: 9px;
top: 71px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 106.5%;
color: #3A3244;
}
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");


.wrapper .icon {
  position: relative;
  background: #ffffff;
  border-radius: 50%;
  padding: 15px;
  left: 155px;
  top:15px;
  width: 10px;
  height: 15px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .tooltip {
  position: absolute;
  top: 0;
  font-size: 14px;
  background: #ffffff;
  color: #ffffff;
  padding: 5px 8px;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .tooltip::before {
  position: absolute;
  content: "";
  height: 8px;
  width: 8px;
  background: #ffffff;
  bottom: -3px;
  left: 50%;
  transform: translate(-50%) rotate(45deg);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .icon:hover .tooltip {
  top: -45px;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.wrapper .icon:hover span,
.wrapper .icon:hover .tooltip {
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
}

.wrapper .plus:hover,
.wrapper .plus:hover .tooltip,
.wrapper .plus:hover .tooltip::before {
  background: #1877F2;
  color: #ffffff;
}
.parent{
position:absolute;
width: 169px;
height: 35px;
left: 199px;
top: 1098px;
background-color: #4F95FF;
}
.child{
position:absolute;
width: 70px;
height: 24px;
left: 58px;
top: 9px;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 129.5%;
text-transform: capitalize;
color: #ffffff;
}
</style>