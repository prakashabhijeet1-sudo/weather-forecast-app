const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(cors());

const PORT = 5000;

app.get("/weather/:city", async (req, res) => {

    const city = req.params.city;

    try {

        const apiKey = process.env.API_KEY;

        const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await axios.get(weatherURL);

        const data = response.data;

        res.json({
            city: data.name,
            temperature: data.main.temp,
            description: data.weather[0].description,
            humidity: data.main.humidity
        });

    } catch (error) {

        res.json({
            error: "City not found"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});