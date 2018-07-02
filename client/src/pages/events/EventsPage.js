import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Page, Content } from '../../components/page'
import { Card } from '../../components/card/Card'
import MainLayout from '../../layouts/MainLayout'
import './EventsPage.css'

import {
    actionCreators as eventsActionCreators,
    selectors
} from '../../reducers/events'

/**
 *
 * @since 0.1.0
 */
class EventsPage extends React.Component {

    componentDidMount () {
        this.props.listEvents()
    }

    render () {
        const events = this.props.events.map((event) => {
            const title = event.get('name')
            const text = event.get('description')

            return (
                <Card
                    key={event.id}
                    title={title}
                    text={text}
                    detailLink='http://google.es'
                    deleteLink='http://google.es' />
            )
        })

        return (
            <MainLayout>
                <Page title='Events'>
                    <Content>
                        <div className="row">{events}</div>
                    </Content>
                </Page>
            </MainLayout>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(eventsActionCreators, dispatch)
})

const mapStateToProps = (state) => {
    return {
        events:  selectors.getEvents(state)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventsPage)
