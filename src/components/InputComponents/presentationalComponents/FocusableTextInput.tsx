import React, { useState } from 'react'
import CheckBox from './CheckBox'

interface IFocusableTextInput { render: Function }

const FocusableTextInput = ({ render }: IFocusableTextInput) => {
    const [focused, setFocused] = useState<boolean>(false)

    const handdleOnChangeCheck = () => {
        setFocused(prevFocused => !prevFocused)
    }

    return (
        <div>
            <div className="form-check-custom">
                <CheckBox
                    id='input1'
                    checked={focused}
                    onChange={handdleOnChangeCheck}
                />
                <label
                    className=""
                    htmlFor="input1"
                >
                    is focused?
                </label>
                <div className='render-prop'>
                    {render(focused)}
                </div>
            </div>
        </div>
    )
}

export default FocusableTextInput
