import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import { List } from 'immutable'
import { Page, Content } from '../../components/page'
import { Table, Column } from '../../components/table'

import './RafflesPage.css'

/**
 *
 * @since 0.1.0
 */
class RafflesPage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            raffles: List()
        }
    }

    render () {
        return (
            <MainLayout>
                <Page title='Raffles'>
                    <Content>
                        <div className="row">
                            <Table rows={this.state.raffles}>
                                <Column value="id" head="ID"/>
                                <Column value="name" head="Name"/>
                                <Column value="noWinners" head="No Winners"/>
                                <Column value="type" head="Type"/>
                                <Column value="since" head="Since"/>
                                <Column value="until" head="Until"/>
                            </Table>
                        </div>
                    </Content>
                </Page>
            </MainLayout>
        )
    }
}

export default RafflesPage
