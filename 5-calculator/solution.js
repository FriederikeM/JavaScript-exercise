let i = prompt(
  "Which operation do you want to do? Type one of these: +, -, *, / or type exit to leave. You can also leave by cancelling the prompt"
);

if (i !== "exit") {
  if (i === "+") {
    let operand1 = Number(prompt("Name a random number"));
    let operand2 = Number(prompt("Name another random number"));
    let sum = operand1 + operand2;
    alert(sum);
  }

  if (i === "-") {
    let operand1 = Number(prompt("Name a random number"));
    let operand2 = Number(prompt("Name another random number"));
    let sum = operand1 - operand2;
    alert(sum);
  }

  if (i === "*") {
    let operand1 = Number(prompt("Name a random number"));
    let operand2 = Number(prompt("Name another random number"));
    let sum = operand1 * operand2;
    alert(sum);
  }

  if (i === "/") {
    let operand1 = Number(prompt("Name a random number"));
    let operand2 = Number(prompt("Name another random number"));
    let sum = operand1 / operand2;
    alert(sum);
  }
}
