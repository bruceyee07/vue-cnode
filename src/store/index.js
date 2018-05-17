import Vue from 'vue'
import Vuex from 'vuex'
import * as api from '@/api'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
	topicList: []
}

const getters = {
	topicList: state => state.topicList
}

const mutations = {
	fetchTopicList (state, payload) {
		state.topicList = payload.topicList
	}
}

const actions = {
	async fetchTopicList({ commit }, payload) {
		let result = await api.fetchTopicList(payload)
		
		if (result.status >= 200 && result.status <300) {
			commit('fetchTopicList', {
				topicList: result.data.data
			})
		}
	}
}

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions,
	strict: debug
})