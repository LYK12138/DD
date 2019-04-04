	<template>
		<div>
		<h1>这是启动页面</h1>
		<button @click="toIndex()">进入应用</button>
		</div>
	</template>

	<script>
		export default{
			methods:{
				toIndex(){
					this.$router.push('/menu')
				}
			}
		}

	</script>