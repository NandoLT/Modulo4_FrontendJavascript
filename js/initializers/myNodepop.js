import ProductListController from '../controllers/ProductListController.js'
import LoaderController from '../controllers/LoaderController.js'
import ErrorController from '../controllers/ErrorController.js'
import MyNodePopController from '../controllers/MyNodepopController.js'

window.addEventListener('DOMContentLoaded', (event) => {
    const elementLoader = document.querySelector('.lds-dual-ring')
    new LoaderController(elementLoader)
    
    const errorElement = document.querySelector('.error-notifier')
    new ErrorController(errorElement)

    const elementsUserProducts = document.querySelector('.products-list')
    const elementsUserProductsController = new ProductListController(elementsUserProducts)
    elementsUserProductsController.loadProducts()

    const mynodepop = document.querySelector('.container')
    const mynodepopController = new MyNodePopController(mynodepop)
    mynodepopController.mynodepop()
})

