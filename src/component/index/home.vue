<template>
	<div class="GGbig">
		<div class="gif"><img src="../../images/redp.gif"></div>
		<div class="GG">
			<img src="../../images/ggleft.png" alt="" class="ggleft">
			<img src="../../images/ggright.png" alt="" class="ggright">
			<span class="X"><img src="../../images/close.png" alt=""></span>
		</div>
		<div class="headerbox">
			<div class="logo">
				<router-link to="/my">
					<img src="../../images/logo1.png">
				</router-link>
			</div>
			<div class="lyksearch">
					<span class="iconfont icon-sousuo"></span>
					进入搜索界面
			</div>
			<div class="caidan">
				<span class="iconfont icon-fenlei"></span>
			</div>
		</div>
		<div class="lyk-lbt">
			<mt-swipe :auto="4000">
			  <mt-swipe-item>
				  <img src="../../images/lbt8.jpg" alt="">
			  </mt-swipe-item>
			  <mt-swipe-item>
				  <img src="../../images/lbt2.jpg" alt="">
			  </mt-swipe-item>
			  <mt-swipe-item>
				  <img src="../../images/lbt3.jpg" alt="">
			  </mt-swipe-item>
			  <mt-swipe-item>
					<img src="../../images/lbt4.jpg" alt="">
			  </mt-swipe-item>
			  <mt-swipe-item>
			  		<img src="../../images/lbt5.jpg" alt="">
			  </mt-swipe-item>
			  <mt-swipe-item>
			  		<img src="../../images/lbt6.jpg" alt="">
			  </mt-swipe-item>
			  <mt-swipe-item>
					<img src="../../images/lbt7.jpg" alt="">
			  </mt-swipe-item>
			   <mt-swipe-item>
			  		<img src="../../images/lbt1.jpg" alt="">
			  </mt-swipe-item>
			</mt-swipe>
		</div>
		
		
		<div class="biggg">
			<img src="../../images/biggg.jpg" alt="">
		</div>
		
		<div class="shi">
			<ul>
				<li v-for="(v,i) in list">
					<img :src="v.shi" alt="">
				</li>
			</ul>
		</div>
		
		
		
		<div class="ppjback">
		<div class="PPJTOP">
			<img src="../../images/ppj.jpg" alt="">
		</div>
		
			<div class="ppj">
				<mt-swipe :auto="3000" :continuous="true">
				  <mt-swipe-item>
					  <div class="wenzi2">
						  <div class="four">
							  <div class="top">
								  <img src="../../images/lt.jpg" alt=""><img src="../../images/rt.jpg" alt="">
							  </div>
							  <div class="botm">
								  <img src="../../images/lb.jpg" alt=""><img src="../../images/rb.jpg" alt="">
							  </div>
						  </div>
						  <div class="six">
						  	<ul>
								<li v-for="(v,i) in ppj6">
									<img :src="v.ppj" alt="">
								</li>
							</ul>
						  </div>
					  </div>
					  
				  </mt-swipe-item>
				  <mt-swipe-item>
					   <div class="wenzi1">
					  		<ul>
								<li v-for="(v,i) in ppj110">
									<img :src="v.ppj110" alt="">
								</li>
							</ul>		  
					  </div>
				  </mt-swipe-item>
				  <mt-swipe-item>
				  	<div class="wenzi3">
				  			<ul>
								<li v-for="(v,i) in ppj210">
									<img :src="v.ppj210" alt="">
								</li>
							</ul>	  					  
				  	</div>
				  </mt-swipe-item>
				</mt-swipe>
			</div>
		</div>
		
		
		<div class="jrms">
			<img src="../../images/jrms.jpg" alt="">
		</div>
		<div class="djs"></div>
		<div class="mssp">
			<ul>
			<li v-for="(v,i) in jrms">
				<img :src="v.jrms" alt="">
			</li>
			<li>
				<img src="../../images/msspmore.png" alt="">
			</li>
			</ul>
		</div>

		
		<div class="biggg biggg2">
			<img src="../../images/biggg2.jpg" alt="">
		</div>
		
		<div class="wph">
			<div class="wphtop">
				<img src="../../images/wph.jpg" alt="">
			</div>
			<div class="wphp"><p>每日00:00上新<span>></span></p></div>
			<div class="wphsp">
				<ul>
					<li class="wphbig">
						<img src="../../../images/wphbig.jpg" alt="">
					</li>
					<li v-for="(v,i) in wph">
						<p>{{v.title}}</p>
						<p class="wphp2">{{v.zhekou}}</p>
						<img :src="v.src" alt="">
					</li>
				</ul>
			</div>
		</div>
		<div class="wph tsc">
			<div class="wphtop">
				<img src="../../images/tsc.jpg" alt="">
			</div>
			<div class="wphp"><p>当当书城<span>></span>电子书<span>></span>网络文学<span>></span></p></div>
			<div class="tsgg"><img src="../../images/tsgg.jpg" alt=""></div>
			<div class="wphsp">
				<ul>
					<li v-for="(v,i) in tsc">
						<p class="p1">{{v.title}}</p>
						<p class="p2">{{v.zhekou}}</p>
						<img :src="v.src" alt="">
					</li>
				</ul>
			</div>
		</div>
		<div class="wph tsc">
			<div class="wphtop">
				<img src="../../images/fzxb.jpg" alt="">
			</div>
			<div class="wphp"><p>服装品牌榜单<span>></span>服装上新<span>></span>服装馆<span>></span></p></div>
			<div class="tsgg"><img src="../../images/fzxbgg.jpg" alt=""></div>
			<div class="wphsp">
				<ul>
					<li v-for="(v,i) in fzxb">
						<img :src="v.src" alt="">
					</li>
				</ul>
			</div>
		</div>

		<div class="wph tsc ddcs">
			<div class="wphtop">
				<img src="../../images/ddcs.jpg" alt="">
			</div>
			<div class="wphp"><p>当当超市<span>></span>食品榜单<span>></span>美妆榜单<span>></span>家居榜单<span>></span></p></div>
			<div class="tsgg"><img src="../../images/ddcsgg.jpg" alt=""></div>
			<div class="wphsp">
				<ul>
					<li v-for="(v,i) in ddcs">
					<span>
						<p class="p1">{{v.title}}</p><br>
						<p class="p2">{{v.zhekou}}</p>
					</span>
						<img :src="v.src" alt="">
					</li>
				</ul>
			</div>
		</div>

		<div class="wph tsc ddcs et">
			<div class="wphtop">
				<img src="../../images/et.jpg" alt="">
			</div>
			<div class="wphp"><p>童装童鞋馆<span>></span>童书馆<span>></span>玩具馆<span>></span></p></div>
			<div class="tsgg"><img src="../../images/etgg.jpg" alt=""></div>
			<div class="wphsp">
				<ul>
					<li v-for="(v,i) in et">
					<span>
						<p class="p1">{{v.title}}</p><br>
						<p class="p2">{{v.zhekou}}</p>
						<p class=p3>{{v.p3}}</p>
					</span>
						<img :src="v.src" alt="">
					</li>
				</ul>
			</div>
		</div>

		<div class="wph tsc ddcs dq">
			<div class="wphtop">
				<img src="../../images/dqc.jpg" alt="">
			</div>
			<div class="wphp"><p>手机数码馆<span>></span>家电馆<span>></span>家电榜单<span>></span>手机榜单<span>></span></p></div>
			<div class="tsgg"><img src="../../images/dqcgg.jpg" alt=""></div>
			<div class="wphsp">
				<ul>
					<li v-for="(v,i) in dqc">
					<span>
						<p class="p1">{{v.title}}</p><br>
						<p class="p2">{{v.zhekou}}</p>
					</span>
						<img :src="v.src" alt="">
					</li>
				</ul>
			</div>
		</div>

		<div class="wph tsc ddcs ys">
			<div class="wphtop">
				<img src="../../images/ys.jpg" alt="">
			</div>
			<div class="tsgg"><img src="../../images/ysgg.jpg" alt=""></div>
			<div class="wphsp">
				<ul>
					<li v-for="(v,i) in ys">
					<span>
						<p class="p1">{{v.title}}</p><br>
						<p class="p2">{{v.zhekou}}</p>
					</span>
						<img :src="v.src" alt="">
					</li>

				</ul>
			</div>
		</div>


		<p class="fenge genju">--根据您的偏好猜您可能喜欢 --</p>

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
		<div class="fenge">--&nbsp&nbsp✧⁺(●˙▾˙●)⁺✧到底了，再拉裤子都掉了 --</div>
		<div class="GG">
			<img src="../../images/ggleft.png" alt="" class="ggleft">
			<img src="../../images/ggright.png" alt="" class="ggright">
			<span class="X"><img src="../../images/close.png" alt=""></span>
		</div>
		<div class="dlzc">
			<p class="left">
				<span>登录</span>
				<span>注册</span>
			</p>
			<p class="right">
				<span class="sp1"><img src="../../images/toplittle.png" alt=""></span>
				<span>TOP</span>
			</p>
		</div>
		<div class="zhushi">
			<div class="zhushi2">
				<span>提建议</span>
				<span>触屏版</span>
				<span>电脑版</span>
				<span>帮助</span>
			
				<p>Copyright&copy 2019 北京当当网信息技术有限公司<br>北京市朝阳区北三环东路2号，100028</p>

			</div>
		</div>
		<p class="liubai"></p>
		
		
	</div>
	
	
</template>




<style scoped>
	
</style>


<script>
	import '../../css/my/home.css'
	
	export default{
		data(){
			return{
				list:[],
				ppj6:[],
				ppj110:[],
				ppj210:[],
				jrms:[],
				wph:[],
				tsc:[],
				fzxb:[],
				ddcs:[],
				et:[],
				dqc:[],
				ys:[],
				guess:[]
			}
		},
		mounted(){
			var _this=this;
			
			this.$http.get('./data/data1.json')
			.then(function(response){
				console.log(response.data)
				_this.list=response.data.pruduct;
				_this.ppj6=response.data.ppj6;
				_this.ppj110=response.data.ppj110;
				_this.ppj210=response.data.ppj210;
				_this.jrms=response.data.jrms;
				_this.wph=response.data.wph;
				_this.tsc=response.data.tsc;
				_this.fzxb=response.data.fzxb;
				_this.ddcs=response.data.ddcs;
				_this.et=response.data.et;
				_this.dqc=response.data.dqc;
				_this.ys=response.data.ys;
				_this.guess=response.data.guess;
				
			})
			.catch(function(error){
				console.log(error);
			})
			
		}
	}
</script>