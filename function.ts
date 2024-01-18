
interface Person {
    name: string;
    age: number;
  }
  
  
  interface Worker {
    jobTitle: string;
    salary: number;
  }
  
  
  function displayPersonAndWorker(person: Person, worker: Worker): void {
    console.log(`Person - Name: ${person.name}, Age: ${person.age}`);
    console.log(`Worker - Job Title: ${worker.jobTitle}, Salary: ${worker.salary}`);
  }
  
  
  const personInfo: Person = {
    name: 'aslam',
    age: 32,
  };
  
  const workerInfo: any = {
    jobTitle: 'Software Engineer',
    salary: 60000,
  };
  
 
  displayPersonAndWorker(personInfo, workerInfo);
  