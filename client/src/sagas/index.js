import { all } from 'redux-saga/effects'

import securitySagas from './security'
import dashboardSagas from './dashboard'
import eventsSagas from './events'
import eventSagas from './event'

export default function* rootSaga () {
    yield all([
        ...securitySagas,
        ...dashboardSagas,
        ...eventsSagas,
        ...eventSagas
    ])
}
