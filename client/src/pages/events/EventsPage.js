import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import { Page, Content, Actions } from '../../components/page'
import { Card } from '../../components/card/Card'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators, selectors } from '../../reducers/events'

import './EventsPage.css'

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
                    <Actions>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={ () => this.props.newEventForm() }>+</button>
                    </Actions>
                    <Content>
                        <div className="row">{events}</div>
                    </Content>
                </Page>
            </MainLayout>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(actionCreators, dispatch)
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
