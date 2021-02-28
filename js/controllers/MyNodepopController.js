import BaseController from '../controllers/BaseController.js'
import DataUsers from '../services/DataUsers.js'

export default class MyNodePopController extends BaseController {
    //TODO intetar usar el listcontroller aquí sin cargarlo en el mynodepopo.html
    async mynodepop() {
        const userCoincidence = await DataUsers.getUser()
        const URLparts = window.location.href.split('=')
        const URLuser = parseInt(URLparts[1])
        
        if(URLparts.length > 1) {
            if(userCoincidence !== null) {
                if(userCoincidence.userId !== URLuser) {
                    window.location.href = '/'
                }
            } else {
                window.location.href = '/'
            }
        } else {
            window.location.href = '/'
        }
    }
}