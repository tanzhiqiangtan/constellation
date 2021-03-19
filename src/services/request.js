
import axios from './index'
import key from '../configs/keys'


//请求数据 
function getData(store) {
     axios.get('/constellation/getAll', {
        params: {
            key,
            consName:store.state.consName,
            type:store.state.type
        }

    }).then(result=> {
        //状态码正常
        if (result.data.error_code===0) {
            //用数据更新store
            store.commit('setTimeData',result.data)
        }
        else {
            //处理错误
            console.log(result.data.error_code)
            store.commit('seterrorCode',result.data.error_code)

        }
    }).catch(error=> {
        //网络请求错误
        console.log(error)

    })
}

export {getData}