import BaseController from './BaseController.js'
import DataUsers from '../services/DataUsers.js'
import pubSub from '../services/Pubsub.js'

export default class RegisterFormController extends BaseController {

    constructor(element) {
        super(element)
        this.attachEventListener()
        this.getFocus()
        this.button = element.querySelector('button')
        this.checkIconMail = element.querySelector('.check-email')
        this.checkIconPassword = element.querySelector('.check-password')
    }

    registerSucces(data) {
        
    }

    getFocus() {
        const focusEmail = this.element.querySelector('input[type=email')
        focusEmail.focus()
    }

    attachEventListener() {
        this.element.addEventListener('submit', async (event) => {
            event.preventDefault()
            const user = {
                username: this.element.elements.email.value,
                password: this.element.elements.password.value
            }
        
            this.publish(this.events.START_LOADING, {})
            try {
                const data =  await DataUsers.registerUSer(user)
                this.publish(this.events.USER_SUCCES)
                //REDIRECCION A LOGIN O INICIO
            } catch (error) {
                console.log(error)
                this.publish(this.events.ERROR, error)
            } finally {
                this.publish(this.events.FINISH_LOADING, {})
            }
        })

        this.element.querySelectorAll('input').forEach((input) => {
            input.addEventListener('keyup',  (event) => {
                //TODO controlar de alguna manera para que el check de los inputs pase a verde
                //en caso de mail si es un amil correcto y password si cumple un regex
                //botones de info a lado de la contraseña con caracteristicas de entrada para validad
                if(input.validity.valid) {
                    if(input.classList.contains('email-register')) {
                        this.checkIconMail.style.color = 'green'
                    }else{
                        this.checkIconPassword.style.color = 'green'
                    }
                    input.classList.add('is-success')
                    input.classList.remove('is-danger')
                } else {
                    input.classList.remove('is-success')
                    input.classList.add('is-danger')
                }

                if(this.element.checkValidity()){
                    this.button.removeAttribute('disabled')
                } else {
                    this.button.setAttribute('disabled', true)
                }
            })
        })
    }
}