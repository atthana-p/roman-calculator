// TODO

type RomanPairWithDec = {
    [key: string]: number
}

type DecPairWithRoman = {
    [key: string]: string
}

const roman1CharacterPairWithDec: RomanPairWithDec = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,
}

const roman2CharacterPairWithDec: RomanPairWithDec = {
    iv: 4,
    ix: 9,
    xl: 40,
    xc: 90,
    cd: 400,
    cm: 900,
}

const decPairWithRoman: DecPairWithRoman = {
    1: 'i',
    4: 'iv',
    5: 'v',
    9: 'ix',
    10: 'x',
    40: 'xl',
    50: 'l',
    90: 'xc',
    100: 'c',
    400: 'cd',
    500: 'c',
    900: 'cm',
    1000: 'm',

}

export function validateRomanNumber(roman: string): string {
    const romanLowerCase = roman.trim().toLowerCase();

    // V,L,D can't have more than one
    if (/^v{2,}|l{2,}|d{2,}$/.test(romanLowerCase)) {
        throw "V,L,D can't have more than one.";
    }

    // I,X,C can't have more than three
    if (/^i{4,}|x{4,}|c{4,}$/.test(romanLowerCase)) {
        throw "I,X,C can't have more than three.";
    }

    // ordering from larger -> lower
    const roman2Character: string[] = Object.keys(roman2CharacterPairWithDec)
    const roman1Character: string[] = Object.keys(roman1CharacterPairWithDec)

    let decimal: string = roman2Character.reduce((result: string, eachRomanCharacter: string) => {
            return result
                .split(eachRomanCharacter)
                .join(roman2CharacterPairWithDec[eachRomanCharacter] + ',')
        }, romanLowerCase);

    decimal = roman1Character.reduce((result: string, eachRomanCharacter: string) => {
        return result
            .split(eachRomanCharacter)
            .join(roman1CharacterPairWithDec[eachRomanCharacter] + ',')
    }, decimal);

    const originalDecimal: string = decimal
        .split(',')
        .join('');
    const sortedDecimal: string = decimal
        .split(',')
        .filter(str => str !== '')
        .map(str => +str)
        .sort((a: number, b: number) => b - a)
        .join('');

    if (originalDecimal !== sortedDecimal) {
        throw "Wrong sequence."
    }

    return roman;
}

function convertRoman(romanCharacters: string[]): number {

    if (romanCharacters.length === 1) {
        return roman1CharacterPairWithDec[romanCharacters[0]];
    }

    const [firstRomanCharacter, ...otherCharacters] = romanCharacters;

    const firstDecimal: number = roman1CharacterPairWithDec[firstRomanCharacter];
    const secondDecimal: number = roman1CharacterPairWithDec[otherCharacters[0]];

    return firstDecimal >= secondDecimal 
        ? (+1 * firstDecimal) + convertRoman(otherCharacters)
        : (-1 * firstDecimal) + convertRoman(otherCharacters);  
}

export function roman_to_dec(roman: string): number {
    const validatedRoman: string = validateRomanNumber(roman).trim().toLowerCase();

    const romanCharacters: string[] = validatedRoman.split('');

    return convertRoman(romanCharacters)
}

export function dec_to_roman(dec: number): string {
    if (dec === 0) {
        return ''
    }

    const dec2roman: number[] = Object.keys(decPairWithRoman).map(str => +str);

    const maxNumber: number = dec2roman.reduce((result: number, eachNumber: number) => {
        if (eachNumber > result && eachNumber <= dec) {
            result = eachNumber
        }
        return result;
    }, 0)

    return decPairWithRoman[maxNumber.toString()].toLocaleUpperCase() + dec_to_roman(dec - maxNumber)
    
}
