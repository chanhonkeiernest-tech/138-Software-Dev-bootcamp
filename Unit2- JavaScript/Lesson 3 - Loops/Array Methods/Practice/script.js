// Practice array
const temperatures = [72, 68, 75, 79, 85, 91, 73, 77, 69, 82];

// TODO 1: Use forEach to log each temperature in Fahrenheit and its Celsius equivalent

temperatures.forEach(number => console.log(number +"F"));
// TODO 2: Use map to create a new array where each temperature is increased by 5 degrees
const increasedTemperatures = temperatures.map(temp => temp + 5);
// TODO 3: Use filter to create a new array with temperatures above 80°F
const hotTemperatures = temperatures.filter(temp => temp > 80);
// TODO 4: Use reduce to find the average temperature
const averageTemperature = temperatures.reduce((sum, temp) => sum + temp) / temperatures.length;


// Additional Practice Examples

// TODO 5: Use map to convert the temperatures to strings (e.g., "Temp: 72°F")
const increasedStrings = temperatures.map(temp => "Temp:"+ temp + "F");

// TODO 6: Use filter to get temperatures that are below 70°F
const cold=temperatures.filter(temp => temp <70)

// TODO 7: Use forEach to log if each temperature is considered "Hot" (above 85°F) or "Cool" (85°F and below)

temperatures.forEach(temp => {
  if (temp > 85) {
    console.log(`${temp}°F is Hot`);
  } else {
    console.log(`${temp}°F is Cool`);
  }
});