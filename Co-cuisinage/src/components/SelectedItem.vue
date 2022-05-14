<template>
  <transition to=".target">
    <div class="modal" v-if="showModal=true">
        <div class="product">
         <img :src="closeIcon" class="closeIcon" @click="this.show()"  />
         <img :src="stats" class="stats" @click="showInsights= !showInsights" />
         <p class="name">BONITE</p>
      <div class="report"> 
          <img :src="report" @click="showReport= !showReport" />                   
          <p>Les poissons et fruits de mer</p>
          <div class="stars"> 
            <img :src="Star" class="star">
            <img :src="Star" class="star">
            <img :src="Star" class="star">
            <img :src="Star" class="star">
           <img :src="WhiteStar" class="WhiteStar">  <p>4.1</p>
         </div>
        
       </div>
       <div v-if="showReport" class="reports" @click="showReport= !showReport">
          <img :src="conseils" class="conseils">
         <img :src="ellipse" class="ellipse1"><span class="number1">1</span> 
         <img :src="ellipse" class="ellipse2"><span class="number2">2</span>
          <div class="suggestions">
            <img :src="suggestion1">
            <img :src="suggestion2">
          </div>  
        </div>
        <div v-if="showInsights">
          <img :src="insights" class="insights" @click="showInsights= !showInsights">
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
import insights from "../assets/Group 158.png"
import suggestion1 from "../assets/CruCitron.png"
import suggestion2 from "../assets/Grillée.png"
import conseils from "../assets/Conseil.png";
import ellipse from "../assets/Ellipse 35.png"
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
        ShowModal : false,
        insights,
        suggestion1,
        suggestion2,
        conseils,
        ellipse,
        showInsights:false ,
        showReport:false ,
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
width: 8.6vw;
height:15vh;
left: 4%;
top: 5%;
background:"ProductImage";
/* transform: matrix(-0.91, 0.41, 0.41, 0.91, 0, 0); */
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
cursor: pointer;

}
.report{
position: absolute;
left: 41.5%;
right: 51.87%;
top: 39.01%;
bottom: 84.03%;

}
.report img {
width: 2.7vw;
height: 5.66vh;
cursor: pointer;
}
.report p {
position: absolute;
width: 44vw;
height: 2vh;
max-height:5%;
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
justify-content: center;
background: #4F95FF;
color: #FFFFFF;
padding-left:25.5%;
padding-top:2.3%;
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
.conseils{
  position: absolute;
width: 70vw;
height: 30.9vh;
top:105%;
left:7%;
}
.suggestions{
   position: absolute;
   display:flex;
   flex-direction: row; 
   width:56vw;
   top:162%;
   right:20%;
}
.insights{
  position: absolute;
  top:105%;
   right:1%;
}
.ellipse1{
  position: absolute;
top:110%;
left:49%;
}
.ellipse2 {
position: absolute;
top:110%;
left:97%;
}
.number1{
position: absolute;
top:110%;
left:49.8%;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 1.5em;
color: #06C853;
}
.number2{
position: absolute;
top:110%;
left:97.8%;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 1.5em;
color: #06C853;
}
</style>