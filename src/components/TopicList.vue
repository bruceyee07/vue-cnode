<template>
	<div class="topic-list-container">
		<div v-for="item in getTopicList.topicList">
			<h4>{{ item.title }}</h4>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'

	export default {
		name: 'topic-list',
		computed: {
			...mapGetters([
				'getTopicList'
			])
		},
		created() {
			this.$store.dispatch('fetchTopicList', {
				tab: 'all',
				page: 1
			})
		}
	}
</script>

<style scoped>
	
</style>