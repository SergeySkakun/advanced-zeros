module.exports = function getZerosCount(number, base) {
  //разбить base на максимальное простое число и сделать с ним тоже что и с 5 в предыдущем таске
  let numeric = number;
  let scaleOfNotation = base;
  let result = 0;
  let simpleNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 
                      71,	73,	79,	83,	89, 97,	101, 103,	107, 109, 113, 127, 131, 137, 139, 149, 
                      151, 157,	163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 
                      233, 239, 241, 251];
  

  if (simpleNumbers.indexOf(scaleOfNotation) + 1) {
    do {
      numeric = Math.floor(numeric / base);
      result = result + numeric;
    }
    while (numeric >= base);
  }
  else {
    let index = 0;
    let allDividers = [];
    let currentDivider = [0, 0];
    let allResults = [];

    while(scaleOfNotation > 1) {
      currentDivider[0] = simpleNumbers[index];

      if(scaleOfNotation % currentDivider[0]) {
        if(currentDivider[1]) {
          allDividers.push(currentDivider);
        }
        currentDivider = [0, 0];
        index++;
      }
      else {
        scaleOfNotation = scaleOfNotation / currentDivider[0];
        currentDivider[1] = currentDivider[1] + 1;

        if(scaleOfNotation == 1) {
          allDividers.push(currentDivider);
        }
      }
    }

    allDividers.forEach(element => {
      let currentResult = 0;
      let currentNumber = number;

      do {
        currentNumber = Math.floor(currentNumber / element[0]);
        currentResult = currentResult + currentNumber;
      }
      while (currentNumber >= element[0]);

      allResults.push(Math.floor(currentResult / element[1]));
    });
    
    result = Math.min(...allResults);
  }

  return result;
}