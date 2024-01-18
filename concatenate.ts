function concatenateOrSum(arr: (string | number)[]): string | number {
    if (arr.every(item => typeof item === 'string')) {
   
      return arr.join('');
    } else if (arr.every(item => typeof item === 'number')) {
      
      let sum = 0;
      for (const number of arr) {
        sum += Number(number);
      }
      return sum;
    } else {
      
      throw new Error('Unsupported array type');
    }
  }
  
  
  const result11 = concatenateOrSum(['Hello', ' ', 'World']); 
  const result22 = concatenateOrSum([1, 2, 3, 4]);           
  
  console.log(result11); 
  console.log(result22); 
  