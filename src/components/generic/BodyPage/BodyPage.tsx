import React from 'react';

interface IBodyPageProps {
    title: string,
    children: React.ReactElement
}

const BodyPage = ({ title, children }: IBodyPageProps) => {
    return (
        <div className='body-page'>
            <div className='h2'>
                {title}
            </div>
            <div className='body'>
                {children}
            </div>
        </div>
    );
};

export default BodyPage;