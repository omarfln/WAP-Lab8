Object.defineProperty(Array.prototype, "customSort", {
    value: function() {
        return this.sort(function(a, b) {
            if (a.computeAverageGrade && b.computeAverageGrade) {
                return a.computeAverageGrade() - b.computeAverageGrade();
            }
            return 0;
        });
    }
});

let student = {
    firstName: '',
    lastName: '',
    grades: [],
    inputNewGrade: function(newGrade) {
        this.grades.push(newGrade);
    },
    computeAverageGrade: function() {
        if (this.grades.length === 0) {
            return 0;
        }
        let sum = 0;
        this.grades.forEach((elem) => sum += elem);
        return sum / this.grades.length;

    }
};

console.log("============Using object==========");

let st1 = Object.create(student);
st1.firstName = "Omar";
st1.lastName = "Flayan";
st1.grades = [];
st1.inputNewGrade(4);
st1.inputNewGrade(3);
st1.inputNewGrade(2);

let st2 = Object.create(student);
st2.firstName = "Danny";
st2.lastName = "Ahron";
st2.grades = [];
st2.inputNewGrade(2);
st2.inputNewGrade(1);
st2.inputNewGrade(0);

let st3 = Object.create(student);
st3.firstName = "Mike";
st3.lastName = "Liza";
st3.grades = [];
st3.inputNewGrade(0);
st3.inputNewGrade(0);
st3.inputNewGrade(1);

let studentsArr = [];
studentsArr.push(st1);
studentsArr.push(st2);
studentsArr.push(st3);


let totalSumArr = 0;
studentsArr.forEach((student) => {
    totalSumArr += student.computeAverageGrade();
});

let totalAverageArr = totalSumArr / studentsArr.length;
console.log("Average grades for all students: " + totalAverageArr);

console.log("\n\n\n======== Sort and Average========");
console.log("Custom Sort: ")
studentsArr.customSort();
studentsArr.forEach(function(student) {
    console.log(student.firstName + " " + student.lastName + " Average grade: " + student.computeAverageGrade());
});
