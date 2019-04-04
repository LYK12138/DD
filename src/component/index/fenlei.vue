<template>
	<div class="big">
		<div class="ssdh">
			<div class=inp>
				<input type="text"></input>
			</div>
			
		</div>
		<div class="back">
			<div class="swiper-container left">
				<ul class="swiper-wrapper leftul">
				<li v-for="(v,i) in list" class="swiper-slide" @click="cons(i)" ><p :class="{cli:num==i}" @click="change(i)">{{v.name}}</p></li>
				</ul>
			</div>
		</div>
		<div class="wb"></div>
		<div class="right">
			<component :is='msg'></component>
		</div>

	</div>
</template>



	<style scoped>
	</style>

	<script>
		import '../../css/my/fenlei.css';
		import Swiper from 'swiper';
		
		
		import tushu from '../fenlei/tushu.vue';
		import tongshu from '../fenlei/tongshu.vue';
		/* import dianzishu from '../fenlei/dianzishu.vue';
		import tingshu from '../fenlei/tingshu.vue';
		import wangluowenxue from '../fenlei/wangluowenxue.vue';
		import chuangyiwenju from '../fenlei/chuangyiwenju.vue';
		import paimai from '../fenlei/paimai.vue';
		import nvzhuang from '../fenlei/nvzhuang.vue';
		import nanzhuang from '../fenlei/nanzhuang.vue';
		import nannv from '../fenlei/nannv.vue'; */
		
		
		
		
		export default{
			data(){
				return{
					list:[],
					num:0,
					msg:'tushu'
				}
			},
			methods:{
				cons(a){
					console.log('111');
					this.num=a;
					console.log(this.num);
					
				},
				change(i){
					this.msg=this.list[i].address
				}
			},
			mounted(){
				var _this=this;
				
				this.$http.get('./data/data2.json')
				.then(function(response){
					console.log(response.data)
					_this.list=response.data.list;
					_this.$nextTick(function(){
						var mySwiper = new Swiper('.swiper-container',{
							freeMode:true,
							freeModeMomentum:true,
							freeModeMomentumRatio:true,
							direction:"vertical",
							slidesPerView:14
						})
					})
					
				})
				.catch(function(error){
					console.log(error);
				})
			},
			components:{
				"tushu":tushu,
				"tongshu":tongshu,
				/* "dianzishu":dianzishu,
				"tingshu":tingshu,
				"wangluowenxue":wangluowenxue,
				"chuangyiwenju":chuangyiwenju,
				"paimai":paimai,
				"nvzhuang":nvzhuang,
				"nanzhuang":nanzhuang,
				"nannv":nannv */
			}

		}
	</script>