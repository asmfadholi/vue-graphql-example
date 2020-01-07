import Api from './Api'

export default {
    listExample() {
        const api = Api.generateApi()
        const req = {
            query: `
                            {
                              Media(id: 1) {
                                idMal,
                                duration
                              }
                            }
                        `
        }
        return api.post('', req)
            .then(res => res)
    },
}