<template>
	<div class="topic-detail-container">
		{{ getTopicDetail.topicDetail && getTopicDetail.topicDetail.title }}
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'

	export default {
		name: 'topic-list',
		computed: {
			...mapGetters([
				'getTopicDetail'
			])
		},
		created() {
			this.$store.dispatch('fetchTopicDetail', {
				id: this.$route.params.topic_id
			})
		}
	}
</script>

<style scoped>
	
</style>