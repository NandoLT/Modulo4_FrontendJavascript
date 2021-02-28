import MenuFooterController from  '../controllers/MenuFooterController.js'

window.addEventListener('DOMContentLoaded', (event) => {
    const menuController = document.querySelector('header')
    const menuDrawer = new MenuFooterController(menuController)
    menuDrawer.insertMenu()

    const footerController = document.querySelector('footer')
    const drawFooter = new MenuFooterController(footerController)
    drawFooter.insertFooter()
})