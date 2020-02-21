import React from 'react';
import { validateVote } from '../../helpers/helpers';

interface IVoteProps {
    votes: number,
    handdleSetVote: (vote: number) => void
}

const Vote = ({ votes, handdleSetVote }: IVoteProps) => {
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