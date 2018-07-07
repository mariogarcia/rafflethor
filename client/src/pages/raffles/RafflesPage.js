import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import { Page, Content } from '../../components/page'
import { Table, Column } from '../../components/table'

import './RafflesPage.css'

const raffleList = [
    { id: "1", name:"Greach T-Shirt" },
    { id: "2", name:"Alexa giveaway" },
    { id: "3", name:"Micronaut Mud" }
]

/**
 *
 * @since 0.1.0
 */
class RafflesPage extends React.Component {

    render () {
        return (
            <MainLayout>
                <Page title='Raffles'>
                    <Content>
                        <div className="row">
                            <Table rows={raffleList}>
                                <Column value="id" head="ID"/>
                                <Column value="name" head="Name"/>
                                <Column value="description" head="Description"/>
                            </Table>
                        </div>
                    </Content>
                </Page>
            </MainLayout>
        )
    }
}

export default RafflesPage
