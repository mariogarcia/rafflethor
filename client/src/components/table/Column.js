import React from 'react'

export const Column = ({key, row, name, className}) => {
    return (
        <td key={key} className={className}>{row[name]}</td>
    )
}
