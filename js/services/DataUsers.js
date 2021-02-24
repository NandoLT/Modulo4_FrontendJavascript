import {BASE_URL} from '../utils/dataHelpers.js'

export default {

        registerUSer: async function(user) {
            const config = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            }
            const url = `${BASE_URL}/auth/register`
            const response = await fetch(url, config)
            const data =  await response.json()
            if(response.ok) {
                return data
            } else {
                throw new Error(data.message || response)
            }
        }
}