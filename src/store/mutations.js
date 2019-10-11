// 定义修改状态操作
import * as types from './mutation-types'

const mutations = {
  [types.CHANGE_DETAIL_LIST_ID] (state, payload) {
    state.detailListId = payload
  }
}

export default mutations
