//1 

function motivation(x) {
    const phrase = (`I will never give up`);
    for (let i = 0; i < x; i++) {
        console.log(phrase);
    }
}
motivation(10);

//2

function numOfVowels(s1) {
    const phrase2 = s1
    vowelCounter = 0;
    for (let i = 0; i < phrase2.length; i++) {   
        if (phrase2[i].includes('a') || (phrase2[i].includes('e')) || (phrase2[i].includes('i')) || (phrase2[i].includes('o')) || (phrase2[i].includes('u'))) {
            //console.log(phrase2[i].includes('a') || (phrase2[i].includes('e')))
            vowelCounter = vowelCounter + 1
        }
    }
    return vowelCounter;
}

console.log(numOfVowels('Maybaea'))





function numOfVowels2(s2) {
    vowelCounter = 0;
    for (let i = 0; i < s2.length; i++) {
        if ('aeiou'.includes(s2[i])) {
            //console.log(phrase2[i].includes('a') || (phrase2[i].includes('e')))
            vowelCounter = vowelCounter + 1
        }
    }
    return vowelCounter;
}

console.log(numOfVowels2('Maybaeae'))

