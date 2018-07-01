import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Page, Content } from '../../components/page'
import MainLayout from '../../layouts/MainLayout'
import './EventsPage.css'

import {
    actionCreators as eventsActionCreators,
    selectors
} from '../../reducers/dashboard'

/**
 *
 * @since 0.1.0
 */
class EventsPage extends React.Component {

    componentDidMount () {
        this.props.events()
    }

    render () {
        return (
            <MainLayout>
                <Page title='Events'>
                    <Content>
                        <div className="row">
                            events
                        </div>
                    </Content>
                </Page>
            </MainLayout>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(eventsA, dispatch)
})

const mapStateToProps = (state) => {
    return {
        stats:  selectors.getStats(state)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventsPage)
