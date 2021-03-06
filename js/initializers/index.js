import ProductListController from '../controllers/ProductListController.js'
import LoaderController from '../controllers/LoaderController.js'
import ErrorController from '../controllers/ErrorController.js'

window.addEventListener('DOMContentLoaded', (event) => {
    const elementLoader = document.querySelector('.lds-dual-ring')
    new LoaderController(elementLoader)
    
    const errorElement = document.querySelector('.error-notifier')
    new ErrorController(errorElement)

    const elementProducts = document.querySelector('.products-list')
    const productController = new ProductListController(elementProducts)
    productController.loadProducts() 
})

