function reverseArray<T>(arr: T[]): T[] {
    return [...arr].reverse();
  }
  
  
  const originalArray = [1, 2, 3, 4, 5];
  const reversedArray = reverseArray(originalArray);
  
  console.log(originalArray); 
  console.log(reversedArray); 
  