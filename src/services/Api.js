import axios from 'axios'

export default {
    generateApi() {
        const api = axios.create({
            baseURL: process.env.VUE_APP_BASE,
            headers: {
                'Content-Type': 'application/json'
                    // 'Content-Type': 'multipart/form-data',
                    // 'X-Custom-Header': 'foobar',
                    // 'Authorization': 'asdsadasd0a0sd0asd',
                    // 'user-id': localStorage.getItem('user_id')
            }
        })

        return api
    },
    generateApiLogin() {
        const api = axios.create({
            baseURL: process.env.VUE_APP_BASE,
            headers: {
                // 'Content-Type': 'multipart/form-data',
                // 'user-id': localStorage.getItem('user_id')
            }
        })

        return api
    }
}