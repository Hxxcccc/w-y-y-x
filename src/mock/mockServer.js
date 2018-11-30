import Mock from 'mockjs'
import dataHome from './datahome'

//暴露数据
Mock.mock('/cateList', {code: 0, data: dataHome.cateList})
Mock.mock('/flashSaleIndexVO', {code: 0, data: dataHome.flashSaleIndexVO})



