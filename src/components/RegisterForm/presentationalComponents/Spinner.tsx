import React from 'react';

const Spinner = ({ fetched }: { fetched: boolean }) => {
    return (
        fetched ? (
            <div className="spinner d-flex justify-content-center align-items-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>) : (<div></div>)
    )
}

export default Spinner