import LoaderController from '../controllers/LoaderController.js'
import ErrorController from '../controllers/ErrorController.js'
import EditProductController from '../controllers/EditProductController.js'

window.addEventListener('DOMContentLoaded', (event) => {
    const elementLoader = document.querySelector('.lds-dual-ring')
    new LoaderController(elementLoader)
    
    const errorElement = document.querySelector('.error-notifier')
    new ErrorController(errorElement)

    const formElement = document.querySelector('.new-product')
    const editProduct = new EditProductController(formElement)
    editProduct.loadProduct()
})