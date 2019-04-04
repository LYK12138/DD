	<template>
		<div>
			<router-view></router-view>
			<div class="lyk-footer">
				<ul class="footerul">
					<li>
						<router-link to="/home">
						<span class="iconfont icon-shouye"></span>
						首页
						</router-link>
					</li>
					<li>
						<router-link to="/fenlei">
						<span class="iconfont icon-fenlei liwai1"></span>
						分类
						</router-link>
					</li>
					<li>
						<router-link to="/worth">
						<span class="iconfont icon-gouwu"></span>
						值得买
						</router-link>
					</li>
					<li>
						<router-link to="/shopcar">
						<span class="iconfont icon-gouwuche"></span>
						购物车
						</router-link>
					</li>
					<li>
						<router-link to="/my">
						<span class="iconfont icon-wo liwai"></span>
						我的
						</router-link>
					</li>


				</ul>
			</div>
		</div>
	</template>


	<style scoped>
		*{
			margin:0px;
			padding:0px;
			box-sizing: border-box;
			list-style: none;
		}
		a{
			text-decoration: none;
			color:black;
			width:20%;
		}
		.router-link-active{
			color:red
		}
		.lyk-footer{
			width:100%;
			height:auto;
			position: fixed;
			bottom: 0px;
			z-index:5;
			border-top: 1px solid #ececec;
			background: #fff;
		}
		.footerul{
			padding-top:1px;
			padding-bottom: 1px;
		}
		.footerul>li{
			width: 20%;
			height: 100%;
			font-size: 12px;
			margin:0px;
			float: left;
		}
		.footerul span{
			margin:0px auto;
			display:block;
			font-size: 20px;
			margin-bottom: 1px;
			/* color:black; */
		}
		.footerul .liwai1{
			font-size:22px
		}
		
		html{
			font-size: 40px;
		}
	</style>