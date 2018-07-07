import React from 'react'

export class Row extends React.Component {

    constructor(props) {
        super(props)
    }

    renderRow (row, columns) {
        return (
            <tr key={row['id']} className={this.props.rowClassName}>
                { columns.map((column, index) => React.cloneElement(column, {...column.props, row:row, key: `${row['id']}-${index}`})) }
            </tr>
        )
    }

    render () {
        return (this.props.rows.map((row) => this.renderRow(row, this.props.children)))
    }
}
