import pubSub from '../services/Pubsub.js'
import DataUsers from '../services/DataUsers.js'

export default class BaseController {

    constructor(element) {
        this.element = element;
        this.pubSub = pubSub;
        this.events = {
            START_LOADING: 'startLoading',
            FINISH_LOADING: 'finishLoading',
            ERROR: 'error', 
            USER_SUCCES: 'userSucces'
        }
    }

    subscribe(eventName, eventHandler) {
        this.pubSub.subscribe(eventName, eventHandler)
    }

    publish(eventName, eventData) {
        this.pubSub.publish(eventName, eventData)
    }

    async checkUserIsLogged() {
        const isLogged = await DataUsers.isUserLogged()
        if(!isLogged) {
            DataUsers.saveUserActivity(window.location.href)
            window.location.href = '/login.html'
        } else {
            this.publish(this.events.FINISH_LOADING)
            //DataUsers.saveUserActivity(window.location.href)
        }
    }
}
