const url = 'https://gist.githubusercontent.com/NandoLT/6865bc61e7424d17ebe6ef691155538b/raw/39a4e1fa92f64d2a3bb42368bcf4ca3d8fe1eb56/products.json'

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