

import { seedNames, loremIpsum } from './seedNames'

const getRandomName = (): string => {
    return seedNames[Math.floor(Math.random() * (seedNames.length - 1))]
}

const getRandomSlogan = (): string => {
    const loremLength = loremIpsum.length
    const init = Math.floor(Math.random() * loremLength) - 11
    const end = init + 10
    const slogan = loremIpsum.slice(init, end)
    return slogan
}

const getRandomNuber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const getRandomCandidates = (load: number): Array<ICandidate> => {
    let candidates = []
    for (let i = 0; i < load; i++) {
        candidates.push({
            id: i,
            firstname: getRandomName(),
            lastname: getRandomName(),
            age: getRandomNuber(18, 100),
            slogan: getRandomSlogan(),
            votes: getRandomNuber(0, 10)
        })
    }
    return candidates
}

export const validateVote = (vote: number) => {
    return (vote <= 20 && vote >= 0)
}

export interface ICandidate {
    [index: string]:any;
    id: number;
    firstname: string;
    lastname: string;
    age: number;
    slogan: string;
    votes: number;
}
