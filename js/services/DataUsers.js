import {BASE_URL, TOKEN_KEY} from '../utils/dataHelpers.js'

export default {

        post: async function(url, postdata) {
            const config = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postdata)
            }
            const response = await fetch(url, config)
            const data =  await response.json()
            if(response.ok) {
                return data
            } else {
                throw new Error(data.message || response)
            }
        },

        registerUser: async function(user) {
            const url = `${BASE_URL}/auth/register`
            return await this.post(url, user)
        },

        loginUser: async function(user) {
            const url = `${BASE_URL}/auth/login`
            return await this.post(url, user)
        },

        saveToken: async function(token) {
            localStorage.setItem(TOKEN_KEY, token)
        },

        getToken: async function() {
            return localStorage.getItem(TOKEN_KEY)
        }
}