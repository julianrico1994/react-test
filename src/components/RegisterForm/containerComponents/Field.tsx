import React, { useState } from 'react';

const Field = (
    { placeholder, name, value, validate, onChange }: IFieldProps
): React.ReactElement => {
    const [errors, setErrors] = useState([])

    const _onChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): any => {
        const { value } = event.target;
        const errors = validate ? validate(value) : [];
        setErrors(errors)
        onChange({ name, value, errors });
    };

    return (

        <div className="filed form-group">
            <label className='h5'>{placeholder}</label>
            <input
                className={'form-control'}
                placeholder={placeholder}
                value={value}
                onChange={event => _onChange(event)}
            />
            <ul>
                {errors.map(
                    (error, index) => (
                        <li
                            className="form-text text-muted"
                            key={index}
                            style={{ color: 'red' }}
                        >
                            {error}
                        </li>
                    )
                )}
            </ul>
        </div>
    );
}

interface IFieldProps {
    placeholder?: string,
    name: string,
    value?: string,
    validate?: Function,
    onChange: Function,
}

export default Field