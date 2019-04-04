<template>
	<div class="eee">
		<div class="header">
			<mt-header title="我的当当">
			  <router-link to="/" slot="left">
				<mt-button icon="back"></mt-button>
			  </router-link>
			  <mt-button icon="more" slot="right"></mt-button>
			</mt-header>
		</div>
		<div class="tp">
			<p>登录/注册</p>
		</div>
		<div class="san">
			<div class="san1">
				<p>
					<span>0</span>
					<span>收藏的商品</span>
				</p>
			</div>
			<div class="san1">
				<p>
					<span>0</span>
					<span>关注的店铺</span>
				</p>
			</div>
			<div class="san1">
				<p>
					<span>1</span>
					<span>我的足迹</span>
				</p>
			</div>
		</div>
		<div class="wddd">
			<p>
				<span class="sp1"><img src="../../images/wd1.png" alt=""></span>
				我的订单
				<span class="sp2"><img src="../../images/rightarrow_new.png" alt=""></span>
				<em>查看全部购买商品</em>
			</p>
		</div>
		<div class="santp">
			<div class="santp1">
				<span><img src="../../images/fukuan.png" alt=""></span>
				<p>待付款</p>
			</div>
			<div class="santp1">
				<span><img src="../../images/shouhuo.png" alt=""></span>
				<p>待收货</p>
			</div>
			<div class="santp1">
				<span><img src="../../images/pd-return.png" alt=""></span><p>退换货</p>
			</div>
		</div>
		<ul class="lykul">
			<li v-for="(v,i) in list">
				<span><img :src="v.src" alt=""></span>
				<p>{{v.txt}}</p>
			</li>
		</ul>
		<div class="fengebig">
			<div class="fenge">
				<span class="leftxian"></span>
				<span class="gou"><img src="../../images/gou.png" alt=""></span>
				<p>根据您的偏好猜您可能喜欢</p>
				<span class="rightxian"></span>
			</div>
		</div>
		<div class="guess">
			<ul>
				<li v-for="(v,i) in guess">
		
					<div v-if="v.id==1">
						<p class="tj"><span></span>为你推荐<span></span></p>
						<p class="bb">
						<img :src="v.src" alt="">
						</p>
						<p class="lb">{{v.lb}}</p>
						<p class="clc">点击查看</p>			
					</div>
					<div v-else>
						<p class="bb2">
							<img :src="v.src" alt="">
						</p>
						<div>
							<p class="title">{{v.title}}</p>
							<div class="bao"><p class="zy">{{v.zy}}</p>
							<p class="xianshi">{{v.xianshi}}</p></div>
							<span class="price">{{v.price}}</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="dlzc">
			<p class="left">
				<span>登录</span>
				<span>注册</span>
			</p>
			<p class="rightsp">
				<span>TOP</span>
			</p>
		</div>
		<div class="zhushi">
			<div class="zhushi2">
				<span>提建议</span>
				<span>电脑版</span>
				<span>帮助</span>
				<p>Copyright&copy 2019 北京当当网信息技术有限公司<br>北京市朝阳区北三环东路2号，100028</p>
		
			</div>
		</div>
	</div>
</template>

