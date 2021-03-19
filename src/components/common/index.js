//导入组件
import Card from './Card.vue';
import List from './List.vue'
import Summary from './Summary.vue'
//创建一个对象
const plugin= {};

// 对象必须有install方法 ，传入Vue类，
plugin.install = function(Vue) {
  //注册组件为Vue类的全局组件
  Vue.component(Card.name,Card)
  Vue.component(List.name,List)
  Vue.component(Summary.name,Summary)


}
//导出
export default plugin