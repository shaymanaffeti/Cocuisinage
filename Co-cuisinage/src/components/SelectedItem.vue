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
            <img :src="Star" >
            <img :src="Star" >
            <img :src="Star">
            <img :src="Star">
          </div>
          <img :src="WhiteStar" class="WhiteStar">
       </div>
        <img :src="ProductImage" class="ProductImage"/>
    <p class="totalPrice">9$</p>
     <p class="Price">12$/KG</p>
    <div class="controlQuantity">
     <div class="rectangle" ></div>
        <img :src="minus" class="minus">
        <img :src="plusV" class="plusV">
        <img :src="minus" class="plusH">
        <div class="Buttoncontainer">
            <div class="button"> <p> Ajouter</p>  </div>
        </div>
    </div>
  </div>
  <img :src="energy" class="energy">
  <img :src="insights" class="insights" > 
    </div>
  </transition>  
  
    
 

 
</template>


<script>
import ProductImage from "../assets/Bonite, crue 3.png"
import closeIcon from "../assets/Vector (2).png"
import stats from "../assets/Vector.png"
import report from "../assets/Vector (1).png"
import minus from "../assets/Vector 14.png"
import plusV from "../assets/Vector 12.png"
import Star from "../assets/Star.png"
import WhiteStar from "../assets/Star 5.png"
import insights from "../assets/Group 158.png"
import energy  from "../assets/simple-line-icons_energy.png"



 
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
        insights,
        energy,
        ShowModal : true
       }
   },
   props:{ 
     show: { type : Function }
   }
    
   
}
</script>

<style scoped>


.btn{
  margin-left : 50% ;color : black
}
.product{
position: absolute;
width: 1075px;
height: 362px;
left: 171px;
top: 310px;
background: #FFFFFF;
border-radius: 180px 4px 4px 180px;
}
.imageContaner{
  position: absolute;
width: 363px;
height: 363px;
left: 181px;
top: 210px;
background: #FFFFFF;
box-shadow: 5px 20px 30px -14px rgba(0, 0, 0, 0.1);
}
.productImage{
  position: absolute;
width: 292.73px;
height: 212.6px;
left: 441.91px;
top: 235.2px;
background:"ProductImage";
transform: matrix(-0.91, 0.41, 0.41, 0.91, 0, 0);
}
.closeIcon{
  position: relative;
width: 28px;
height: 28px;
left: 1019.8px;
top: 28px;
}
.stats{
position: relative;
left: 40.93%;
right: 52.01%;
top: 18.32%;
bottom: 86.91%;
width: 28px;
height: 28px;

}
.report{
position: absolute;
left: 43.53%;
right: 51.87%;
top: 32.01%;
bottom: 84.03%;

}
.report img {
width: 28px;
height: 28px;
}
.report p {
position: absolute;
width: 446.4px;
height: 139.95px;
left: 95.53%;
margin-top: -37px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 106.5%;
color: #3A3244;
}
.description{
position: absolute;
width: 450.4px;
height: 205.95px;
left: 728px;
top: 278px;
}
.controlQuantity{
position: absolute;
width: 129px;
height: 35px;
left: 929.21px;
top: 265px;
background-color: #4F95FF;
}
.rectangle{
position: absolute;
width: 53px;
height: 35px;
left: 39px;
top: 0px;
background: #F8F6F5;
}
.minus{
position: absolute;
width: 0px;
height: 17px;
left: 17px;
top: 8px;
border: 2px solid #ffffff;
transform: rotate(-90deg);
cursor: pointer;
}
.plusV{
position: absolute;
width: 0px;
height: 17px;
left: 109px;
top: 8px;
border: 2px solid #FFFFFF;
}
.plusH{
  position: absolute;
width: 0px;
height: 17px;
left: 109px;
top: 8px;
border: 2px solid #ffffff;
transform: rotate(-90deg);  
}
.Buttoncontainer{
position: absolute;
width: 129px;
height: 35px;
left: 1px;
top: 22px;
}
.button{
position: absolute;
width: 129px;
height: 35px;
left: 1px;
top: 22px;

background: #4F95FF;
border-radius: 2px;
}
.button p {
position: absolute;
width: 62px;
height: 24px;
left: 36px;
top: -8px;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 129.5%;
text-transform: capitalize;
color: #FFFFFF;
}
.stars{
 position: absolute;
width: 133px;
height: 22.42px;
left: 95.53%;
top: 21.66px;

}

.WhiteStar{
box-sizing: border-box;
position: absolute;
width: 30.84px;
height: 28.42px;
left: 156.53px;
top: 22px;

}
.insights{
position: absolute;
width: 506px;
height: 358px;
left: 507px;
top: 691px;
}
.totalPrice{
 position: absolute;
width: 182px;
height: 48px;
left: 498px;
top: 199px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 51px;
line-height: 106.5%;
color: #3A3244;

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
width: 446.4px;
height: 139.95px;
left: 517px;
top: 6.32%;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 38px;
line-height: 106.5%;
color: #3A3244;

}
.Price{
  position: absolute;
width: 182px;
height: 18px;
left: 492px;
top: 285px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 106.5%;
color: #4F95FF;
}
.energy{
position: absolute;
width: 28px;
height: 28px;
left: 507px;
top: 991px;

}
</style>