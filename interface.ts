
interface Person {
    name: string;
    age: number;
  }
 
  interface Worker {
    jobTitle: string;
    salary: number;
    
  }
  
  
  type person= Person & Worker;
  
 
  const person: any = {
    name: "parvez",
    age: 30,
    jobTitle: "Software Engineer",
    salary: 80000,
   
   
  };
  
  console.log(person);
  