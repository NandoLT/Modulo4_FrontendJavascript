const url = 'https://gist.githubusercontent.com/NandoLT/6865bc61e7424d17ebe6ef691155538b/raw/6a2345e685d1c3b9f95e84ee45e0ab3dbbf41562/products.json'
export default {
    
    getProducts: async function() {

        const response = await fetch(url)
        if(response.ok) {
            const data = response.json()
            return data
        } else {
            //devolver un error
            throw new Error(`HTTP Error: ${response.status}`)
        }
    }
}