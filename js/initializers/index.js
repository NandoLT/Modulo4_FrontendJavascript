import ProductListController from '../controllers/ProductListController.js'
import LoaderController from '../controllers/LoaderController.js'
import ErrorController from '../controllers/ErrorController.js'

window.addEventListener('DOMContentLoaded', async (event) => {
    const elementLoader = document.querySelector('.lds-dual-ring')
    const loaderController = new LoaderController(elementLoader)
    

    const elementProducts = document.querySelector('.products-list')
    const productController = new ProductListController(elementProducts)
    productController.loader = loaderController
    productController.loadProducts()


    const errorElement = document.querySelector('.error-notifier')
    const errorController = new ErrorController(errorElement)
    errorController.showError('Que pasa Madafaka...')
})