<style scoped>
	#app{
		padding-bottom: 2vh !important;
	}
	.eee{
		background: #eee;
	}
	.header .mint-header{
		background-color: #fff;
		height: 6.5vh;
		color:#333;
		/* border-bottom: 1px solid #e9e9e9; */
		box-shadow:0px 1px 2px #a49e9b;
		font-size: 0.47rem;
	}
	.header .mintui{
		font-size:20px;
	}
	.tp{
		width:100%;
		height:17.6vh;
		position: relative;
		background:url('../../images/header.jpg') center center no-repeat;
		background-size: 100% 100%;
		border-bottom:0.5px solid #d2ceca;
	}
	.tp>p{
		width:40%;
		padding: 0.2rem;
		color:#fff;
		border: 1px solid #fff;
		border-radius: 30px;
		font-size:0.4rem;
		position: absolute;
		left: 50%;
		top:50%;
		transform: translate(-50%,-50%);
	}
	.san{
		width:100%;
		height:10vh;
		display: flex;
		background: #fff;
	}
	.san1{
		width:33.33%;
		font-size: 0.36rem;
		padding:1.5vh 0px
	}
	.san1 p{
		border-right:1px solid #e5e5e5;
	}
	.san .san1:nth-of-type(3)>p{
		border-right: 0px;
	}
	.san1 span{
		display: block;
	}
	
	
	.wddd{
		width:100%;
		height:5vh;
		line-height: 5vh;
		background:#fff;
		font-size: 0.4rem;
		text-align: left;
		position: relative;
	}
	.wddd>p{
		width:100%;
		height: 3vh;
		line-height: 3.5vh;
		position: absolute;
		top:50%;
		transform: translateY(-50%);
		/* background: pink; */
		padding: 0px 0.3rem;
	}
	.sp1{
		display: inline-block;
		width: 6.4%;
		/* height: 100%; */
		float: left;
		margin-right: 0.2rem;
	}
	.sp2{
		display: inline-block;
		width:2.4%;
		float: right;
		margin-top: 0.05rem;
		margin-left: 0.2rem;
	}
	.wddd img{
		width:100%;
		height:100%
	}
	.wddd em{
		font-style: normal;
		font-weight: bold;
		font-size: 0.2rem;
		color:#999;
		float: right;
	}
	
	.santp{
		width:100%;
		height: 12vh;
		background: #fff;
		display: flex;
		margin-bottom: 2vh;
	}
	.santp1{
		width: 33.33%;
		height: 100%;
		/* background: #e5e5e5e5; */
		text-align: center;
		font-size: 0.4rem;
		line-height: 3vh;
		padding:2vh
	}
	.santp1>span{
		display:inline-block;
		width: 6vw;
		height: 3vh;
		/* background: pink; */
		text-align: center;
	}
	.santp1>span>img{
		width:100%;
		margin: 0px auto;
	}
	.santp1>p{
		display:block;
		width:100%;
		/* background: red; */
		text-align: center;
	}
	.lykul{
		overflow: hidden;
	}
	
	.lykul>li{
		width: 100%;
		height:6vh ;
		/* line-height: 3vh; */
		text-align: left;
		font-size: 0.4rem;
		padding-left:4vw;
		padding-top:0.2vh;
		background: #fff;
		float: left;
	}
	.lykul>li:nth-of-type(1){
		margin-bottom: 2vh;
	}
	.lykul>li:nth-of-type(6){
		margin-bottom: 2vh;
	}
	.lykul>li:nth-of-type(9){
		margin-bottom: 2vh;
	}
	.lykul>li:nth-of-type(10){
		margin-bottom: 2vh;
	}
	.lykul span{
		display: inline-block;
		width: 6.4%;
		margin-right: 2vw;
		margin-top: 1.2vh;
		float: left;
	}
	.lykul p{
		display: inline-block;
	/* 	background: pink; */
		float: left;
		margin-top: 1.5vh;
	}
	.lykul span>img{
		width: 100%;
	}
	.fengebig{
		width: 100%;
		 margin-bottom: 2vh; 
	}
	.fenge{
		width: 100%;
		height: 4vh;
		/* background: pink; */
		position: relative;
		
	}
	.leftxian{
		display: inline-block;
		width: 9vw;
		height: 0.3vh;
		background: #dadada;
		position: absolute;
		top:50%;
		left:11vw;
		transform: translateY(-50%);
	}
	.fenge p{
		display: inline-block;
		font-size: 0.4rem;
		color:#000;
		position: absolute;
		top:55%;
		left:50%;
		transform: translate(-50%,-50%);
	}
	.rightxian{
		display: inline-block;
		width: 10vw;
		height: 0.3vh;
		background: #dadada;
		position: absolute;
		top:50%;
		right:14vw;
		transform: translateY(-50%);
	}
	.gou{
		width:4vw;
		height: 4vw;
		display: inline-block;
		position: absolute;
		top:50%;
		left:22vw;
		transform: translateY(-50%);
	}
	.gou>img{
		width:100%
	}
	
	
	
	
	
	
	.guess{
		margin-bottom: 0px;
	}
	.guess li{
		height:41vh;
	}
	
	.dlzc{
		width: 100%;
		height: 1.4rem;
		background: #fff;
		border-bottom: 1px solid #e8e8e8;
	}
	.dlzc>.left{
		width: 50%;
		height: 1.4rem;
		float: left;
		font-size:0.4rem;
		line-height:1.4rem;
		text-align:left;
		padding-left: 4vw;
	}
	.dlzc>.rightsp{
		width: 50%;
		height: 1.4rem;
		float: right;
		font-size:0.4rem;
		line-height:1.4rem;
		text-align:right;
	}
	.dlzc span{
		margin-right: 0.4rem;
		display: inline-block;
	}
	.dlzc .rightsp>.sp1{
		margin:0px
	}
	.sp1>img{
		width: 70%;
		height:70%;
	}
	.zhushi2>span:nth-of-type(2){
		color:#000;
		display: inline-block;
		width: 18%;
	}
	.zhushi2>span{
		font-size: 0.4rem;
		width: 15vw;
	}
</style>


<script>
	
	export default{
		data(){
			return{
				list:[],
				guess:[]
			}
		},
		mounted(){
			var _this=this;
			
			this.$http.get('./data/mydata.json')
			.then(function(response){
				console.log(response.data)
				_this.list=response.data.list;
				_this.guess=response.data.guess;
			})
			.catch(function(error){
				console.log(error);
			})
			
		}
	}
</script>