import axios from '@/axios/index'

export const getFakeData = () => {
    return axios.get('/fake/posts')
}