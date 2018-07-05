import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Page, Content } from '../../components/page'
import { Button, Text } from '../../components/input'
import { actionCreators as eventActionCreators } from '../../reducers/event'

import './NewEventPage.css'

/**
 * This page adds a new event
 *
 * @since 0.1.0
 */
class NewEventPage extends React.Component {

    /**
     * Default constructor
     *
     * @since 0.1.0
     */
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: ''
        }
    }

    /**
     * Handles changes in form inputs
     *
     * @param event event triggered by input change
     * @since 0.1.0
     */
    handleChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    /**
     * Handles form submission
     *
     * @param event event triggered by form submission
     * @since 0.1.0
     */
    handleClick (event) {
        event.preventDefault()

        this.props.newEvent(this.state)
    }

    /**
     * Renders new event form
     *
     * @since 0.1.0
     */
    render () {
        return (
            <MainLayout>
                <Page title='Create event'>
                    <Content>
                        <Text
                            name="name"
                            label="Name"
                            onChange={(event) => this.handleChange(event)}
                            value={this.state.name} />
                        <Text
                            name="description"
                            label="Description"
                            onChange={(event) => this.handleChange(event)}
                            value={this.state.description} />
                        <Button
                            type="button"
                            value="Add Event"
                            onClick={(event) => this.handleClick(event)}/>
                    </Content>
                </Page>
            </MainLayout>
        )
    }
}

/**
 * Binding action creators to props
 *
 * @since 0.1.0
 */
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(eventActionCreators, dispatch)
})

const mapStateToProps = (state) => {
    return {
        event: state
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewEventPage)
