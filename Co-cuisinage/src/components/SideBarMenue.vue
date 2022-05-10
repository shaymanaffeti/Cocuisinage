<template>
    <div class="menu">
      <img :src="scroller" class="scroller" />
      <ul class="list">
        <li> Entrée</li>
        <li> Déssert</li>
        <li> Plat Principale</li>
        <li> Amuse Bouches</li>
        <li> Boissons</li>
        <li v-on:click="this.show()" class ="clicked"> <p>Les bases</p>  </li>
        <li> Les Fromages </li>
        <li> Sauces</li>
        <li> Boulangerie</li>
        <li> Snacks</li>
      </ul>
    </div>
</template>
<script>
import scroller from "../assets/Rectangle 83.png"

export default {
    data:function(){
      return{
        scroller,
      }
    },
    props: {
    show: { type: Function },
  },
   
}
</script>
<style scoped>
.menu{
 position: absolute;
width: 208px;
height: 439px;
left: 1155px;
top: 581px;
background-color: rgb(246, 246, 246);
box-shadow:rgb(255, 255, 255);
   
}
.scroller{
  margin-left:196px;
}
.list{
   -webkit-font-smoothing: antialiased;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 102.5%;
  margin-top: -141px;
  margin-left: -55px;
  
}
.list li {
  position: relative;
  list-style-type: none;
  padding-left: 2.5rem;
  /* margin-bottom: 0.5rem; */
  cursor: pointer;
  margin-bottom: 20px;
}

.list li:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: -2px;
    width: 5px;
    height: 11px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}
.clicked{
position: relative;
width: 183px;
height: 45px;
align-items: center;
left: 22px;
top: 1px;
color: white;
background: #4F95FF;
border-radius: 2px;
}
.clicked p{
  position: relative;
  top: 12px;
}
.clicked:focus{
 background: #4F95FF;
color: white;


}
</style>