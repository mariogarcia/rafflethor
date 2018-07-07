import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import { Page, Content } from '../../components/page'
import { Table, Row, Column } from '../../components/table'

import './RafflesPage.css'

const raffleList = [
    { id: "1", name:"Greach T-Shirt" },
    { id: "2", name:"Alexa giveaway" }
]

/**
 *
 * @since 0.1.0
 */
class RafflesPage extends React.Component {

    componentDidMount () {

    }

    render () {
        return (
            <MainLayout>
                <Page title='Raffles'>
                    <Content>
                        <div className="row">
                            <Table rows={raffleList}>
                                <Row>
                                    <Column name="id" />
                                    <Column name="name" />
                                </Row>
                            </Table>
                        </div>
                    </Content>
                </Page>
            </MainLayout>
        )
    }
}

export default RafflesPage
