/*
* @Author: hp
* @Date:   2019-03-25 18:48:22
* @Last Modified by:   hp
* @Last Modified time: 2019-03-28 13:04:34
*/

'use strict';


import VueRouter from 'vue-router'
import start from '../component/start.vue'
import index from '../component/index/index.vue'


import home from '../component/index/home.vue'
import fenlei from '../component/index/fenlei.vue'
import shopcar from '../component/shopcar/shopcar.vue'
import worth from '../component/index/worth.vue'
import my from '../component/index/my.vue'


export default new VueRouter({
	routes:[
		
		{
			path:'/index',
			component:index,
			children:[
				{
					path:'/home',
					component:home
				},
				{
					path:'/fenlei',
					component:fenlei
				},
				{
					path:'/shopcar',
					component:shopcar
				},
				{
					path:'/worth',
					component:worth
				},
				{
					path:'/my',
					component:my
				}	
			]
		},
		{
			path:'/',
			redirect:'/home'
		}
		


	]

})