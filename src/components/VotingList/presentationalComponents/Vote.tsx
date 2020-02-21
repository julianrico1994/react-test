import React from 'react';
import { validateVote } from '../../helpers/helpers';

const Vote = ({ votes, handdleSetVote }: { votes: number, handdleSetVote: Function }) => {
    return (
        <td className='d-flex justify-content-around'>
            <div>{votes}</div>
            <div className='button-group'>
                <button
                    className="btn btn-primary"
                    disabled={!validateVote(votes + 1)}
                    onClick={() => handdleSetVote(votes + 1)}
                >+</button>
                <button
                    className="btn btn-primary"
                    disabled={!validateVote(votes - 1)}
                    onClick={() => handdleSetVote(votes - 1)}
                >-</button>
            </div>

        </td>
    )
}

export default Vote