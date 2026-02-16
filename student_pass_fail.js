const students = [
    { name: "Ali", marks: 80 },
    { name: "Sara", marks: 45 },
    { name: "Ahmed", marks: 60 },
    { name: "Zara", marks: 30 }
]

function gradeCheck(check) {


    if (check.marks >= 50) {
        return "pass"
    }
    else {

        return "fail"
    }

}
let passcount=0;
let failcount=0;
   

for (let i = 0; i < students.length; i++) {

    let result= gradeCheck(students[i])

    if(result === "pass"){
        passcount++;
    }
    else{
        failcount++;
    }

}

let total = students.length
let passpercentage = passcount/total *100;

console.log(`pass percentage is ${passpercentage}`)


let failpercentage = failcount/total * 100;

console.log(`pass percentage is ${failpercentage}`)

console.log(`total pass count is ${passcount}`)
console.log(`total fail count is ${failcount}`)