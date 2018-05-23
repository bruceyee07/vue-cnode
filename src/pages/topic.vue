<template>
	<div class="main">
		<topic-detail></topic-detail>
	</div>
</template>

<script>
	import TopicDetail from '@/components/TopicDetail'

	export default {
		name: 'detail',
		data() {
			return {
				
			}
		},
		components: {
			'topic-detail': TopicDetail
		}
	}
</script>

<style scoped>
	
</style>