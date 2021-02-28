import BaseController from './BaseController.js'
import {menu, footer} from '../views/menuFooterViews.js'
import DataUsers from '../services/DataUsers.js'

export default class MenuFooterController extends BaseController {

    async insertMenu(){
        const userInfo = await DataUsers.getUser()
        if(userInfo !== null) {
            this.element.innerHTML =  await menu(userInfo.userId)
        } else {
            this.element.innerHTML = await menu()
        }
        const hamburguerMenu  = document.querySelector('.navbar-burger')
        const navMenu = document.querySelector('.navbar-menu')
        hamburguerMenu.addEventListener('click', () => {
            hamburguerMenu.classList.toggle('is-active')
            navMenu.classList.toggle('is-active')
        })
        this.checkUserLogged()
        this.attachEventListener()
    }

    insertFooter() {
        this.element.innerHTML = footer()
    }

    async checkUserLogged() {
        const isLogged = await DataUsers.isUserLogged()
        if(isLogged) {
            const buttonsLogged = this.element.querySelector('.user-logged')
            buttonsLogged.classList.remove('is-hidden')
        } else {
            const buttonsNotLogged = this.element.querySelector('.user-notlogged')
            buttonsNotLogged.classList.remove('is-hidden')
        }
    }

    attachEventListener() {
        const logout = this.element.querySelector('.is-dark')
        logout.addEventListener('click', async () => {
            await DataUsers.deleteUserActivity()
            await DataUsers.deleteToken()
            window.location.reload(true)
        })

        const btnLogin = this.element.querySelector('.is-success')
        btnLogin.addEventListener('click', async (event) => {
            await BaseController.checkUserLogged()
        })
    }
}