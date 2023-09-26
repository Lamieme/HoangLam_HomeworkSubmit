//Bài 1: Check odd, even
let arr = [0, 5, 9, 4, 6, 10, 18];
for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0) {
    console.log(`Even numbers are ${arr[i]}.`);
    }
    else if (arr[i] % 2 == 1){
        console.log(`Odd numbers are ${arr[i]}.`)
    }
}

//Bài 2: Find outlier number
function findOutlierNum(arr) {
    let evenCount = 0;
    let oddCount = 0;
    let outlier;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (evenCount > 1 && arr[i] % 2 !== 0) {
          outlier = arr[i];
          break;
        }
        if (oddCount > 1 && arr[i] % 2 === 0) {
          outlier = arr[i];
          break;
        }
      }
    
      return outlier;
    }


console.log(findOutlierNum([2, 3, 4])); 
console.log(findOutlierNum([1, 2, 3])); 
console.log(findOutlierNum([4, 1, 3, 5, 9])); 
