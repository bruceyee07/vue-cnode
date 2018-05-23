import { FETCH_TOPIC_DETAIL } from '@/store/mutation-types'

const state = {
	topicDetail: null
}

const mutations = {
	[FETCH_TOPIC_DETAIL](state, payload) {
		state.topicDetail = payload.topicDetail
	}
}

export default {
	state,
	mutations
}