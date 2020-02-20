import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import './styles/RegisterForm.css'
import Spinner from './presentationalComponents/Spinner'
import Field from './containerComponents/Field'
import StatusError from './containerComponents/StatusError'
import {
    validateName,
    validateEmail,
    clearNumber,
    formatPhoneNumber,
    validateNumber
} from '../helpers/helpers'

const RegisterForm = (): any => {
    let history = useHistory();

    const [fields, setFields] = useState({
        name: '',
        email: '',
        phone: ''
    })
    const [fetched, setFetched] = useState(false)
    const [serverState, setServerState] = useState({ isError: false, message: '' })

    const fecthData = ({ name, email, phone }: any) => {
        setFetched(true)
        const body = new URLSearchParams();
        body.append("username", name);
        body.append("email", email);
        body.append("phone_number", '3148094431');

        const config: any = {
            headers: { "Tranqui-FrontendDeveloper": "JulianRico" },
            method: 'POST',
            mode: 'cors',
            body
        }

        fetch("http://sgaviria.com​/api/1/front-dev/", config)
            .then(response => response.json())
            .then(result => {
                setFetched(false)

                if (result.status) {
                    history.push("/you-are-in")
                } else if (result.status === false) {
                    setServerState({ isError: true, message: result.error })
                } else {
                    setServerState({ isError: true, message: 'We are having some troubles with our service right now, please try again later.' })
                }
            })
            .catch(error => {
                setFetched(false)
                console.log('error julian', error)
            });
    }

    const onFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        if (generalValidator() || true) {
            const _fields = {
                ...fields,
                phone: clearNumber(fields.phone)
            }
            fecthData(_fields)
            setFields({ name: '', email: '', phone: '' })
        }
    };

    const generalValidator = () => {
        const generalErrors = [
            ...validateName(fields.name),
            ...validateEmail(fields.email),
            ...validateNumber(fields.phone)
        ]
        return generalErrors.length === 0
    }

    const onInputChange = ({ name, value }: any) => {
        const _fields: any = { ...fields }
        _fields[name] = value
        setFields(_fields)
    };

    const onInputChangeFormat = ({ name, value }: any) => {
        const _fields: any = { ...fields }
        _fields[name] = formatPhoneNumber(value)
        setFields(_fields)
    }

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
                    onChange={onInputChangeFormat}
                    validate={validateNumber}
                />
                <input type='submit' disabled={!generalValidator()} className="btn btn-primary" />
            </form>
            <StatusError {...{ serverState, setServerState }} />
        </div>
    );
};

export default RegisterForm;