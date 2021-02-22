import BaseController from './BaseController.js'
import DataProducts from  '../services/DataProducts.js'
import {productView} from '../views/indexViews.js'


export default class ProductListController extends BaseController {


    renderProducts(products) {
        for(const product of products) {
            const article = document.createElement('article')
            article.innerHTML = productView(product)
            this.element.appendChild(article)
        }
    }

    async loadProducts() {
        this.loader.showLoading()
        try {
            const products =  await DataProducts.getProducts()
            console.log(products)
            this.renderProducts(products)
        } catch (error) {
            avisaDelError(error)
        } finally {
            this.loader.hideLoading()
        }
    }
}
