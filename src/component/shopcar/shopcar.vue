<template>
	<div class="shopcargen">
		<!-- 引用mint-ui中的头部插件作为头部 -->
		<header>
			<mt-header title="购物车" class="shopcarheader">
			  <router-link to="/" slot="left">
				<mt-button icon="back"></mt-button>
			  </router-link>
			  <mt-button icon="more" slot="right"></mt-button>
			</mt-header>
		</header>
		<!-- 免运费的提示 -->
		<h3 class="mian">
			<p>当当自营订单满49元包邮，已免运费6元</p>
			<span></span>
		</h3>
		<!-- 底部固定的合计结算 -->
		<footer class="shopcarfooter">
			<div class="youbian">
				<!-- <input type="checkbox" class="lykchexk"> -->
				<span class="lykchexk"></span>
				<p class="youbiantxt">
					<span class="quanxuan">全选</span>
					<span class="heji">
						合计
						<i>￥9239.10</i>
					</span>
				</p>
			</div>
			<span class="jiesuan">结算()</span>
		</footer>
		<!-- 中间部分的购物车清单 -->
		<section class="qingdan">
			<div class="qingdandiv"  v-for="(v,i) in list">
				<div class="toubudiv">
					<div class="youbian">
						<span class="lykchexk"></span>
						<p class="youbiantxt">
							<span class="quanxuan2">{{v.shopname}}</span>
						</p>
					</div>
				</div>
				<div class="xq" v-for="(vv,ii) in v.shop">
						<span class="spbox"></span>
					<ul class="shopul">
						<li>
							<img :src="vv.src" alt="">
							<div class="txtjg">
								<p>{{vv.title}}</p>
								<span class="shopprice">{{vv.price}}</span>
							</div>
							<div class="shopspan">
								<span class="xx">x1</span>
								<span class="xiugai"></span>
							</div>
							
						</li>
					</ul>
				</div>
			</div>
			
		</section>
		<!-- 为您推荐分割线,开始 -->
		<div class="shopcartuijian">
			<span class="tjleft"></span>
			<span class="tjicon"></span>
			<p>根据购物车中的商品为您推荐</p>
			<span class="tjright"></span>
		</div>
		<!-- 为您推荐结束 -->
		<!-- 推荐清单开始 -->
		<div class="tjqingdan">
			
		</div>
		<!-- 推荐清单结束 -->
		
	</div>
</template>


