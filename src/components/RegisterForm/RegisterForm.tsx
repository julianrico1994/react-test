import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import validator from 'validator';
import './styles/RegisterForm.css'

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

    const _mockFetchData = () => {
        setFetched(true)
        setTimeout(() => {
            // setFetched(false)
            // history.push("/you-are-in")

            setServerState({ isError: true, message: 'un error ha ocurrido' })
        }, 3000)
    }

    const onFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        if (generalValidator() || true) {
            const _fields = {
                ...fields,
                phone: clearNumber(fields.phone)
            }
            // _mockFetchData()
            fecthData(_fields)
            // setFields({ name: '', email: '', phone: '' }) FIXME: 
        }
    };

    const generalValidator = () => {
        const generalErrors = [
            ...validateName(fields.name),
            ...validateEmail(fields.email),
            ...validateNumber(fields.phone)
        ]
        // console.log(generalErrors);
        return generalErrors.length === 0
    }

    const validateName = (name: string): Array<string> => {
        let errors: Array<string> = []
        const _isAlphaNumeric = validator.isAlphanumeric(name)
        const _min = name.length >= 4
        const _max = name.length <= 20

        if (_isAlphaNumeric === false) errors.push('your name must be excusively alphanumeric')
        if (_min === false) errors.push('Your name must have more than 4 alphanumeric characters')
        if (_max === false) errors.push('Your name must be less than 20 alphanumeric characters')

        return errors
    }

    const validateEmail = (mail: string): Array<string> => {
        let errors: Array<string> = []
        const _isMail = validator.isEmail(mail)
        if (_isMail === false) errors.push('insert a valid email')
        return errors
    }

    const clearNumber = (number: string) => {
        const cleaned = ('' + number).replace(/\D/g, '')
        return cleaned
    }

    const formatPhoneNumber = (number: string) => {
        //Filter only numbers from the input
        const cleaned = ('' + number).replace(/\D/g, '')
        let [first, second, third] = [
            cleaned.substring(0, 3),
            cleaned.substring(3, 6),
            cleaned.substring(6, 10)
        ]
        if (third.length > 0) return `(${first}) ${second} ${third}`
        if (second.length > 0) return `(${first}) ${second}`
        if (first.length <= 3 && first.length > 0) return `(${first}`
        if (first.length === 0) return ``
    };

    const validateNumber = (number: string): Array<string> => {
        let errors: Array<string> = []
        const cleaned = ('' + number).replace(/\D/g, '')
        let first = cleaned.substring(0, 3)
        if (first < '300' || first > '320') errors.push('the number must start between 300 and 320')
        if (cleaned.length < 10) errors.push('must contain at least 10 numbers')
        return errors
    }

    const onInputChange = ({ name, value, error }: any) => {
        const _fields: any = { ...fields }
        _fields[name] = value
        setFields(_fields)
    };

    const onInputChangeFormat = ({ name, value, error }: any) => {
        const _fields: any = { ...fields }
        _fields[name] = formatPhoneNumber(value)
        setFields(_fields)
    }

    return (
        <div className='register-form container page col-lg-9'>
            {/* <Spinner fetched={fetched} /> */}
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

const Spinner = ({ fetched }: { fetched: boolean }) => {
    return (
        fetched ? (
            <div className="spinner d-flex justify-content-center align-items-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        ) : (<div></div>)
    )
}

const StatusError = ({ serverState, setServerState }: { serverState: { isError: boolean, message: string }, setServerState: Function, delay?: number }) => {
    useEffect(() => {
        console.log('useeffect');
        if (serverState.isError) {
            setTimeout(() => {
                setServerState({ isError: false, message: '' })
            }, 5000);
        }
    }, [serverState.isError]);
    const showClass = serverState.isError ? 'scale-in-center' : 'scale-out-center'

    return (
        serverState.isError?
        <div className={`${showClass} status-error alert alert-danger`} role="alert">
            {serverState.message}
        </div>: <div></div>
    )
}

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
            <label>{placeholder}</label>
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