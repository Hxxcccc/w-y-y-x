/*
  使用mockjs提供mock数据接口
 */

import Mock from 'mockjs'
import home from './datahome'
import topic from './datatopic'

//暴露数据

//banner
Mock.mock('/focusList', {code: 0, data: home.focusList})
//品牌制造商直供
Mock.mock('/tagList', {code: 0, data: home.tagList})
//新品首发
Mock.mock('/newItemNewUserList', {code: 0, data: home.newItemNewUserList})
//人气推荐
Mock.mock('/popularItemList', {code: 0, data: home.popularItemList})
//专题精选
Mock.mock('/topicList', {code: 0, data: home.topicList})
//好物
Mock.mock('/cateList', {code: 0, data: home.cateList})
//严选推荐
Mock.mock('/banner', {code: 0, data: topic.banner})




//不需要向外暴露任何数据 只需要执行一次





