<template>
	<div class="topic-list-container">
		<div class="topic-list-content">
			<div class="cell" v-for="item in getTopicList.topicList">
				<router-link :to="'/topic/' + item.id" class="item-title">{{ item.title }}</router-link>
			</div>
		</div>
		<el-pagination
            background
            layout="prev, pager, next"
            @current-change="handleCurrentChange"
            @prev-click="handlePrevClick"
            @next-click="handleNextClick"
            :current-page="current"
            :page-size="20"
            :total="totalCount">
        </el-pagination>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { Pagination } from 'element-ui'

	export default {
		name: 'topic-list',
		components: {
			'el-pagination': Pagination
		},
		data() {
			return {
				current: 1,
				totalCount: 999
			}
		},
		computed: {
			...mapGetters([
				'getTopicList',
				'getNavBar'
			])
		},
		created() {
			this.fetchTopicList()
		},
		methods: {
			async fetchTopicList() {
				this.$store.dispatch('fetchTopicList', {
					tab: this.$store.state.navBar.tab,
					page: this.current
				})
			},
			handleCurrentChange(pageNo) {
	            this.current = pageNo
	            this.fetchTopicList()
	        },
	        handlePrevClick() {
	            this.current--
	            this.handleCurrentChange(this.current)
	        },
	        handleNextClick() {
	            this.current++
	            this.handleCurrentChange(this.current)
	        }
		}
	}
</script>

<style scoped>
	.topic-list-content {
		min-height: 600px;
		margin-bottom: 20px;
	}
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