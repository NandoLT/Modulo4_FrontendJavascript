/* import BaseController from './BaseController.js' */
import DataUsers from '../services/DataUsers.js'
import RegisterFormController from '../controllers/RegisterFormController.js'

export default class LoginFormController extends RegisterFormController  {
    async makePost(user) {
        const userActivity = await DataUsers.getUserActivity()
        const data = await DataUsers.loginUser(user)
        DataUsers.saveToken(data.accessToken)

        if(userActivity !== null) {
            window.location.href = userActivity
        } else {
            window.location.href = '/'
        }
    }
}