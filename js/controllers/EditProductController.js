import BaseController from '../controllers/BaseController.js'
import DataProducts from '../services/DataProducts.js'
import DataUsers from '../services/DataUsers.js'
import {editForm, novalid} from '../views/editProductView.js'
import {inputTag} from '../views/newProductView.js'


export default class EditProductController extends BaseController {

    constructor(element) {
        super(element)
        this.editProduct = {
        }
        this.checkUserIsLogged()
        this.checkIdProduct()
    }


    async checkUserCoincidence(productUserID){
        const currentUser =  await DataUsers.getUser()
        if(currentUser.userId === productUserID) {
            return true
        } else {
            window.location.href = '/'
        }
    }

    checkIdProduct() {
        const checkQuery = window.location.href.split('?')
        if(checkQuery.length <= 1) {
            const div = document.createElement('div')
            div.classList.add('container')
            div.innerHTML = novalid()
            this.element.appendChild(div)
        }
    }

    async renderEditForm(product) {
        const div = document.createElement('div')
        div.classList.add('div-form-new-product', 'container')
        div.innerHTML = editForm(product)
        await this.element.appendChild(div)
        this.getOldValuesImgType(product)
        this.attachEventListener(product)
    }

    async loadProduct() {
        const URLparts = window.location.href.split('=')
        const queryURL = `id=${URLparts[1]}`
        this.publish(this.events.START_LOADING)
        try {
            const product = await DataProducts.getProducts(queryURL)
            this.checkUserCoincidence(product[0].userId)
            this.renderEditForm(product[0])
        } catch (error) {
            this.publish(this.events.ERROR, error)
        } finally {
            this.publish(this.events.FINISH_LOADING)
        }
    }
    getOldValuesImgType(product){
            this.editProduct.type = product.type
            const oldType = this.editProduct.type
            this.editProduct.id = product.id
            const idProduct = this.editProduct.id
    }
    attachEventListener(product) {
        this.element.addEventListener('submit', async (event) => {
            event.preventDefault()

            const listTags = []
            this.element.querySelectorAll('.tags').forEach(item => {
                listTags.push(item.value.replace(/(<([^>]+)>)/gi, ""))
            })
            
            const form = this.element.querySelector('form')

            if(form.elements.image.files.length > 0) {
                this.editProduct.image = form.elements.image.files[0]
            }
            if(form.elements.optionsType.value !== '') {
                this.editProduct.type = form.elements.optionsType.value
            }
            this.editProduct = {
                name: form.elements.name.value.replace(/(<([^>]+)>)/gi, ""),
                description: form.elements.description.value.replace(/(<([^>]+)>)/gi, ""),
                price: form.elements.price.value,
                tags: listTags,
                image: this.editProduct.image,
                type: this.editProduct.type,
                id: this.editProduct.id
            }
            
            this.publish(this.events.START_LOADING)
            try {
                await DataProducts.updateProduct(this.editProduct)
                window.location.href = '/product-detail.html?id=' + product.id
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
            }
        })

        const buttonTags = this.element.querySelector('.buttonAddTag')
        buttonTags.addEventListener('click', (event) => {
            const tagContainer = document.createElement('p')
            tagContainer.classList.add('control','has-icons-left','has-icons-right')
            tagContainer.innerHTML = inputTag()
            const tagsDiv = this.element.querySelector('.tags-field-edit')
            tagsDiv.appendChild(tagContainer)
        })

        const buttonsDeleteTags = this.element.querySelectorAll('.delete-tag-btn')
        buttonsDeleteTags.forEach(button => {
            button.addEventListener('click', (event) => {
                const idbtn = '.'+button.id
                const inputTagToDelete = this.element.querySelector(idbtn)
                const parentNode = this.element.querySelector('.tags-field-edit')
                parentNode.removeChild(inputTagToDelete)
            })
        })

        const buttonDeleteType = this.element.querySelector('.delete-type-btn')
        buttonDeleteType.addEventListener('click', (event) => {
            const parentNode = this.element.querySelector('.product-type')
            parentNode.classList.add('is-hidden')
            const visibleSelector = this.element.querySelector('.select')
            visibleSelector.classList.remove('is-hidden')
        })

        const buttonDeleteImage = this.element.querySelector('.delete-img-btn')
        buttonDeleteImage.addEventListener('click', (event) => {
            const parentNode = this.element.querySelector('.currentImage')
            parentNode.classList.add('is-hidden')
            const visibleSelector = this.element.querySelector('.file')
            visibleSelector.classList.remove('is-hidden')
        })
    }
}