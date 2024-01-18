
function isString(variable:any ): variable is string {
    return typeof variable === 'string';
  }
  
  
  function processString(input: any): string | void {
    if (isString(input)) {
    
      return input.toUpperCase();
    } else {
      
      console.log('Input is not a string');
    }
  }
  
  
  const strResult = processString('laptop'); 
  const nonStrResult = processString(2024);   
  
  console.log(strResult);       

  