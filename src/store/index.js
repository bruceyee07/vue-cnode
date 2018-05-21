import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from '@/store/getters'
import * as actions from '@/store/actions'

import topicList from '@/store/modules/topicList'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	actions,
	getters,
	modules: {
		topicList
	},
	strict: debug
})