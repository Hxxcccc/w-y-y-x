/*
  直接更新state多个方法的对象
 */

import {
  RECEIVE_FOCUSLIST,
  RECEIVE_TAGLIST,
  RECEIVE_NEWITEMNEWUSERLIST,
  RECEIVE_POPULARITEMLIST,
  RECEIVE_TOPICLIST,
  RECEIVE_CATELIST
} from './mutatios-types'

export default {
  [RECEIVE_FOCUSLIST] (state, {focusList}) {
    state.focusLists = focusList
  },

  [RECEIVE_TAGLIST] (state, {tagList}) {
    state.tagList = tagList
  },

  [RECEIVE_NEWITEMNEWUSERLIST] (state, {newItemNewUserList}) {
    state.newItemNewUserList = newItemNewUserList
  },

  [RECEIVE_POPULARITEMLIST] (state, {popularItemList}) {
    state.popularItemList = popularItemList
  },

  [RECEIVE_TOPICLIST] (state, {topicList}) {
    state.topicList = topicList
  },

  [RECEIVE_CATELIST] (state, {cateList}) {
    state.cateList = cateList
  },
}

