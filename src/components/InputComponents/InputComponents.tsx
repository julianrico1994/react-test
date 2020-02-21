import React from 'react'
import './styles/InputComponents.css'
import FocusableTextInput from './presentationalComponents/FocusableTextInput'
import TextInput from './presentationalComponents/TextInput'

const InputComponents = () => {
    return (
        <div className='container page col-lg-9'>
            <FocusableTextInput
                render={
                    (focused: boolean) =>
                        <TextInput focused={focused} />
                }
            />
        </div>
    )
}
export default InputComponents