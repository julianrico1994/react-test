import React from 'react';
import Vote from './Vote'
import { ICandidate, } from '../../helpers/helpers';

const CandidateDetail = ({ candidate, handdleSetVote, lastUpdatedId }: { candidate: ICandidate, handdleSetVote: Function, lastUpdatedId: number }) => (
    <tr
        className={lastUpdatedId === candidate.id ? 'table-active' : ''}
    >
        <td className="firstName">{candidate.firstname}</td>
        <td className="lastName">{candidate.lastname}</td>
        <td className="age">{candidate.age}</td>
        <td className="slogan">{candidate.slogan}</td>
        <Vote
            votes={candidate.votes || 0}
            handdleSetVote={(newVote: number) => handdleSetVote(candidate.id, newVote)}
        />
    </tr>
)

export default CandidateDetail