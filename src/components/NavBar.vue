<template>
	<div class="tab-list">
		<span 
			v-for="item in tabs" 
			:key="item.value" 
			:data-value="item.value"
			@click="handleClickTab"
			v-bind:class="['tab-item', item.value == getNavBar.tab ? 'active' : '']"
		>
			{{ item.name }}
		</span>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'

	export default {
		name: 'navbar',
		data() {
			return {
				tabs: [
					{
						name: '全部',
						value: 'all'
					},
					{
						name: '精华',
						value: 'good'
					},
					{
						name: '分享',
						value: 'share'
					},
					{
						name: '问答',
						value: 'ask'
					},
					{
						name: '招聘',
						value: 'job'
					}
				]
			}
		},
		computed: {
			...mapGetters([
				'getNavBar'
			])
		},
		methods: {
			handleClickTab($event) {
				this.$store.dispatch('fetchTopicList', {
					tab: $event.target.dataset.value,
					page: 1
				})

				this.$store.dispatch('clickTab', {
					tab: $event.target.dataset.value
				})
			}
		}
	}
</script>

<style scoped>
	.tab-list {
		height: 20px;
		padding: 10px;
    	background-color: #f6f6f6;
    	border-radius: 3px 3px 0 0;
	}
	.tab-item {
		margin: 0 10px;
		color: #80bd01;
		font-size: 14px;
		line-height: 1;
		cursor: pointer;
	}
	.tab-item.active {
		background-color: #80bd01;
		color: #fff;
		padding: 3px 4px;
		border-radius: 3px;
	}
</style>