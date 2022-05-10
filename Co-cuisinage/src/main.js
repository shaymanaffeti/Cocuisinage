import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from "vue-router";

import Shop from "./components/ShopTab.vue";
import Menu from "./components/SideBarMenue.vue";
import MenuItem from "./components/TheBasics.vue"
import SelectedProduct from "./components/SelectedItem.vue"


const routes = [
    {
        path: "/nav",
        component: App,
       
    },
    {
        path: "/",
        component: Shop,
       
    },
    {
        path: "/menu",
        component:Menu ,
       
    },
    {
        path: "/Bases",
        component:MenuItem ,
       
    },
    {
        path: "/Item",
        component:SelectedProduct ,
       
    },
  
]


const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
createApp(App).use(router).mount('#app')
