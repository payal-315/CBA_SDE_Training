//Exercise 5: Array Operations
//Problem Statement: Create an array of five student names. Perform the following operations: Print all student names.
//Print the total number of students. Add a new student at the end. Remove the first student. Display the updated array.

let student=["Amit","Priya","Rahul","Neha","Karan"]
for(let i=0;i<student.length;i++){
    console.log(student[i])   
}
console.log("")
console.log("Total Student: "+student.length)


student.push("Anjali")
console.log("After Adding:")
for(let i=0;i<student.length;i++){
    console.log(student[i])
}

console.log("")
student.shift()
console.log("After Removing First Student:")
for(let i=0;i<student.length;i++){
    console.log(student[i])
}
