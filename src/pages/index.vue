<template>
	<div>
		<topic-list></topic-list>
	</div>
</template>

<script>
	import TopicList from '@/components/TopicList'

	export default {
		name: 'index',
		data() {
			return {
				
			}
		},
		components: {
			'topic-list': TopicList
		}
	}
</script>

<style scoped>
	
</style>