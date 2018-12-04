/*
  直接更新state多个方法的对象
 */

import {
  RECEIVE_FOCUSLIST,
  RECEIVE_TAGLIST,
  RECEIVE_NEWITEMNEWUSERLIST,
  RECEIVE_POPULARITEMLIST,
  RECEIVE_TOPICLIST,
  RECEIVE_CATELIST,
  RECEIVE_BANNER,
  RECEIVE_COLUMN,
  RECEIVE_RECOMMEND,
  RECEIVE_TENFIFTEEN,
  RECEIVE_ZHEN,
  RECEIVE_YXLOOK,
  RECEIVE_YXWEEK
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

  [RECEIVE_BANNER] (state, {banner}) {
    state.banner = banner
  },

  [RECEIVE_COLUMN] (state, {column}) {
    state.column = column
  },

  [RECEIVE_RECOMMEND] (state, {recommend}) {
    state.recommend = recommend
  },

  [RECEIVE_TENFIFTEEN] (state, {tenfifteen}) {
    state.tenfifteen = tenfifteen
  },

  [RECEIVE_ZHEN] (state, {zhen}) {
    state.zhen = zhen
  },

  [RECEIVE_YXLOOK] (state, {yxLook}) {
    state.yxLook = yxLook
  },

  [RECEIVE_YXWEEK] (state, {yxWeek}) {
    state.yxWeek = yxWeek
  },
}

