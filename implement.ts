function getLengthOrSquare(input: string | number): number {
    if (typeof input === 'string') {
      return input.length;
    } else if (typeof input === 'number') {
      return input * input;
    } else {
      
      throw new Error('Unsupported input type');
    }
  }
  
 
  const result1 = getLengthOrSquare('Hello');
  const result2 = getLengthOrSquare(4);        
  
  console.log(result1); 
  console.log(result2);
  