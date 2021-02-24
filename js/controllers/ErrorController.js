import BaseController from './BaseController.js'
import {errorView} from '../views/errorView.js'

export default class ErrorController extends BaseController {

    constructor(element) {
        super(element)
        this.attachEventListener()
        this.subscribe(this.events.ERROR, (error) => {
            this.showError(error)
        })
    }

    attachEventListener() {
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

    showError(error) {
        if(error.status === 404) {
            window.location.href = '/404.html'
        } else {
            this.element.innerHTML = errorView(error)
            this.element.classList.remove('hidden')
            this.attachEventListener()
        }
        
    }
}   