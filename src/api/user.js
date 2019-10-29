//后台账户管理
import { Base } from './base'
import request from '@/utils/request';
//实例化基础类
let base =  new Base('users')
//其他方法,属性
/*base.test = () => {
  console.log('test')
}*/
base.getUserState = () => {
  return request({
    url:'/getUserState',
    method:'get'
  })
}
export var Api = base
