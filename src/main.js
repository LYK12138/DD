import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import router from './js/router.js'



/*文字图标*/
import './css/iconfont.css'





/*mini-ui*/
import Mint from 'mint-ui'
Vue.use(Mint)
import '../node_modules/mint-ui/lib/style.css'
/*按需引入组件*/
import { Swipe, SwipeItem,Search,Header} from 'mint-ui';

Vue.component(Search.name, Search);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);


/*swiper*/
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

import Swiper from '../node_modules/_swiper@4.5.0@swiper/dist/js/swiper.min.js'
import '../node_modules/_swiper@4.5.0@swiper/dist/css/swiper.min.css'


/*axios*/
import axios from 'axios'
Vue.prototype.$http = axios


new Vue({
  el: '#app',
  render: h => h(App),
  router:router,
})
