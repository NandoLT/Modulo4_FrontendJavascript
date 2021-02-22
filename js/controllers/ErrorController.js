import BaseController from './BaseController.js'
import {errorView} from '../views/errorView.js'


export default class ErrorController extends BaseController {

    showError(error) {
        this.element.innerHTML = errorView(error)
        this.element.classList.remove('hidden')
        this.element.addEventListener('click', (event) => {
            if(event.target == this.element || event.target.classList.contains('delete')) {
                this.element.classList.add('hidden')
            }
        })
        document.addEventListener('keyup', (event) => {
            if(event.code == 'Escape') {
                this.element.classList.add('hidden')
            }
        })
    }
}