<template>
	<div id="app">
		<div class="top-content">
			<c-header></c-header>
		</div>
		<div class="main-content">
			<router-view/>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Header from '@/components/Header'

Vue.use(ElementUI)

export default {
	name: 'App',
	components: {
		'c-header': Header
	}
}
</script>

<style>
* {
	margin: 0;
	padding: 0;
}
body {
	background-color: #e1e1e1;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
}
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}
.clearfix:after {
	display: block;
	content: '';
	visibility: hidden;
	height: 0;
	clear: both;
}
.el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #80bd01 !important;
}
.el-pagination.is-background .el-pager li:not(.disabled):hover {
    color: #80bd01 !important;
}
.main-content {
	width: 90%;
	max-width: 1400px;
	min-width: 960px;
	margin: 15px auto;
	min-height: 400px;
}
.main {
	margin-right: 305px;
}
</style>
