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
        console.log(this.props.events)
        const rows = this.props.events.map((event) => {
            const id = event.get('id')
            const title = event.get('name')
            const text = event.get('description')

            return (
                <tr key={id}>
                    <td scope="row">{id}</td>
                    <th>{title}</th>
                    <td>{text}</td>
                    <td></td>
                </tr>
            )
        })

        return (
            <MainLayout>
                <Page title='Events'>
                    <Actions>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={ () => this.props.newEventForm() }>Add New Event</button>
                    </Actions>
                    <Content>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                { rows }
                            </tbody>
                        </table>
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
