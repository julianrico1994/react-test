import React from 'react';
import yauAreInImage from '../../media/youAreIn.jpg'

const YouAreIn = () => {
    return (
        <div className='you-are-in container page col-lg-9'>
            <div className='message h1'>
                You Are In...
            </div>
            <img
                src={yauAreInImage}
                className="img-fluid shadow p-3 mb-5 bg-white rounded"
                alt="yauAreInImage"
            ></img>
        </div>
    );
};

export default YouAreIn;