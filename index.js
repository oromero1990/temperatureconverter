// Convert Fahrenheit to Celsius
function convertToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

// Get a description of the temperature in Celsius
function describeTemperature(fahrenheit) {
  const celsius = convertToCelsius(fahrenheit);

  if (celsius < 0) return "very cold";
  if (celsius < 20) return "cold";
  if (celsius < 30) return "warm";
  if (celsius < 40) return "hot";
  return "very hot";
}

// Prompt the user for input and display the result
const userInput = prompt("Enter a temperature in Fahrenheit:");
const fahrenheit = parseFloat(userInput);

if (!isNaN(fahrenheit)) {
  const celsius = convertToCelsius(fahrenheit).toFixed(2);
  const description = describeTemperature(fahrenheit);
  alert(
    `${fahrenheit}°F is approximately ${celsius}°C — that's ${description}!`
  );
} else {
  alert("Please enter a valid number.");
}
