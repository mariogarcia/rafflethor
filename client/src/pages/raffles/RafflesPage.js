import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Page, Content } from '../../components/page'
import MainLayout from '../../layouts/MainLayout'
import defaultAvatar from '../../layouts/images/avatar/6.jpg'
import './RafflesPage.css'

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
                raffles
                      </div>
                    </Content>
                </Page>
            </MainLayout>
        )
    }
}

export default RafflesPage
