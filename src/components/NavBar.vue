<template>
	<div class="tab-list">
		<router-link v-for="item in tabs" :key="item.value" :to="{ name: 'index', params: { tab: item.value }}" v-bind:class="['tab-item', item.value == activeTab ? 'active' : '']">{{ item.name }}</router-link>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'

	export default {
		name: 'topic-list',
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
				],
				activeTab: 'all'
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
		text-decoration: none;
		font-size: 14px;
		line-height: 1;
	}
	.tab-item.active {
		background-color: #80bd01;
		color: #fff;
		padding: 3px 4px;
		border-radius: 3px;
	}
</style>