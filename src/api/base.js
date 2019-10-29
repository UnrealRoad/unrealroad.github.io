//基础方法
import request from '@/utils/request';
export  class Base {
  constructor(url){
    this.url = url;
    this.query = {
      pageSize:10,
      page:1
    }
    this.BASE_URL = ''
  }


}


