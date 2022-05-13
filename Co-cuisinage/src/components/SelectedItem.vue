<template>

  <transition to=".target">
    <div class="modal" v-if="showModal=true">
        <div class="product">
         <img :src="closeIcon" class="closeIcon" @click="this.show()"  />
         <img :src="stats" class="stats">
         <p class="name">BONITE</p>
      <div class="report"> 
          <img :src="report" >
          <p>Les poissons et fruits de mer</p>
          <div class="stars"> 
            <img :src="Star" class="star">
            <img :src="Star" class="star">
            <img :src="Star" class="star">
            <img :src="Star" class="star">
           <img :src="WhiteStar" class="WhiteStar">  <p>4.1</p>
         </div>
        
       </div>
        <img :src="ProductImage" class="ProductImage"/>
    <div class="totalPrice">9$  <span>12$/KG</span> </div>
     
    <div class="controlQuantity">
     <input class="rectangle" />
        <img :src="minus" class="minus">
        <img :src="plusV" class="plusV">
        <img :src="minus" class="plusH">
        <div class="Buttoncontainer">
            <div class="button"> Ajouter</div>
        </div>
    </div>
  </div>
  
    </div>
  </transition>  
  
    
 

 
</template>


<script>
import ProductImage from "../assets/Bonite, crue 3.png"
import closeIcon from "../assets/Vector (2).png"
import stats from "../assets/stats.png"
import report from "../assets/Vector (1).png"
import minus from "../assets/Vector 14.png"
import plusV from "../assets/Vector 12.png"
import Star from "../assets/Star.png"
import WhiteStar from "../assets/Star 5.png"




 
export default {

   data(){
       return {
        ProductImage,
        closeIcon,
        report,
        stats,
        minus,
        plusV,
        Star,
        WhiteStar,
        ShowModal : true
       }
   },
   props:{ 
     show: { type : Function }
   }
    
   
}
</script>

<style scoped>
.modal{
position: absolute;
width: 100vw;
height: 200vh;
background: rgba(196, 196, 196, 0.5);
backdrop-filter: blur(10px);
}
.product{
position: absolute;
width: 75%;
height: 25%;
left: 15%;
top:8%;
background: #FFFFFF;
border-radius: 180px 4px 4px 180px;
}
.productImage{
position: absolute;
max-width: 20.6vw;
height:15vh;
left: 4%;
top: 5%;
background:"ProductImage";
transform: matrix(-0.91, 0.41, 0.41, 0.91, 0, 0);
}
.closeIcon{
position: absolute;
width: 2vw;
height: 4vh;
left: 94%;
top: 5%;
}
.stats{
position: relative;
left: 40.93%;
right: 52.01%;
top: 18.32%;
bottom: 86.91%;
width: 2.7vw;
height: 5.66vh;

}
.report{
position: absolute;
left: 41.5%;
right: 51.87%;
top: 35.01%;
bottom: 84.03%;

}
.report img {
width: 2.7vw;
height: 5.66vh;
}
.report p {
position: absolute;
width: 34vw;
height: 2vh;
left: 50%;
padding-left:0.6rem;
top:-1.33rem ;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 29px;
line-height: 1.5em;
color: #3A3244;
}

.controlQuantity{
position: absolute;
width: 10vw;
height: 5vh;
left: 78%;
top: 75%;
background-color: #4F95FF;
}
.rectangle{
position: absolute;
width: 5vw;
height:100%;
left: 26%;
top:2%;
background: #F8F6F5;
}
.minus{
position: absolute;
width: 0.3vw;
height: 4vh;
left: 12%;
top: 8%;
border: 2px solid #ffffff;
transform: rotate(-90deg);
cursor: pointer;
}
.plusV{
position: absolute;
width:0.3vw;
height: 3vh;
left: 87%;
top: 18%;
border: 2px solid #FFFFFF;
}
.plusH{
position: absolute;
width: 0.2vw;
height:3.5vh;
left: 86.7%;
top:14%;
border: 2px solid #ffffff;
transform: rotate(-90deg);  
}

.button{
position: absolute;
width: 10vw;
height: 5vh;
top: 115%;
background: #4F95FF;
color: #FFFFFF;
padding-left:2.5rem;
padding-top:0.3rem;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 1.5em;
text-transform: capitalize;
border-radius: 2px;
}

.stars{
 position: absolute;
 display:flex;
 flex-direction: row;
 width:6vw;
 left: 90%;
 top: 20.66px;

}

.stars p{
left: 220%;
margin-top:39%;
font-family: 'Poppins';
font-style: normal;
font-weight: 300;
font-size: 24px;
line-height: 1.5em;
color: rgba(0, 0, 0, 0.5);
}
.WhiteStar{
box-sizing: border-box;
width: 2vw;
height:3vh;


}
.totalPrice{
position: absolute;
width: 8vw;
height: 4vh;
left: 50%;
top: 65%;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 41px;
line-height: 106.5%;
color: #3A3244;

}
.totalPrice span {
font-size: 21px;
color: #4F95FF;
}
.ProductImage{
position: absolute;
width:363px;
height: 212.6px;
left: 41px;
top: 56px;
transform: matrix(-0.91, 0.41, 0.41, 0.91, 0, 0);
}
.name{
position: absolute;
width: 4vw;
height: 2vh;
left: 45%;
top: 19%;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 1.5em;
color: #3A3244;

}

.energy{
position: absolute;
width: 28px;
height: 28px;
left: 507px;
top: 991px;

}
</style>