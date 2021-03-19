import { createStore } from 'vuex'

export default createStore({
  state: {
    consName:'白羊座',
    type:'today',
    errorCode:0,
    today: {
      // name:'射手座',
      // all:'0'
    },
    tomorrow: {},
    month: {
      // name:'金牛座',
    },
    week: {},
    year: {},
  },
  mutations: {
    //设置星座名称
    setConsName(state,name) {
      state.consName=name
    },
    //设置日期类型
    setType(state,type) {
      state.type=type
    },
    //设置每个时间段的数据
    setTimeData(state,TiemData) {
      state[state.type]=TiemData
    },
    //设置错误码
    seterrorCode(state,errorCode) {
      state.errorCode=errorCode
    }
    
  },
  actions: {
  },
  modules: {
  }
})
