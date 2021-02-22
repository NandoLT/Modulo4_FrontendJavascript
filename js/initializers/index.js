import ProductListController from '../controllers/ProductListController.js'
import LoaderController from '../controllers/LoaderController.js'
import BaseController from '../controllers/BaseController.js'


window.addEventListener('DOMContentLoaded', async (event) => {
    const elementLoader = document.querySelector('.lds-roller')
    const loaderController = new LoaderController(elementLoader)
    

    const elementProducts = document.querySelector('.products-list')
    const productController = new ProductListController(elementProducts)
    productController.loader = loaderController
    productController.loadProducts()
})
