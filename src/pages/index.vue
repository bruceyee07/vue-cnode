<template>
	<div class="main">
		<nav-bar></nav-bar>
		<topic-list></topic-list>
	</div>
</template>

<script>
	import NavBar from '@/components/NavBar'
	import TopicList from '@/components/TopicList'

	export default {
		name: 'index',
		data() {
			return {
				
			}
		},
		components: {
			'nav-bar': NavBar,
			'topic-list': TopicList
		}
	}
</script>

<style scoped>
	
</style>