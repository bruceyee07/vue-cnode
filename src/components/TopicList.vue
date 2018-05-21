<template>
	<div class="topic-list-container">
		<div class="cell" v-for="item in getTopicList.topicList">
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
	.cell {
		padding-right: 10px;
    	background: #fff;
    	border-top: 1px solid #f0f0f0;
    	position: relative;
    	padding: 10px 0 10px 10px;
    	font-size: 14px;
	}
	.cell:nth-child(1) {
		border-top: none;
	}
</style>