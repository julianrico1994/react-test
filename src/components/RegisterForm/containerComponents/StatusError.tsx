import React, { useEffect } from 'react';

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
        serverState.isError ?
            <div className={`${showClass} status-error alert alert-danger`} role="alert">
                {serverState.message}
            </div> : <div></div>
    )
}

export default StatusError