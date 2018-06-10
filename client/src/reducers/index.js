import { combineReducers } from 'redux'
import securityReducers from './security'
import uiReducers from './ui'
import dashboardReducers from './dashboard'

export default combineReducers({
    security: securityReducers,
    ui: uiReducers,
    dashboard: dashboardReducers
})