import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './styles/RegisterForm.css'
import { ISeverState } from './containerComponents/StatusError'
import Form from './presentationalComponents/Form'
import {
    validateName, validateEmail, clearNumber, formatPhoneNumber, validateNumber
} from '../helpers/helpers'
import { NAME_PROYECT, SERVER_TEST } from '../helpers/constants'

interface IFields {
    name: string
    email: string
    phone: string
}

interface IFormatter {
    [index: string]: any;
    name: (value: string) => string,
    email: (value: string) => string,
    phone: (value: string) => string
}

const FORMATTER: IFormatter = {
    name: (value) => { return value.toLowerCase() },
    email: (value) => { return value },
    phone: (value) => formatPhoneNumber(value)
}

const RegisterForm = (): any => {
    let history = useHistory();

    const [fields, setFields] = useState<IFields>({ name: '', email: '', phone: '' })
    const [fetched, setFetched] = useState<boolean>(false)
    const [serverState, setServerState] = useState<ISeverState>({ isError: false, message: '' })

    const fecthData = ({ name, email, phone }: IFields) => {
        setFetched(true)
        const body = new URLSearchParams();
        body.append("username", name);
        body.append("email", email);
        body.append("phone_number", phone);

        const config: any = {
            headers: { "Tranqui-FrontendDeveloper": "JulianRico" },
            method: 'POST',
            mode: 'cors',
            body
        }

        fetch(SERVER_TEST, config)
            .then(response => response.json())
            .then(result => {
                setFetched(false)
                if (result.status) {
                    history.push(`${NAME_PROYECT}/you-are-in`)
                } else if (result.status === false) {
                    setServerState({ isError: true, message: result.error })
                } else {
                    setServerState({ isError: true, message: 'We are having some troubles with our service right now, please try again later.' })
                }
            })
            .catch(error => {
                setFetched(false)
                setServerState({ isError: true, message: 'catch error' })
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
        // _fields[name] = value
        _fields[name] = FORMATTER[name](value)
        setFields(_fields)
    };

    return (
        <Form {...{
            fetched, fields, generalValidator, onInputChange, validateName, validateEmail,
            validateNumber, serverState, setServerState, onFormSubmit
        }} />
    );
};

export default RegisterForm;