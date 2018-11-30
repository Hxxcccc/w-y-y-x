/*
  用于发送ajax请求的函数
 */
/*
                    接口四个请求参数,3个决定请求的  所以传三个参数 发送ajax请求时需要这三个参数
                    url 请求地址  data 请求参数  method 请求方式
 */

import axios from 'axios'

export default function ajax(url,data={},method='GET') {
  return new Promise((resolve, reject) => {
    let promise
    if(method==='GET') {
      //return axios.get(url, {params: data})
      // 拼query请求参数串
      let queryStr = ''
      Object.keys(data).forEach(key => {
        const value = data[key]
        queryStr += `${key}=${value}&`
      })
      // let queryStr = Object.keys(data).reduce((pre, key) => pre + `${key}=${data[key]}&`, '')

      if(queryStr!=='') { // username=tom&password=123&
        queryStr = queryStr.substring(0, queryStr.length-1) // username=tom&password=123
        url += '?' + queryStr  // /login/?username=tom&password=123
      }
      promise = axios.get(url) // url?username=tom&password=123
      // return axios.get(url, {params: data}) // url?username=tom&password=123
    } else {
      promise = axios.post(url, data)
    }
    promise
      .then((response) => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
  // async function test() {
  //   const result = await ajax('/login',{name,'Tom',pwd:'123'},'POST')
  //   if(result.code === 0){
  //
  //   }
  // }

}
