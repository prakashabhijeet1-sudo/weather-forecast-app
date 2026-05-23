async function getWeather() {

    const city = document.getElementById("city").value;

    const response = await fetch(`http://localhost:5000/weather/${city}`);

    const data = await response.json();

    const resultDiv = document.getElementById("weatherResult");

    if(data.error){
        resultDiv.innerHTML = `<p>${data.error}</p>`;
        return;
    }

    resultDiv.innerHTML = `
        <h2>${data.city}</h2>
        <p>Temperature: ${data.temperature} °C</p>
        <p>Weather: ${data.description}</p>
        <p>Humidity: ${data.humidity}%</p>
    `;
}