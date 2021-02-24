import BaseController from './BaseController.js'
import DataProducts from  '../services/DataProducts.js'
import {productView, tagsView} from '../views/indexViews.js'

export default class ProductListController extends BaseController {

    drawTags(product){
        for(const tag of product.tags) {
            const itemTag = document.querySelectorAll('.content-tags')
            itemTag[itemTag.length - 1].innerHTML += tagsView(tag)
        }
    }

    renderProducts(products=null) {
        if(products == null){
            const article = document.createElement('article')
            article.classList.add('column')
            article.innerHTML = productView(products)
            this.element.appendChild(article)
        } else {
            for(const product of products) {
                const article = document.createElement('article')
                article.classList.add('column', 'is-one-third')
                article.innerHTML = productView(product)
                this.element.appendChild(article)
                this.drawTags(product)
            }
        }
        
    }

    async loadProducts() {
        this.publish(this.events.START_LOADING, {})
        try {
            const products =  await DataProducts.getProducts()
            if(products.length == 0) {
                this.renderProducts()
            } else {
                this.renderProducts(products)
            }
            
        } catch (error) {
            console.log(error)
            this.publish(this.events.ERROR, error)
        } finally {
            this.publish(this.events.FINISH_LOADING, {})
        }
    }
}
