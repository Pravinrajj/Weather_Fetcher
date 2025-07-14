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