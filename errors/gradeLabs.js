// Task 1.4
// A teacher has created a gradeLabs function that verifies if student programming labs work. This function
// loops over an array of JavaScript objects that should contain a student property and runLab property.
// The runLab property is expected to be a function containing the student's code. The runLab function is
// called and the result is compared to the expected result. If the result and expected results don't match,
// then the lab is considered a failure.
// The gradeLabs function works for the majority of cases. However, what happens if a student named their
// function incorrectly? Run gradeLabs and pass it studentLabs as defined below
// Upon running the second example, the teacher gets TypeError: lab.runLab is not a function.
// Add a try/catch block inside of gradeLabs to catch an exception if the runLab property is not defined.
// If the exception is thrown, the result should be set to the text "Error thrown".

function gradeLabs(labs) {
  for (let i = 0; i < labs.length; i++) {
    let lab = labs[i];
    let result = null;
    try {
      if ("runLab" in lab) {
        result = `${lab.student} code worked: ${lab.runLab(3) === 27}`;
        console.log(result);
      } else {
        throw TypeError("lab.runLab is not a function.");
      }
    } catch (error) {
      result = "Error thrown";
      console.log(result);
    }
  }
}

let studentLabs = [
  {
    student: "Blake",
    myCode: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Jessica",
    runLab: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Mya",
    runLab: function (num) {
      return num * num;
    },
  },
];
gradeLabs(studentLabs);
