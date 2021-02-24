import BaseController from './BaseController.js'
import {userRegisterSucces} from '../views/succesViews.js'

export default class SuccesController extends BaseController {

    constructor(element) {
        super(element)
        this.attachEventListener()
        this.subscribe(this.events.USER_SUCCES, () => {
            this.userSucces()
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

    userSucces() {
        this.element.innerHTML = userRegisterSucces()
        this.element.classList.remove('hidden')
        this.attachEventListener()
    }
}