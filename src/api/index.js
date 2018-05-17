import axios from 'axios'

const HOST = 'https://cnodejs.org/api/v1'

export const TOPICS_URL = HOST + '/topics'
export const TOPIC_DETAIL_URL = HOST + '/topic'

export async function fetchTopicList (payload) {
	return await axios.get(TOPICS_URL, {
		params: {
			tab: payload.tab,
			page: payload.page
		}
	})
}
