<template>
	<div class="header">
		<div class="header-inner">
			<div class="container">
				<router-link class="brand" to="/">
					<img src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="cnodejs-logo">
				</router-link>
				<ul class="nav-pull-right">
					<li><router-link to="/">首页</router-link></li>
					<li><router-link to="/signin">登入</router-link></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'

	export default {
		name: 'top-header',
		data() {
			return {
				
			}
		}
	}
</script>

<style scoped>
	.header {
		margin-bottom: 0;
    	z-index: 9;
    	width: 100%;
   		position: relative;
    	background: #444;
    	font-size: 13px;
	}
	.header-inner {
		background: 0 0;
		border-radius: 0;
		border: none;
		box-shadow: none;
		width: 90%;
		margin: auto;
		padding: 5px;
	}
	.brand {
		display: inline-block;
		width: 120px;
    	padding: 3px 20px;
    	height: 34px;
    	line-height: 34px;
    	color: #ccc;
    	font-weight: 700;
    	margin-left: -20px;
	}
	.nav-pull-right {
		float: right;
		margin: 0 10px 0 0;
	}
	.nav-pull-right li {
		float: left;
	}
	.nav-pull-right a {
		text-decoration: none;
		color: #ccc;
		float: none;
		display: inline-block;
    	padding: 10px 15px;
	}
</style>