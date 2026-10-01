const employees = [
  { id: 1, name: "Ahmed", age: 22, salary: 6000, department: "IT", active: true },
  { id: 2, name: "Sara", age: 27, salary: 8500, department: "HR", active: true },
  { id: 3, name: "Ali", age: 20, salary: 4500, department: "IT", active: false },
  { id: 4, name: "Mona", age: 30, salary: 10000, department: "Finance", active: true },
  { id: 5, name: "Omar", age: 24, salary: 7000, department: "Marketing", active: false },
  { id: 6, name: "Youssef", age: 29, salary: 12000, department: "IT", active: true }
];

const activeCount = employees.reduce((count, e) => e.active ? count + 1 : count, 0);

console.log(activeCount); // 4