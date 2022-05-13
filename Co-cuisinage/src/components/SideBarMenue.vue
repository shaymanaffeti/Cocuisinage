<template>
    
      <ul class="list">
          <div class="force-overflow"></div>
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

.list::-webkit-scrollbar-track
{
	box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #F5F5F5;
	border-radius: 10px;
}

.list::-webkit-scrollbar
{
	width: 10px;
	background-color: #F5F5F5;
}

.list::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	background :rgb(177, 184, 198);
} 
.list{
  position: absolute;
  width: 258px;
  height: 339px;
 
  background-color: rgb(255, 251, 251);
  box-shadow:rgb(255, 255, 255);
  -webkit-font-smoothing: antialiased;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 102.5%;
	overflow-y: scroll;
	overflow-x: hidden;
}
.list li {
  position: relative;
  list-style-type: none;
  padding-left: 2.5rem;
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