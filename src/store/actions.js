/*
  通过mutation间接更新state多个方法的对象
 */
import {
  RECEIVE_FOCUSLIST,
  RECEIVE_TAGLIST,
  RECEIVE_NEWITEMNEWUSERLIST,
  RECEIVE_POPULARITEMLIST,
  RECEIVE_TOPICLIST,
  RECEIVE_CATELIST,
  RECEIVE_BANNER
} from './mutatios-types'

import {
  reqFocusList,
  reqTagList,
  reqNewItemNewUserList,
  reqPopularItemList,
  reqTopicList,
  reqCateList,
  reqBanner
} from '../api'

export default {
  //异步获取轮播图列表
  async getFocusList ({commit}){
    const result = await reqFocusList()
    if(result.code === 0) {
      const focusList = result.data
      commit(RECEIVE_FOCUSLIST, {focusList})
    }
  },

  //异步获取品牌制造商特供
  async getTagList ({commit}){
    const result = await reqTagList()
    if(result.code === 0) {
      const tagList = result.data
      commit(RECEIVE_TAGLIST, {tagList})
    }
  },

  //新品首发
  async getNewItemNewUserList ({commit}){
    const result = await reqNewItemNewUserList()
    if(result.code === 0) {
      const newItemNewUserList = result.data
      commit(RECEIVE_NEWITEMNEWUSERLIST, {newItemNewUserList})
    }
  },

  //人气推荐
  async getPopularItemList ({commit}){
    const result = await reqPopularItemList()
    if(result.code === 0) {
      const popularItemList = result.data
      commit(RECEIVE_POPULARITEMLIST, {popularItemList})
    }
  },

  //专题精选
  async getTopicList ({commit}){
    const result = await reqTopicList()
    if(result.code === 0) {
      const topicList = result.data
      commit(RECEIVE_TOPICLIST, {topicList})
    }
  },

  //好物
  async getCateList ({commit}){
    const result = await reqCateList()
    if(result.code === 0) {
      const cateList = result.data
      commit(RECEIVE_CATELIST, {cateList})
    }
  },

  //严选推荐
  async getBanner ({commit}){
    const result = await reqBanner()
    if(result.code === 0) {
      const banner = result.data
      commit(RECEIVE_BANNER, {banner})
    }
  },
}




