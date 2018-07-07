import React from 'react'

export class Table extends React.Component {

    constructor(props) {
        super(props)
    }

    handleRowElement (rowElement) {
        return (React.cloneElement(rowElement, {rows:this.props.rows, ...rowElement.props}))
    }

    render () {
        return (
            <table className={`table table-striped ${this.props.className}`}>
                <tbody>
                    { (this.handleRowElement(this.props.children)) }
                </tbody>
            </table>
        )
    }
}
