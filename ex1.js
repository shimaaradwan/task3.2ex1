function getEvenNumbers(arr) {
    let evenNumbers = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evenNumbers.push(arr[i]);
      }
    }
  
    return evenNumbers;
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evenNumbers = getEvenNumbers(numbers);
  document.getElementById("demo").innerHTML = getEvenNumbers(numbers);
  