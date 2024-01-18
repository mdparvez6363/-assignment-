function displayPersonAndWorker(person, worker) {
    console.log("Person - Name: ".concat(person.name, ", Age: ").concat(person.age));
    console.log("Worker - Job Title: ".concat(worker.jobTitle, ", Salary: ").concat(worker.salary));
}
var personInfo = {
    name: 'aslam',
    age: 32,
};
var workerInfo = {
    jobTitle: 'Software Engineer',
    salary: 60000,
};
displayPersonAndWorker(personInfo, workerInfo);
