import Vue from 'vue'
import Vuex from 'vuex'

//使用中间件使用Vuex
Vue.use(Vuex);
//需要让外部使用实例化的store对象 export就是导出

export let store = new Vuex.Store({
    //相当于vue实例中的data，数据都放在这里
    state:{
        devaloperName:'jiangziyu'
    },
    //相当于vue实例中的computed，计算属性，依赖数据
    getters:{},
    //相当于vue实例中的methods，方法操作数据等
    mutations:{},
    //相当于vue实例中的methods的异步版本,一般通过actions调用mutations
    actions:{}
})