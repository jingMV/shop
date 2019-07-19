import Vue from 'vue';
import Vuerouter from 'vue-router';
import App from './App.vue';
import Home from './components/Home.vue';
import Favorite from './components/Favorite.vue';
import arrivalpage from './components/ArrivalPage.vue'
import Onsale from './components/Onsale.vue'

//account import
import SignIn from './components/Account/SignIn.vue'
import SignUp from './components/Account/SignUp.vue'

//items import
import Bluecap from './components/Items/Bluecap.vue';
import BluecapNY from './components/Items/BluecapNY.vue';
import ShoePlay from './components/Items/ShoePlay.vue';
import Hboots from './components/Items/Hboots.vue';
import ShoeAC from './components/Items/ShoeAC.vue';
import WhiteAdi from './components/Items/WhiteAdi.vue';
import pairShoe from './components/Items/pairShoe.vue';
import NPink from './components/Items/NPink.vue';

//Best
import NikeRed from './components/Best/NikeRed.vue';
import ShoeGreen from './components/Best/ShoeGreen.vue';
import NikeBlue from './components/Best/NikeBlue.vue';
import Allstar from './components/Best/Allstar.vue';
import NikeGrey from './components/Best/NikeGrey.vue';
import ConShoe from './components/Best/ConShoe.vue';

Vue.use(Vuerouter)

const routes = [
  {path: '/', component: Home},
  {path: '/Favorite', component: Favorite},
  {path: '/New-Arrival', component: arrivalpage},
  {path: '/Onsale', component: Onsale},

  //account path
  {path: '/SignIn', component: SignIn},
  {path: '/SignUp', component: SignUp},





  //items path
  {path: '/Blue Cap', component: Bluecap},
  {path: '/Blue CapNY', component: BluecapNY},
  {path: '/Shoe Play', component: ShoePlay},
  {path: '/Hboots', component: Hboots},
  {path: '/Shoe AC', component: ShoeAC},
  {path: '/White Adi', component: WhiteAdi},
  {path: '/Pair Shoe', component: pairShoe},
  {path: '/N-pink', component: NPink},

  //Best Seller
  {path: '/NikeRed', component: NikeRed},
  {path: '/ShoeGreen', component: ShoeGreen},
  {path: '/NikeBlue', component: NikeBlue},
  {path: '/Allstar', component: Allstar},
  {path: '/NikeGrey', component: NikeGrey},
  {path: '/ConverseShoe', component: ConShoe},
];

const router = new Vuerouter({
  routes,
  mode:'history',
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
