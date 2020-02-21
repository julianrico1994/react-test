import React from 'react'

interface ICheckBoxProps {
    id: string,
    checked: boolean,
    onChange: Function
}

const CheckBox = ({ id, checked, onChange }: ICheckBoxProps) => {
    return (
        <input
            key={id}
            id={id}
            name={id}
            className={`checkbox ${checked ? 'checked' : ''}`}
            type='checkbox'
            checked={checked}
            onChange={event => onChange(event)}
        />
    )
}

export default CheckBox