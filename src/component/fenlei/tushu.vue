	<template>
		<div class="lykright">
			<div class="tsgg"></div>
			<div class="guang">
				<div class="guangleft">
					<p class="leftp">
						<span class="bigwenzi">进入当当书城</span>
						<span class="litwenzi">特价低至1.9折</span>
					</p>
					<span class="arrow"></span>
				</div>
				<div class="guangright">
					<p class="rightp">
						<span class="bigwenzi">进入儿童馆</span>
						<span class="litwenzi">精选少儿读书</span>
					</p>
					<span class="arrow"></span>
				</div>
			</div>
			<div class="fenleibd">
				<p>榜单</p>
				<div class="bdsan">
					<ul>
						<li>
							<img src="../../images/tushubd1.png" alt="">
							<p>总榜</p>
						</li>
						<li>
							<img src="../../images/tushubd2.png" alt="">
							<p>新书榜</p>
						</li>
						<li>
							<img src="../../images/tushubd3.png" alt="">
							<p>童书榜</p>
						</li>
					</ul>
				</div>
			</div>
			<div class="swiper-slide remen">
									 <p class="listp">热门书单</p>
									 <p class="youarrow">
										 <span>更多精彩书单</span>
										 <span class="xiaoarrow"></span>
									 </p>
									 <ul class="shudanul">
									 	<li v-for="(v,i) in shudan">
											 <p class="shudantxt">{{v.txt}}</p>
										</li>
									 </ul>
			</div>
			
			<div class="swiper-slide neiron">
				<p class="listp">按内容分类</p>
				<p class="youarrow">
					<span>童书馆</span>
					<span class="xiaoarrow"></span>
				</p>
				<ul class="neironul">
					<li v-for="(v,i) in neiron">
						<p class="shudantxt">{{v.txt}}</p>
					</li>
				</ul>
			</div>
			
		</div>
	</template>


	<style scoped>
		
		
		.tsgg{
			width:100%;
			height:16vh;
			margin-bottom:1vh;
			background: url('../../images/fenleitushu.jpg') center center no-repeat;
			background-size: 100% 100%;
		}
		.guang{
			width: 100%;
			height: 8vh;
			margin-bottom:1vh;
		}
		.guangleft{
			width: 49%;
			height: 100%;
			background: #fff;
			float: left;
			position: relative;
		}
		
		.leftp{
			width: 80%;
			font-size: 0.38rem;
			text-align: left;
			display: inline-block;
			position: absolute;
			left: 2vw;
			top:50%;
			transform: translateY(-50%);
		}
		.leftp>span{
			display: inline-block;
		}
		.bigwenzi{
			font-size: 0.38rem;
			font-weight:1000;
			font-family: 'microsoft yahei',Verdana,Arial,Helvetica,sans-serif;
		}
		.litwenzi{
			font-size: 0.2rem;
			color:#a6a6a6
		}
		.arrow{
			display: inline-block;
			width: 2.5vw;
			height: 1.5vh;
			background: lime;
			/* margin-bottom: 50%; */
			position: absolute;
			right: 1.5vw;
			top:50%;
			transform: translateY(-50%);
			background: url('../../images/fenleiarrow.png') center center no-repeat;
			background-size: 60% 60%;
		}
		
		.guangright{
			width: 49%;
			height: 100%;
			background: #fff;
			float: right;
			position: relative;
		}
		.rightp{
			width: 80%;
			font-size: 0.38rem;
			text-align: left;
			display: inline-block;
			position: absolute;
			left: 2vw;
			top:50%;
			transform: translateY(-50%);
		}
		.rightp>span{
			display: inline-block;
		}
		
		
		.fenleibd{
			width: 100%;
			height: 22vh;
			background:#fff;
			margin-bottom:1vh;
			padding:3vw;
		}
		
		.fenleibd>p{
			text-align: left;
			font-size: 0.4rem;
			font-weight: bold;
			margin-bottom: 1vh;
		}
		.bdsan{
			width: 100%;
			height: 80%;
			/* border: 1px solid #000; */
		}
		.bdsan p{
			font-size: 0.3rem;
			color:#4d525d
		}
		.bdsan>ul{
			width: 100%;
			height: 100%;
		}
		.bdsan li{
			width:33.3%;
			height: 100%;
			float: left;
			text-align: center;
			margin-left: 0vw;
		}
		.bdsan li>img{
			width:80%;
			display: block;
			margin: 0vh auto 1vh;
		}
		.remen{
			width: 100%;
			height:26vh !important;
			padding: 2vw;
			background: #fff;
			position: relative;
		}
		.shudanul{
			width: 99%;
		}
		.shudanul>li{
			display: block;
			border-top: 1px solid #f0f0f0;
			line-height:3vh;
		}
		.shudanul>li:nth-of-type(1){
			border:0px
		}
		.shudantxt{
			font-size: 0.2rem;
			text-align: left;
			margin-top: 2vh;
			margin-left: 1vw;
			margin-bottom: 2vh;
			color: #4d525d;
			/* background: pink; */
		}
		.youarrow{
			font-size: 0.2rem;
			position: absolute;
			right: 4vw;
			top:1vh
		}
		.xiaoarrow{
			display: inline-block;
			margin-left: 0.5vw;
			width: 1.5vw;
			height: 1.3vh;
		/* 	background: lime; */
			background: url('../../images/fenleiarrow.png') center center no-repeat;
			background-size: 100% 100%;
		}
		
		.arrow{
			display: inline-block;
			width: 2.5vw;
			height: 1.5vh;
			background: lime;
			/* margin-bottom: 50%; */
			position: absolute;
			right: 1.5vw;
			top:50%;
			transform: translateY(-50%);
			background: url('../../images/fenleiarrow.png') center center no-repeat;
			background-size: 60% 60%;
		}
		.list{
			width: 100vw;
			height:36vh !important;
			padding: 2vw;
			background: #fff;
		}
		.listp{
			width: 40%;
			font-size: 0.35rem;
			font-weight:1000;
			font-family: 'microsoft yahei',Verdana,Arial,Helvetica,sans-serif;
			text-align: left;
			/* background: lime; */
		}
		
		.listul{
			width: 75%;
			height: 80%;
			margin-top: 1vh;
		}
		.listul>li{
			width: 33.3%;
			float: left;
			margin-bottom: 1vh;
		}
		.listul p{
			font-size: 0.2rem;
		}
		.listul>li>img{
			width: 80%;
			display: block;
			margin: 0px auto;
		}
		
		.neiron{
			width: 100%;
			height:30vh !important;
			padding: 2vw;
			background: #fff;
			position: relative;
		}
		.neironul{
			width: 99%;
		}
		.neironul>li{
			width: 31.3%;
			border-top: 1px solid #f0f0f0;
			line-height:3vh;
			text-align: center;
			float: left;
			margin:0.1vh
		}
		.neironul>li>.shudantxt{
			text-align: center;
			border-right: 1px solid #f0f0f0;
			margin: 1vh 0px 1vh;
			font-size: 0.1rem;
		}
		.neironul>li:nth-of-type(3n)>p{
			border-right: 0px
		}
		.neironul>li:nth-of-type(1){
			border:0px
		}
		.neironul>li:nth-of-type(2){
			border:0px
		}
		.neironul>li:nth-of-type(3){
			border:0px
		}
		
		
		
		
		
		
		
		
		
	</style>


	<script>
		export default{
			data(){
				return{
					bangdan:[],
					shudan:[],
					neiron:[],
					num:0,
					msg:'tushu'
				}
			},
			methods:{
				
			},
			mounted(){
				var _this=this;
				
				this.$http.get('./data/tongshudata.json')
				.then(function(response){
					console.log(response.data)
					_this.bangdan=response.data.bangdan;
					_this.shudan=response.data.shudan;
					_this.neiron=response.data.neiron;
				})
				.catch(function(error){
					console.log(error);
				})
			}
		}
		
	</script>