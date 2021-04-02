alert("Hello There");

let userName = prompt("What's your name?");
let birthYear = Number(prompt("What year were you born in?"));

if (Number.isNaN(birthYear)) {
  alert("Please insert a number");
}

if (birthYear === 0) {
  birthYear = 2021;
}

if (birthYear > 2011) {
  alert(
    `You are too young for this ${userName}. Come back when you are older.`
  );
}

if (birthYear === 1993) {
  alert(`Welcome to my super website ${userName}. We are the same age!`);
} else if (birthYear <= 2003) {
  alert(`Welcome to my super website ${userName}`);
}

if (birthYear > 2003 && birthYear < 2011) {
  let isWithAnAdult = confirm(`Do you have an adult next to you?`);
  if (isWithAnAdult === true) {
    alert(
      `Welcome to my super website ${userName}. Good, that you are not alone here!`
    );
  } else {
    alert(
      `You are too young for this ${userName}. You need an adult next to you to continue.`
    );
  }
}
