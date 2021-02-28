import DataUsers from './DataUsers.js'

export default {
    
    post: async function(url, postData, json=true){
        return await this.request('POST', url, postData, json)
    },

    delete: async function(url){
        return await this.request('DELETE', url, {})
    },

    get: async function(url){
        return await this.request('GET', url, {})
    },

    put: async function(url, putData, json=true){
        return await this.request('PUT', url, putData, json)
    },


    request: async function(method, url, postdata, json=true) {
        const config = {
            method: method,
            headers: {},
            body: null
        }

        if(json) {
            config.headers['Content-Type'] =  'application/json'
            config.body = JSON.stringify(postdata)
        } else {
            config.body = postdata
        }

        const token = await DataUsers.getToken()
        if(token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        const response = await fetch(url, config)
        const data =  await response.json()
        if(response.ok) {
            return data
        } else {
            throw new Error(data.message || response)
        }
    }
}