import axios from 'axios'


axios.defaults.headers['Content-Type']='application/x-www-form-urllencoded'

axios.defaults.baseURL='/api'

export default axios