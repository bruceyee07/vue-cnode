import { CLICK_TAB } from '@/store/mutation-types'

const state = {
	tab: 'all'
}

const mutations = {
	[CLICK_TAB](state, payload) {
		state.tab = payload.tab
	}
}

export default {
	state,
	mutations
}