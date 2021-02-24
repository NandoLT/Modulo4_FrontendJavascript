import BaseController from './BaseController.js'
import {userRegisterSucces} from '../views/succesViews.js'

export default class SuccesController extends BaseController {

    constructor(element) {
        super(element)
        this.subscribe(this.events.USER_SUCCES, () => {
            this.userSucces()
        }) 
    }

    userSucces() {
        this.element.innerHTML = userRegisterSucces()
        this.element.classList.remove('hidden')
    }
}