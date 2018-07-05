import React from 'react'

export const Text = (props) => {
    return (
        <div>
            <label htmlFor="basic-url">{props.label}</label>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className='form-control'
                    onChange={props.onChange}
                    value={props.value}
                    name={props.name}
                    aria-describedby="basic-addon3" />
            </div>
        </div>
    )
}
