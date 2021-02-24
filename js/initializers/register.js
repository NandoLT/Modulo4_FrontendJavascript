import LoaderController from '../controllers/LoaderController.js'
import ErrorController from '../controllers/ErrorController.js'
import RegisterFormController from '../controllers/RegisterFormController.js'
import SuccesController from '../controllers/SuccesController.js'

window.addEventListener('DOMContentLoaded', (event) => {
    const elementLoader = document.querySelector('.lds-dual-ring')
    new LoaderController(elementLoader)
    
    const errorElement = document.querySelector('.error-notifier')
    new ErrorController(errorElement)

    const succesElement = document.querySelector('.register-succes')
    new SuccesController(succesElement)

    const registerElement = document.querySelector('form')
    new RegisterFormController(registerElement)
})