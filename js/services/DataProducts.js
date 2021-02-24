import {BASE_URL} from '../utils/dataHelpers.js'

export default {
    
    getProducts: async function() {
        const url = `${BASE_URL}/api/products`
        const response = await fetch(url)
        const data = await response.json()
        if(response.ok) {
            return data
        } else {
            console.log(response)
            throw new Error(response)
        }
    }
}