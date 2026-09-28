
// 1- OBJECT
const student = {
    name: "kareem",
    age: 23,
    grades: [80, 90, 85]
};

// 2- FUNCTION
function getAverage(arr) {
    let sum = 0;
    for (let n of arr) { 
        sum += n;
    }
    return sum / arr.length;
}
// 3- if statement
function checkPass(avg) {
    if (avg >= 50) {
        return "ناجح";
    } else {
        return "راسب";
    }
}

// 3- LOOPS

// for loop
for (let i = 1; i <= 3; i++) {
    console.log("محاولة", i);
}

// while loop
let c = 2;
while (c > 0) {
    console.log("While:", c);
    c--;
}

// for...in للـ object
for (let key in student) {
    console.log(key, ":", student[key]);
}


let avg = getAverage(student.grades);
console.log("المتوسط:", avg);
console.log(checkPass(avg));