


import validator from 'validator';
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


/* ***************************************************************************************
 Helpers for RegisterForm 
 *************************************************************************************** */

export const validateName = (name: string): Array<string> => {
    let errors: Array<string> = []
    const _isAlphaNumeric = validator.isAlphanumeric(name)
    const _min = name.length >= 4
    const _max = name.length <= 20

    if (_isAlphaNumeric === false) errors.push('your name must be excusively alphanumeric')
    if (_min === false) errors.push('Your name must have more than 4 alphanumeric characters')
    if (_max === false) errors.push('Your name must be less than 20 alphanumeric characters')

    return errors
}

export const validateEmail = (mail: string): Array<string> => {
    let errors: Array<string> = []
    const _isMail = validator.isEmail(mail)
    if (_isMail === false) errors.push('insert a valid email')
    return errors
}

export const clearNumber = (number: string) => {
    const cleaned = ('' + number).replace(/\D/g, '')
    return cleaned
}

export const formatPhoneNumber = (number: string) => {
    //Filter only numbers from the input
    const cleaned = ('' + number).replace(/\D/g, '')
    let [first, second, third] = [
        cleaned.substring(0, 3),
        cleaned.substring(3, 6),
        cleaned.substring(6, 10)
    ]
    if (third.length > 0) return `(${first}) ${second} ${third}`
    if (second.length > 0) return `(${first}) ${second}`
    if (first.length <= 3 && first.length > 0) return `(${first}`
    if (first.length === 0) return ``
};

export const validateNumber = (number: string): Array<string> => {
    let errors: Array<string> = []
    const cleaned = ('' + number).replace(/\D/g, '')
    let first = cleaned.substring(0, 3)
    if (first < '300' || first > '320') errors.push('the number must start between 300 and 320')
    if (cleaned.length < 10) errors.push('must contain at least 10 numbers')
    return errors
}
