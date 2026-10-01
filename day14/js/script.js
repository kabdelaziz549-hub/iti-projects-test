// الداتا اللي هنشتغل عليها
const employees = [
  { id: 1, name: "Ahmed", department: "IT", salary: 6000, active: true, age: 24 },
  { id: 2, name: "Sara", department: "HR", salary: 8500, active: true, age: 28 },
  { id: 3, name: "Ali", department: "IT", salary: 4500, active: false, age: 22 },
  { id: 4, name: "Mona", department: "Finance", salary: 12000, active: true, age: 32 },
  { id: 5, name: "Omar", department: "IT", salary: 7000, active: true, age: 26 },
  { id: 6, name: "Youssef", department: "HR", salary: 5000, active: false, age: 23 },
];


for (let i = 0; i < employees.length; i++) {
  if (employees[i].active) {
    console.log(employees[i].name);
  }
}