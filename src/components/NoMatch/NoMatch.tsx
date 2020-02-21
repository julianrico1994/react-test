import React from 'react';
import { Link } from "react-router-dom";
import lostImage from '../media/lost.jpg'

const NoMatch = ({ location, nameApp }: INoMatchProps) => {
    return (
        <div className='container page col-lg-9'>
            <h1>Are You Lost?</h1>
            <div>
                Try with <Link to={`${nameApp}/`} > Home Page </Link>
            </div>
            <img
                src={lostImage}
                className="img-fluid shadow p-3 mb-5 bg-white rounded"
                alt="lostImage"
            ></img>
            <div>
                <strong>Error!</strong> No route found matching:
                <div className=''>
                    <code>{location.pathname}</code>
                </div>
            </div>

        </div>
    )
}

interface INoMatchProps {
    location: {
        pathname: string
    },
    nameApp: string
}

export default NoMatch