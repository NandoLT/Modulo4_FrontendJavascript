import BaseController from '../controllers/BaseController.js'
import DataProducts from '../services/DataProducts.js'
import {detail} from '../views/productDetailView.js'

export default class ProductDetailController extends BaseController {

    renderProduct(item=null) {
        const div = document.createElement('div')
        div.classList.add('hero-body')
        div.innerHTML = detail(item)
        const deleteButton = div.querySelector('.delete-btn')
        if(deleteButton) {
            deleteButton.addEventListener('click', async (event) => {
                const deleteConfirmed = confirm(`¿Desea borrar el producto  ${item.name} ?`)
                if(deleteConfirmed) {
                    await DataProducts.deleteProduct(item)
                    window.location.href = '/'
                }
            })
        }
        this.element.appendChild(div)
    }

    async loadProduct() {
        const URLparts = window.location.href.split('=')
        const queryURL = `id=${URLparts[1]}`

        this.publish(this.events.START_LOADING)
        try {
            let product = await DataProducts.getProducts(queryURL)
            if(product.length == 0) {
                product = null
                this.renderProduct(product)
            } else {
                this.renderProduct(product[0])
            }
        } catch (error) {
            this.publish(this.events.ERROR, error)
        } finally {
            this.publish(this.events.FINISH_LOADING)
        }
        
    }
}
