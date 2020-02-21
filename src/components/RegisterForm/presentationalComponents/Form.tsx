import React from 'react';
import Spinner from './Spinner'
import Field from '../containerComponents/Field'
import StatusError from '../containerComponents/StatusError'

const Form = ({
    fetched, fields, generalValidator, onInputChange, validateName, validateEmail,
    validateNumber, serverState, setServerState, onFormSubmit }: any) => {
    return (
        <div className='register-form container page col-lg-9'>
            <Spinner fetched={fetched} />
            <form onSubmit={evet => onFormSubmit(evet)} >
                <Field
                    placeholder='Name'
                    name='name'
                    value={fields.name}
                    onChange={onInputChange}
                    validate={validateName}
                />
                <Field
                    placeholder='Email'
                    name='email'
                    value={fields.email}
                    onChange={onInputChange}
                    validate={validateEmail}
                />
                <Field
                    placeholder='Phone'
                    name='phone'
                    value={fields.phone}
                    onChange={onInputChange}
                    validate={validateNumber}
                />
                <input type='submit' disabled={!generalValidator()} className="btn btn-primary" />
            </form>
            <StatusError {...{ serverState, setServerState }} />
        </div>
    );
};

export default Form;