import {BASE_URL, TOKEN_KEY, URL_HISTORY} from '../utils/dataHelpers.js'
import DataMethods from './DataMethods.js'

export default {

        registerUser: async function(user) {
            const url = `${BASE_URL}/auth/register`
            return await DataMethods.post(url, user)
        },

        loginUser: async function(user) {
            const url = `${BASE_URL}/auth/login`
            return await DataMethods.post(url, user)
        },

        saveToken: async function(token) {
            localStorage.setItem(TOKEN_KEY, token)
        },

        getToken: async function() {
            return localStorage.getItem(TOKEN_KEY)
        },

        deleteToken: async function() {
            localStorage.removeItem(TOKEN_KEY)
        },

        isUserLogged: async function() {
            const token = await this.getToken()
            return token !== null
        },

        getUser: async function() {
            try {
                const token = await this.getToken()
                const tokenParts = token.split('.')
                if(tokenParts.length !== 3) {
                    return null
                } 
                const payload = tokenParts[1]
                const jsonstr = atob(payload)
                const {userId, username} = JSON.parse(jsonstr)
                return {userId, username}
            } catch (error) {
                return null
            }     
        },

        saveUserActivity: async function(url) {
            localStorage.setItem(URL_HISTORY, url)
        },

        getUserActivity: async function() {
            return localStorage.getItem(URL_HISTORY)
        },
        
        deleteUserActivity: async function() {
            console.log('entro a borrar url')
            localStorage.removeItem(URL_HISTORY)
        }
}