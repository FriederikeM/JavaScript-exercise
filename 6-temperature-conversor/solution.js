let unit = prompt("Please choose Celsius or Fahrenheit");

while (unit !== "celsius" && unit !== "fahrenheit") {
  unit = prompt("Please choose Celsius or Fahrenheit");
}

let temperature = Number(
  prompt(
    "Name a temperature in numbers. Please use a period (.) as the correct separator for decimal numbers."
  )
);

if (Number.isNaN(temperature)) {
  alert(
    "This is not a valid number. Remember to use a period for decimal numbers"
  );
} else {
  if (unit === "celsius") {
    let fahrenheitTemp = temperature * (9 / 5) + 32;
    alert(fahrenheitTemp + "°F");
  }

  if (unit === "fahrenheit") {
    let celsiusTemp = (temperature - 32) * (5 / 9);
    alert(celsiusTemp + "°C");
  }
}
