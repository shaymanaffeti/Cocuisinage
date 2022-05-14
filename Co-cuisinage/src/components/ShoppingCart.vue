<template>   
  <div class="modal">
    <p>Mon Panier</p>
      <div class ="ProductContainer">
            <img :src="closeIcon" class="closeIcon">
            <span class="productName"> name </span>
            <img :src="product" class="productPicture">
            <div class="quantity">
              <img :src="minus" class="minus" >
              <img :src="plus" class="plus" >
              <input type="text" class="quantityControl">             
           </div>
            <span class="price">
               9$
            </span>          
      </div>
        <div class="totalPrice">
                  <span class="total"> total :</span> 
                  <span class="info"> hors frais de livraison</span>
                  <p> 9$</p>
            </div>
    </div>
</template>

<script>
import closeIcon from "../assets/Vector (2).png";
import product from "../assets/fish2.png"
import minus from "../assets/minus-sign-vector.png"
import plus from "../assets/vector_plus.png"

export default{
   data(){
    return{
      closeIcon,
      product,
      minus,
      plus
      }
   },
   props: {
    cart: { type : Function } 
   }

}

</script>


<style scoped>
.modal{
 position: absolute;
 left: 74.14%;
 top:12.5%;
 height: 41.21vh;  
 width: 25.65vw;    
 background: #F8F6F5;
 box-shadow: -20px 4px 30px rgba(0, 0, 0, 0.3);    
}
p{
position: absolute;
width: 8vw;
height: 4vh;
left: 5%;
top: 12%;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 1.5em;
text-transform: capitalize;
color: #3A3244;
}
.ProductContainer{
position: absolute;
width: 25.56vw;
height:13.69vh;
top: 27%;
background: #F8F6F5;
box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.3);
}
.closeIcon{
position: absolute;
width: 1vw;
height: 2vh;
left:95%;
}
.productName{   
position: absolute;
width: 3.81vw;
height: 2.9vh;
left: 45%;
top: 19%;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 129.5%;
text-transform: capitalize;
color: #3A3244;
}
.productPicture{
position: absolute;
width: 5.48vw;
height: 8.23vh;
left:6%;
top:19%;
/* transform: matrix(-0.91, 0.41, 0.41, 0.91, 0, 0); */
}
.quantity{
position: absolute;
width: 5.51vw;
height: 2.89vh;
left: 47%;
top: 60%;
background: #4F95FF;
}
.quantityControl{
position: absolute;
width: 2.11vw;
height: 2.8vh;
left: 31%;
bottom: 0.026rem;
background: #F8F6F5;
}
.minus{
position: absolute;
width: 30%;
height: 4vh;
right: 1%;
top:-0.22rem;
}
.plus{
position: absolute;
width: 28%;
height: 4vh;
right: 70%;
top:-0.22rem;

}
.price{
position: absolute;
width: 5.72vw;
height: 6.63vh;
left: 79%;
top:50%;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 2rem;
line-height: 1.5em;
color: #3A3244;
}
.total{
position: absolute;
width: 3.27vw;
height: 1.40vh;
left: 10%;
top: 69%;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 1.5em;
text-transform: capitalize;
color: #3A3244;
}
.info{
position: absolute;
width:9.8vw;
height: 2.4vh;
left: 10%;
top: 76%;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 1.5em;
color: #3A3244;
}
.totalPrice p {
position: absolute;
width: 5.7vw;
height: 6.63vh;
left:69%;
top: 65%;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 2.5rem;
line-height: 1.5em;
color: #3A3244;
}
</style>