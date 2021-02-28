import LoaderController from '../controllers/LoaderController.js'
import ErrorController from '../controllers/ErrorController.js'
import ProductDetailController from '../controllers/ProductDetailController.js'

window.addEventListener('DOMContentLoaded', (event) => {
    const elementLoader = document.querySelector('.lds-dual-ring')
    new LoaderController(elementLoader)
    
    const errorElement = document.querySelector('.error-notifier')
    new ErrorController(errorElement)

    const productDetail = document.querySelector('.products-list')
    const productDetailController = new ProductDetailController(productDetail)
    productDetailController.loadProduct() 
})
