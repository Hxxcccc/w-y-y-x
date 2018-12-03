/*
  包含n个接口请求函数的模块
 */

import ajax from './ajax'

//banner
export const  reqFocusList = () => ajax('/focusList')
//品牌制造商直供
export const  reqTagList = () => ajax('/tagList')
//新品首发
export const  reqNewItemNewUserList = () => ajax('/newItemNewUserList')
//人气推荐
export const  reqPopularItemList = () => ajax('/popularItemList')
//专题精选
export const reqTopicList = () => ajax('/topicList')
//好物
export const reqCateList = () => ajax('/cateList')

//严选推荐
export const reqBanner = () => ajax('/banner')

