/*
7. Hell's Kitchen

You will be given an array of strings, which represents a list of all the restaurants with their workers.
When the [Send] button is clicked:
· Display the best restaurant of all the added restaurants with its average salary and best salary.
· If there is a restaurant in the input array that is added more than once, you need to add new workers to the old ones and update the values of the average salary and the best salary.
· The best restaurant is the restaurant with the highest average salary. If two restaurants have the same average salary the best restaurant is the first one added.
· Display all workers in the best restaurant with their salaries.
The best restaurant's workers should be sorted by their salaries in descending order.

Input

The input will be received from the given textarea in the form of an array of strings. Each string represents a restaurant with its workers: ["Mikes - Steve 1000, Ivan 200, Paul 800", "Fleet - Maria 850, Janet 650"]

Output

· The output contains two strings
- The first one is the best restaurant in the format:

`Name: {restaurant name} Average Salary: {restaurant avgSalary} Best Salary: {restaurant bestSalary}`

avgSalary and bestSalary must be formatted to the second decimal point.
- The second one is all the workers in that restaurant in the following format:
`Name: {worker name} With Salary: {worker salary} Name: {worker2 name} With Salary: {worker2 salary} Name: {worker3 name} With Salary: {worker3 salary}…`

Constraints

· The workers will be always unique
*/
"use strict"
function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   //["PizzaHut - Peter 500, George 300, Mark 800","TheLake - Bob 1300, Jane 660, Joe 780"]
   let result = document.getElementById("btnSend");
   let input = Array.from(document.querySelectorAll("#inputs > textarea"));

   function onClick() {

      let restorants = [];

      for (let i = 0; i < input.length; i++) {
         const element = input[i].value;

         let sumSalary = 0;
         let workerCount = 0;

         let restorant = {
            restorantName: "",
            workers: {},
            averageSalary: 0,
            bestSalary: 0,
         };

         let restorantInfo = element.split(" - ");
         restorant.restorantName = restorantInfo[0];

         let workersInfo = restorantInfo[1].split(", ")

         for (const info of workersInfo) {

            const [name, salary] = info.split(" ");
            let salaryInNumber = Number(salary);

            if (salaryInNumber > restorant.bestSalary) {
               restorant.bestSalary = salaryInNumber;
            }

            if (!restorant.workers.hasOwnProperty(name)) {
               restorant.workers[name] = salaryInNumber;
               workerCount++;
            } else {
               restorant.workers[name] += salaryInNumber;
            }

            sumSalary += salaryInNumber;
         }

         restorant.averageSalary = sumSalary / workerCount;
         restorants.push(restorant);
      }

      let theBestRestorant = restorants.sort((a, b) => b.averageSalary - a.averageSalary)[0];

      console.log(`Name: ${theBestRestorant.restorantName} Average Salary: ${theBestRestorant.averageSalary} Best Salary: ${theBestRestorant.bestSalary}`);

      let sortedWorkers = Object.entries(theBestRestorant.workers).sort((a, b) => b.salary - a.salary);

      for (const [worker, salary] of sortedWorkers) {
         console.log(`Name: ${worker} With Salary: ${salary}`);
      }
   }

}