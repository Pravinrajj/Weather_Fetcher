# Weather_Fetcher
## Date:
## Objective:
To demonstrate how to use Promises and async/await in JavaScript by fetching and displaying live weather data from an API. This activity reinforces real-world async data handling in web applications.

## Tasks:

#### 1. Create the HTML Structure:
Add a heading like ```<h1>WeatherNow</h1>```

Create an ```<input>``` for the city name

Add a ```<button>``` to trigger the fetch

Create a <div> to display the weather information

#### 2. Style with CSS:
Center the layout and style input and button

Style the weather output box with borders, padding, and a background color

Add hover effects for the button

#### 3. JavaScript with Promises and Async/Await:
Use fetch() to get weather data from a free API like https://api.weatherapi.com or a mock API

Wrap the fetch in an async function

Use await to wait for the response and parse it as JSON

Use .catch() to handle any errors in the promise

Display the temperature, description, and location in the output div
## HTML Code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <script src="script.js" defer></script>
    <title>Weather Fetcher</title>
</head>
<body>
    <div class="container">
        <h1>WeatherNow</h1>
        <input type="text" id="city" placeholder="Enter city name: " />
        <button id="fetch">Get Weather</button>
        <div id="Output" class="output"></div>
    </div>
</body>
</html>
```
## CSS Code:
```css
body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
    margin: 0;
}
  
.container {
    text-align: center;
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
    margin-bottom: 20px;
    font-size: 2em;
    color: #333;
}

input {
    padding: 10px;
    width: 200px;
    margin-bottom: 20px;
    font-size: 1em;
    border: 2px solid #ddd;
    border-radius: 4px;
}

button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    font-size: 1em;
    border: none;
    border-radius: 4px;
}

button:hover {
    background-color: #45a049;
}

.output {
    margin-top: 20px;
    padding: 15px;
    border: 1px solid #ddd;
    background-color: #f9f9f9;
    border-radius: 4px;
    display: none;
}

.output p {
    margin: 5px 0;
}
```
## JavaScript Code:
```js
const weatherAPIKey = '3a648e757fde407793d91002251207';
const weatherBaseURL = 'https://api.weatherapi.com/v1/current.json';

const btn = document.getElementById('fetch');
const cityInput = document.getElementById('city');
const weatherOutput = document.getElementById('Output');

btn.addEventListener('click', async () => {
  const city = cityInput.value.trim();
  if (city === '') {
    alert('Please enter a city!');
    return;
  }

  weatherOutput.innerHTML = '<p>Loading...</p>';
  weatherOutput.style.display = 'block';

  try {
    const response = await fetch(`${weatherBaseURL}?key=${weatherAPIKey}&q=${encodeURIComponent(city)}`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'City not found');
    }

    const data = await response.json();

    const { temp_c, condition } = data.current;
    const { name, region, country } = data.location;
    const { text, icon } = condition;

    weatherOutput.innerHTML = `
      <p><strong>Location:</strong> ${name}, ${region}, ${country}</p>
      <p><strong>Temperature:</strong> ${temp_c}°C</p>
      <p><strong>Condition:</strong> ${text}</p>
    `;
  } catch (error) {
    weatherOutput.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
  }
});
```
## Output:
<img width="841" height="578" alt="image" src="https://github.com/user-attachments/assets/56f0aa0b-8900-4c17-8298-f78c30971bfa" />

## Result:
A mini module that successfully uses Promises and async/await to handle real-time API data, reinforcing asynchronous JavaScript patterns in a practical context.
