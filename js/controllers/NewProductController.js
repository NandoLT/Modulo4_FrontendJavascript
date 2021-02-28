import BaseController from '../controllers/BaseController.js'
import DataUsers from '../services/DataUsers.js'
import DataProducts from '../services/DataProducts.js'
import {inputTag} from '../views/newProductView.js'

export default class NewProductController extends BaseController {
    
    constructor(element) {
        super(element)
        this.attachEventListeners()
        this.checkUserIsLogged()
        this.button = element.querySelector('.button-submit')
        this.newProduct = {
            image: null, 
        }
    }

    attachEventListeners() {
        this.element.addEventListener('submit', async (event) => {

            const listTags = []
            this.element.querySelectorAll('.tags').forEach(item => {
                listTags.push(item.value.replace(/(<([^>]+)>)/gi, ""))
            })
            
            event.preventDefault()
            
            this.newProduct = {
                name: this.element.elements.name.value.replace(/(<([^>]+)>)/gi, ""),
                description: this.element.elements.description.value.replace(/(<([^>]+)>)/gi, ""),
                type: this.element.elements.optionsType.value,
                price: this.element.elements.price.value,
                tags: listTags,
                image: this.newProduct.image
            }
            
            this.publish(this.events.START_LOADING)
            try {
                await DataProducts.saveProduct(this.newProduct)
                window.location.href = '/'
            } catch (error) {
                this.publish(this.events.ERROR, error)
            } finally {
                this.publish(this.events.FINISH_LOADING)
            }
        })

        const fileInput = document.querySelector('input[type=file]')
        fileInput.addEventListener('change', (event) => {
            if(fileInput.isDefaultNamespace.length > 0) {
                const fileName = document.querySelector('.file-name')
                fileName.textContent = fileInput.files[0].name
                this.newProduct.image = this.element.elements.image.files[0]
            }
        })

        const productName = this.element.querySelector('input[name=name]')
        productName.focus()

        this.element.querySelectorAll('input, textarea, select').forEach((item) =>{
            item.addEventListener('keyup', (event) => {
                if(item.validity.valid) {
                    item.classList.add('is-success')
                    item.classList.remove('is-danger')
                } else {
                    item.classList.remove('is-success')
                    item.classList.add('is-danger')
                }

                if(this.element.checkValidity()) {
                    this.button.removeAttribute('disabled')
                } else {
                    this.button.setAttribute('disabled', true)
                }
            })
        })

        
        const buttonTags = this.element.querySelector('.buttonAddTag')
        buttonTags.addEventListener('click', (event) => {
            const tagContainer = document.createElement('p')
            tagContainer.classList.add('control','has-icons-left','has-icons-right')
            tagContainer.innerHTML = inputTag()
            const tagsDiv = this.element.querySelector('.tags-field')
            tagsDiv.appendChild(tagContainer)
        })

        
    }
}
