import * as api from '@/api'
import * as types from '@/store/mutation-types'

export async function fetchTopicList ({ commit }, payload) {
	let result = await api.fetchTopicList(payload)
	
	if (result.status >= 200 && result.status < 300) {
		commit(types.FETCH_TOPIC_LIST, {
			topicList: result.data.data
		})
	}
}

export async function fetchTopicDetail ({ commit }, payload) {
	let result = await api.fetchTopicDetail(payload)
	
	if (result.status >= 200 && result.status < 300) {
		commit(types.FETCH_TOPIC_DETAIL, {
			topicDetail: result.data.data
		})
	}
}