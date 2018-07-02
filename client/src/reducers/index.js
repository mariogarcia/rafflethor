import { combineReducers } from 'redux'
import securityReducers from './security'
import uiReducers from './ui'
import dashboardReducers from './dashboard'
import eventsReducers from './events'

export default combineReducers({
    security: securityReducers,
    ui: uiReducers,
    dashboard: dashboardReducers,
    events: eventsReducers
})
