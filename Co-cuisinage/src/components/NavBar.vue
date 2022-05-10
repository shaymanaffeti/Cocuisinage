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
      <div class="icons">
        <img :src="searchIcon" class="searchIcon">
        <img :src="userIcon" class="userIcon" >
        <svg width="25" height="57" viewBox="0 0 42 33" fill="none" xmlns="http://www.w3.org/2000/svg" class="basket">
          <path d="M42 13.5537V14.7323C42 15.7086 41.2165 16.5001 40.25 16.5001H39.6667L37.7626 29.9643C37.5163 31.7062 36.0396 33 34.2978 33H7.70219C5.96043 33 4.48372 31.7062 4.23733 29.9643L2.33333 16.5001H1.75C0.78349 16.5001 0 15.7086 0 14.7323V13.5537C0 12.5773 0.78349 11.7858 1.75 11.7858H6.66028L14.4463 0.970977C15.2043 -0.0817751 16.6635 -0.314615 17.7058 0.451083C18.748 1.21678 18.9784 2.69094 18.2204 3.74377L12.4306 11.7858H29.5694L23.7796 3.7437C23.0216 2.69094 23.2521 1.21671 24.2943 0.451009C25.3364 -0.314689 26.7958 -0.0819224 27.5537 0.970904L35.3397 11.7858H40.25C41.2165 11.7858 42 12.5773 42 13.5537ZM22.75 26.5179V18.268C22.75 17.2916 21.9665 16.5001 21 16.5001C20.0335 16.5001 19.25 17.2916 19.25 18.268V26.5179C19.25 27.4943 20.0335 28.2857 21 28.2857C21.9665 28.2857 22.75 27.4943 22.75 26.5179ZM30.9167 26.5179V18.268C30.9167 17.2916 30.1332 16.5001 29.1667 16.5001C28.2002 16.5001 27.4167 17.2916 27.4167 18.268V26.5179C27.4167 27.4943 28.2002 28.2857 29.1667 28.2857C30.1332 28.2857 30.9167 27.4943 30.9167 26.5179ZM14.5833 26.5179V18.268C14.5833 17.2916 13.7998 16.5001 12.8333 16.5001C11.8668 16.5001 11.0833 17.2916 11.0833 18.268V26.5179C11.0833 27.4943 11.8668 28.2857 12.8333 28.2857C13.7998 28.2857 14.5833 27.4943 14.5833 26.5179Z" fill="#FEFAE5"/>
        </svg>
      </div>
    </div> 
</template>
<script>
import fishIcon from "../../public/fish_icon.png"
import userIcon from "../assets/Group 2.png"
import searchIcon from "../assets/Group 4.png"

export default {
    data(){
     return{
    fishIcon ,
    userIcon,
    searchIcon
  }
} 
}
</script>
<style scoped>
.nav{
position: absolute;
width:100%;
height: 82px;
left: 0px;
top: 0px;
background-color: #4F95FF;
}
.title{
position: absolute;
width: 99px;
height: 26px;
left: 85px;
top: 18px;
color:#FEFAE5;
font-family: "cera-round-pro";
font-weight: 700;
font-size: 15px;
line-height:48px;

}
.icon{
  margin-top: 20px;
  margin-left: 42px;
  width:40px;
  height:33px;
  transform: rotate(-30.37deg);

} 
.tabs{
 position: absolute;
  color:#FEFAE5;
  left:30%;
  top:  15.96%;
  display: flex;
}
.tabs li {
  display: inline;
  padding: 0.625rem ;
  padding-right: 2.325rem;
  padding-left: 2.325rem;
  list-style-type: none;
  cursor: pointer;
}
/* .tabs .selected :hover::before{
   opacity: 1;
  visibility: visible;
  pointer-events: auto;
background: #FEFAE5 ;
color: #4F95FF;

} */
.icons{
  position: absolute;
  display: inline;
  top:  15.96%;
  left:85%;
  padding:1%;
  padding-right: 2.325rem;
  padding-left: 2.325rem;
  top: 4.96%;
}
.basket{
position: relative;
padding-left: 0.22rem;
/* padding-top: 0.7rem;
 */

}
.searchIcon{
position: relative;
width: 32px;
height: 36.8px;
bottom: 0.6rem;
padding-right: 1.225rem;


}
.userIcon{
position: relative;
width: 30px;
height: 39.8px;
padding-right: 1.225rem;
bottom: 0.3rem;
}
.selected{
color: #4F95FF;
background: #FEFAE5;
border-radius: 2px;
}

</style>