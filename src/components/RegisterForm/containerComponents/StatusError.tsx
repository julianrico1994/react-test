import React, { useEffect } from 'react';

const StatusError = ({ serverState, setServerState }: IStatusErrorProps) => {

    useEffect(() => {
        const isError = serverState.isError
        if (isError) {
            setTimeout(() => {
                setServerState({ isError: false, message: '' })
            }, 5000);
        }
    }, [serverState.isError, setServerState]);

    const showClass = serverState.isError ? 'scale-in-center' : 'scale-out-center'

    return (
        serverState.isError ?
            <div className={`${showClass} status-error alert alert-danger`} role="alert">
                {serverState.message}
            </div> : <div></div>
    )
}

interface IStatusErrorProps {
    serverState: ISeverState,
    setServerState: (serverState: ISeverState) => void
}

export interface ISeverState {
    isError: boolean,
    message: string
}

export default StatusError