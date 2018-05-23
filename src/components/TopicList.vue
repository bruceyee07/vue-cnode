<template>
	<div class="topic-list-container">
		<div class="cell" v-for="item in getTopicList.topicList">
			<router-link :to="'/topic/' + item.id" class="item-title">{{ item.title }}</router-link>
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
	.item-title {
		text-decoration: none;
		color: #333;
	}
	.item-title:visited {
		color: #888;
	}
</style>