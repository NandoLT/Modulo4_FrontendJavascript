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

    renderProducts(products) {
        for(const product of products) {
            const article = document.createElement('article')
            article.classList.add('column', 'is-one-third')
            article.innerHTML = productView(product)
            this.element.appendChild(article)
            this.drawTags(product)
        }
    }

    async loadProducts() {
        this.loader.showLoading()
        try {
            const products =  await DataProducts.getProducts()
            console.log(products)
            this.renderProducts(products)
        } catch (error) {
            //avisaDelError(error)
            console.log(error)
        } finally {
            this.loader.hideLoading()
        }
    }
}
