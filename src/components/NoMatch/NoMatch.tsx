import React from 'react';

const NoMatch = ({ location }: INoMatchProps) => (
    <div className='container page col-lg-9'>
        <strong>Error!</strong> No route found matching:
      <div className=''>
            <code>{location.pathname}</code>
        </div>
    </div>
);


interface INoMatchProps {
    location: {
        pathname: string
    }
}

export default NoMatch