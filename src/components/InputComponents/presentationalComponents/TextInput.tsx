import React, { useRef, useEffect } from 'react'

interface ITextInputProps {
    focused: boolean
}

const TextInput = ({ focused }: ITextInputProps) => {
    const inputEl = useRef(null);

    useEffect(() => {
        if (focused) {
            inputEl.current.focus()
        } else {
            inputEl.current.blur();
        }
    }, [focused])

    return (
        <div>
            <input ref={inputEl} type="text" />
        </div>
    );
}

export default TextInput