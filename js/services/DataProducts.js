import {TOKEN_KEY, BASE_URL} from '../utils/dataHelpers.js'
import DataMethods from './DataMethods.js'
import DataUsers from './DataUsers.js'


export default {
    getToken: async function() {
        return localStorage.getItem(TOKEN_KEY)
    },

    getProducts: async function(query=null) {
        const currentUser = await DataUsers.getUser()
        const url = `${BASE_URL}/api/products?_expands=users&${query}`
        const response = await fetch(url)
        const data = await response.json()
        if(response.ok) {
            return data.map(product => {
                return {
                    name: product.name || null,
                    description: product.description || null,
                    type: product.type,
                    price: product.price,
                    tags: product.tags,
                    image: product.image || null,
                    id: product.id,
                    userId: product.userId,
                    canBeDeleted: currentUser ? currentUser.userId === product.userId : false,
                    canBeEdit: currentUser ? currentUser.userId === product.userId : false
                }
            })
        } else {
            console.log(response)
            throw new Error(response)
        }
    },

    saveProduct: async function(newProduct) {
        const url = `${BASE_URL}/api/products`
        if(newProduct.image) {
            const imageURL = await this.uploadImage(newProduct.image)
            newProduct.image = imageURL
        }
        return await DataMethods.post(url, newProduct)
    },

    uploadImage: async function(image) {
        const form = new FormData()
        form.append('file', image)
        const url = `${BASE_URL}/upload`
        const response = await  DataMethods.post(url, form, false)
        return response.path || null
    },

    deleteProduct: async function(product) {
        const url = `${BASE_URL}/api/products/${product.id}`
        return await DataMethods.delete(url)
    }, 

    updateProduct: async function(product) {
        const url = `${BASE_URL}/api/products/${product.id}`
        if(product.image) {
            const imageURL = await this.uploadImage(product.image)
            product.image = imageURL
        }
        return await DataMethods.put(url, product)
    }
}