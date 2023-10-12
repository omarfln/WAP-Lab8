Object.defineProperty(Array.prototype, "customSort2", {
    value: function() {
        return this.sort(function(a, b) {
            if (a.computeAverageGrade && b.computeAverageGrade) {
                return a.computeAverageGrade() - b.computeAverageGrade();
            }
            return 0;
        });
    }
});

function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = [];
}

Student.prototype.inputNewGrade = function (newGrade) {
    this.grades.push(newGrade);
}

Student.prototype.computeAverageGrade = function () {
    if (this.grades.length === 0) {
        return 0;
    }
    
    let sum = 0;
    this.grades.forEach((elem) => sum += elem);
    return sum / this.grades.length;
}

console.log("\n\n\n======== Using Function========");

let students = [];

let st4 = new Student("Omar", "Flayan");
st4.inputNewGrade(4);
st4.inputNewGrade(3);
st4.inputNewGrade(2);

students.push(st4);

let st5 = new Student("Danny", "Ahron");
st5.inputNewGrade(2);
st5.inputNewGrade(1);
st5.inputNewGrade(0);
students.push(st5);

let st6 = new Student("Mike", "Liza");
st6.inputNewGrade(0);
st6.inputNewGrade(0);
st6.inputNewGrade(1);
students.push(st6);

let totalSum = 0;

students.forEach((student) => {
    totalSum += student.computeAverageGrade();
});

let totalAverage = totalSum / students.length;
console.log("Average grades for all students: " + totalAverage);

console.log("\n\n\n======== Sort and Average Function========");
console.log("Custom Sort:")
students.customSort2();
students.forEach(function(student) {
    console.log(student.firstName + " " + student.lastName + " Average grade: " + student.computeAverageGrade());
});
