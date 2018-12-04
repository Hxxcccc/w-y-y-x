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
  RECEIVE_BANNER,
  RECEIVE_COLUMN,
  RECEIVE_RECOMMEND,
  RECEIVE_TENFIFTEEN,
  RECEIVE_ZHEN,
  RECEIVE_YXLOOK,
  RECEIVE_YXWEEK
} from './mutatios-types'

import {
  reqFocusList,
  reqTagList,
  reqNewItemNewUserList,
  reqPopularItemList,
  reqTopicList,
  reqCateList,
  reqBanner,
  reqColumn,
  reqRecommend,
  reqTenfifteen,
  reqZhen,
  reqYxLook,
  reqYxWeek
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

  //banner下的column
  async getColumn ({commit}){
    const result = await reqColumn()
    if(result.code === 0) {
      const column = result.data
      commit(RECEIVE_COLUMN, {column})
    }
  },

  //为你推荐 (recommendOne)
  async getRecommend ({commit}){
    const result = await reqRecommend()
    if(result.code === 0) {
      const recommend = result.data
      commit(RECEIVE_RECOMMEND, {recommend})
    }
  },

  //十点一刻
  async getTenfifteen ({commit}){
    const result = await reqTenfifteen()
    if(result.code === 0) {
      const tenfifteen = result.data
      commit(RECEIVE_TENFIFTEEN, {tenfifteen})
    }
  },

  //臻品
  async getZhen ({commit}){
    const result = await reqZhen()
    if(result.code === 0) {
      const zhen = result.data
      commit(RECEIVE_ZHEN, {zhen})
    }
  },

  //look
  async getYxLook ({commit}){
    const result = await reqYxLook()
    if(result.code === 0) {
      const yxLook = result.data
      commit(RECEIVE_YXLOOK, {yxLook})
    }
  },

  //更多精彩
  async getYxWeek ({commit}){
    const result = await reqYxWeek()
    if(result.code === 0) {
      const yxWeek = result.data
      commit(RECEIVE_YXWEEK, {yxWeek})
    }
  },
}




