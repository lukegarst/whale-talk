const input = 'turpentine and turtles';

var vowels = ['a', 'e', 'i', 'o', 'u'];

var resultArray = [];

for (let i = 0; i < input.length; i++) {
    const elementInput = input[i];

    
       for (let j = 0; j < vowels.length; j++) {
        const elementVowels = vowels[j];

        
               if (elementInput === elementVowels) {
        resultArray.push(elementInput);

        if (elementInput === 'e') {
            resultArray.push(input[i]);
        }

        if (elementVowels === 'u') {
            resultArray.push(input[i]);
        }
    } 

}
};

resultString = resultArray.join('').toUpperCase();

console.log(resultString);
