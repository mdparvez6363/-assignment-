
function isString(value: any): value is string {
    return typeof value === 'string';
  }
  
  
  function handleStringOrNumber(input: string | number): void {
    if (isString(input)) {
      
      console.log(`Input is a string: ${(input as string).toUpperCase()}`);
    } else if (typeof input === 'number') {
      
      console.log(`Input is a number: ${input * 2}`);
    } else {
      
      console.error('Unsupported input type');
    }
  }
  
  
  handleStringOrNumber("hello"); 
  handleStringOrNumber(5);       
  handleStringOrNumber(2);    
  