<style scoped>
	.shopcargen{
		background: #eee;
	}
	/*伪对象隐藏滚动条*/
	::-webkit-scrollbar {
		display: none;
	}
	.shopcarheader{
		width: 100%;
		height: 6vh;
		background: #fff;
		color:#000;
		border-bottom: 1px solid #e5e5e5;
		font-size: 0.4rem;
		margin-bottom: 1vh;
	}
	.mian{
		width: 100%;
		height:6vh;
		background:#ffa5a5 ;
		position: relative;
		margin-bottom: 1vh;
	}
	.mian>p{
		width: 80%;
		font-size: 0.35rem;
		color:#fff;
		text-align: left;
		position: absolute;
		top:50%;
		transform: translateY(-50%);
		font-weight:200;
		margin-left: 3vw;
		margin-bottom: 1vh;
	}
	.mian>span{
		display: block;
		width: 4vw;
		height: 2.5vh;
		/* background: #26A2FF; */
		position: absolute;
		right:3vw;
		top:50%;
		transform: translateY(-50%);
		background: url('../../images/info_close.png') center center no-repeat;
		background-size: 80% 80%;
	}
	.shopcarfooter{
		width: 100%;
		height: 7vh;
		background: #fff;
		position: fixed;
		bottom: 0px;
		z-index: 7;
		padding-left: 4vw;
		border-top: 1px solid #e5e5e5;
	}
	.youbian{
		width: 70%;
		height: 4vh;
		/* border: 1px solid #000; */
		position: absolute;
		top:50%;
		transform: translateY(-50%);
		/* overflow: hidden; */
	}
	.lykchexk{
		display: block;
		width:6.5vw;
		height:6.5vw;
		/* background: #000000; */
		border-radius: 50%;
		background: url(../../images/checkbox_off.png) center center no-repeat;
		background-size: 95% 95%;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		float: left;
	}
	.youbiantxt{
		width:88%;
		/* border: 1px solid #000; */
		font-size: 0.3rem;
		float: left;
		position: absolute;
		top:50%;
		transform: translateY(-50%);
		right: 0px;
		overflow: hidden;
		padding-left:1vw;
		padding-right: 2vw;
	}
	.quanxuan{
		display: inline-block;
		font-size: 0.45rem;
		color: #9c9c9c;
		float: left;
	}
	.heji{
		font-size: 0.45rem;
		float: right;
	}
	.heji>i{
		font-style: normal;
		color:#ff6269;
	}
	.jiesuan{
		display: block;
		position: absolute;
		right:0px;
		width: 26%;
		height: 7vh;
		background:#fb4741 ;
		color:#fff;
		font-size: 0.4rem;
		text-align: center;
		line-height: 7vh;
	}
	
	.qingdan{
		width: 100%;
		/* height: 40vh; */
		/* background: #fff; */
		margin-bottom: 1vh;
	}
	.shopcartuijian{
		width: 100%;
		height: 5vh;
		/* background: #e5e5e5; */
		margin-bottom: 1vh;
		position: relative;
	}
	.shopcartuijian>span{
		display: inline-block;
	}
	.shopcartuijian>p{
		display: inline-block;
		width: 60vw;
		font-size: 0.41rem;
		color:#000;
		position: absolute;
		top:50%;
		left:54%;
		transform: translate(-50%,-50%);
	}
	.tjleft{
		width: 8vw;
		height: 1px;
		background:#dedede ;
		position: absolute;
		top:50%;
		transform: translateY(-50%);
		left:10%
	}
	.tjright{
		width: 8vw;
		height: 1px;
		background:#dedede ;
		position: absolute;
		top:50%;
		transform: translateY(-50%);
		right:10%
	}
	.tjicon{
		width: 6vw;
		height: 6vw;
		/* background: lightblue; */
		position: absolute;
		top:50%;
		transform: translateY(-50%);
		left:21%;
		background: url(../../images/shopcar-tjicon.png) center center no-repeat;
		background-size: 100% 100%;
	}
	.tjqingdan{
		width: 100%;
		height: 90vh;
		background: lightblue;
	}
	.qingdandiv{
		width: 100%;
		margin-bottom: 1vh;
		background: #fff;
	}
	.toubudiv{
		width: 100%;
		height: 6vh;
		/* background: lightblue; */
		position: relative;
		padding:4vw;
		border-bottom: 1px solid #e5e5e5;
	}
	.quanxuan2{
		display: inline-block;
		font-size: 0.42rem;
		color:#8e8e8e;
		float: left;
		/* margin-bottom:4vw; */
	}
	
	
	.shopul{
		width:88%;
		float:right;
		/* border: 1px solid #26A2FF; */
	}
	.xq{
		background: #fff;
		overflow: hidden;
		position: relative;
	}
	.xq img{
		display: inline-block;
		width: 30%;
		float: left;
	}
	.xq li{
		float: left;
		padding-bottom: 2vh;
	}
	.txtjg {
		width: 70%;
		float: right;
		margin-bottom: 1vh;
	}
	.xq li p{
		font-size: 0.4rem;
		text-align: left;
		/* float: right; */
		width: 100%;
		margin-bottom: 3vh;
	}
	.xq li .shopprice{
		font-size: 0.4rem;
		color:#ff5b63;
		display:inline-block;
		width: 60%;
		float: left;
		text-align: left;
	}
	.xq li .xx{
		font-size: 0.39rem;
		color:#000;
		display:inline-block;
		width: 6vw;
		height: 6vw;
		float: left;
		text-align: left;
	}
	.spbox{
		display: inline-block;
		width:6.5vw;
		height:6.5vw;
		/* background: #000000; */
		border-radius: 50%;
		background: url(../../images/checkbox_off.png) center center no-repeat;
		background-size: 95% 95%;
		position: absolute;
		top:50%;
		left:4.2%;
		transform: translateY(-50%);
	}
	.shopspan{
		width: 70%;;
		overflow: hidden;
		padding: 0px 2vw;
		float: right;
	}
	.xiugai{
		float: right;
		display: inline-block;
		width: 6vw;
		height: 6vw;
		/* background: lightblue; */
		background: url('../../images/xiugai.png') center center no-repeat;
		background-size: 100% 100%;
	}
</style>


<script>
	export default{
		data(){
			return{
				list:[]
			}
		},
		mounted(){
			var _this=this;
			
			this.$http.get('./data/shopcardata.json')
			.then(function(response){
				console.log(response.data)
				_this.list=response.data.shopcar;
			})
			.catch(function(error){
				console.log(error);
			})
			
		}
	}
	
	
	
</script>