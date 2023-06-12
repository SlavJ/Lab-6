// This will ask 'Please tell me your name'
let username = prompt("Please tell me your name");

// This will ask the user to confirm their name
let confirmation = confirm("So I can call you " + username + "?");

// This will console log 'Hi username' if they click OK on the confirmation
if (confirmation == true) {
  console.log("Thanks, Hi " + username);
}

// This will console log 'Sorry, I got your name wrong' if they click cancel on the confirmation
if (confirmation != true) {
  console.log("Sorry, I got your name wrong");
}

// asking user what time it is

// function time() {
//   let time = prompt(username + ", do you know what time it is?");
//   if (time < 12) {
//     document.write("morning");
//   } else if (time > 12) {
//     document.write("afternoon");
//   } else {
//     document.write("its midday");
//   }
// }
// time();

function q1() {
  let q1 = prompt(
    username +
      ", What is the capital of Germany? Is it 1. Munich 2. Dortmund 3. Berlin , please put down your answer as a number"
  );
  if (q1 == 1) {
    document.write(
      "Incorrect, Munich is not the capital city, the answer is Berlin"
    );
  } else if (q1 == 2) {
    document.write(
      "Incorrect, Dortmund is not the capital city, the answer is Berlin"
    );
  } else if (q1 == 3) {
    document.write("Correct!");
  } else {
    document.write("Thats not even an answer ya melt");
  }
}
q1();

function q2() {
  let q2 = prompt(
    username +
      ", Next question, what is the capital of USA? Is it 1. New York 2. Los Angeles 3. Washington , please put down your answer as a number"
  );
  if (q2 == 1) {
    document.write(
      "Incorrect, New York is not the capital city, the answer is Washington"
    );
  } else if (q2 == 2) {
    document.write(
      "Incorrect, Los Angeles is not the capital city, the answer is Washington"
    );
  } else if (q2 == 3) {
    document.write("Correct! Thats 2/2!");
  } else {
    document.write("Oh dear you havent answered the question properly");
  }
}
q2();

function q3() {
  let q3 = prompt(
    username +
      ", Final question, What is the capital of Australia? Is it 1. Sydney 2. Canberra 3. Melbourne , please put down your answer as a number"
  );
  if (q3 == 1) {
    document.write(
      "Incorrect, Sydney is not the capital city, the answer is Canberra"
    );
  } else if (q3 == 2) {
    document.write(
      "Correct! If you have answered all the questions right then you have passed the quiz!"
    );
  } else if (q3 == 3) {
    document.write(
      "Incorrect, Melbourne is not the capital city, the answer is Canberra"
    );
  } else {
    document.write("That is a silly answer");
  }
}
q3();
