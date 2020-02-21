import React, { useState } from 'react';
import { getRandomCandidates, validateVote } from '../helpers/helpers';
import './styles/VotingList.css'
import CandidateDetail from './presentationalComponents/CandidateDetail'

const VotingList = (props: any) => {
    const propsCandidates = parseInt(props.match.params.candidates)
    const [candidates, setCandidates] = useState(getRandomCandidates(propsCandidates));
    const [lastUpdatedId, setLastUpdatedId] = useState(null);
    const [sortBy, setSortBy] = useState('id');

    const handdleSetVote = (id: number, newVote: number): void => {
        if (validateVote(newVote)) {
            /* find a certain candidate */
            const candidate = candidates.find(candidate => candidate.id === id) || candidates[0]
            /*  */
            const newCandidate = { ...candidate, votes: newVote }
            /* we are raplace de new candidate in the candidates array an then return this new array */
            const newCandidates = candidates.map(candidate => {
                return (candidate.id === id) ? newCandidate : candidate
            })
            setCandidates(newCandidates)
            setLastUpdatedId(id)
        }
    }

    const totalVotes = (): number => (
        candidates
            .map(candidate => candidate.votes)
            .reduce((accumulator, currentValue) => accumulator + currentValue)
    )

    return (
        <div className="voting-list container page col-lg-8">
            <div className='row content-count-votes d-flex justify-content-between mb-3'>
                <div className='h2'>Total votes count: </div>
                <div className='count h2 text-primary'>{totalVotes()}</div>
            </div>
            <table className='table '>
                <thead className="">
                    <tr>
                        <th scope="col">firstName</th>
                        <th scope="col">lastName</th>
                        <th
                            scope="col"
                            className={`sort ${sortBy === 'age' ? 'sortActive' : ''}`}
                            onClick={() => setSortBy('age')}
                        >
                            age
                        </th>
                        <th scope="col">slogan</th>
                        <th
                            scope="col"
                            className={`sort ${sortBy === 'votes' ? 'sortActive' : ''}`}
                            onClick={() => setSortBy('votes')}
                        >
                            votes
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {candidates
                        .sort((candidate1, candidate2) => candidate2[sortBy] - candidate1[sortBy])
                        .map(candidate => {
                            return (
                                <CandidateDetail
                                    key={candidate.id}
                                    candidate={candidate}
                                    handdleSetVote={handdleSetVote}
                                    lastUpdatedId={lastUpdatedId}
                                />
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default VotingList;