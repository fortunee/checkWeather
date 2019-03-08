import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config()

const APPID = process.env.APP_ID;

const getWeatherByZipCode = async (zip) => {
    const endPoint = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&APPID=${APPID}`;
    try {
        return await axios.get(endPoint);
    } catch (error) {
        console.error(error)
    }
}

const checkWeather = async ([locationName, locationZipCode]) => {
    const currentTime = new Date().toISOString();
    const currentWeather = await getWeatherByZipCode(locationZipCode);

    if (currentWeather.data) {
        const weatherData = currentWeather.data.weather;
        console.log(`${currentTime}: There's a ${weatherData[weatherData.length - 1].description} in ${locationName}`)
    }
}

checkWeather(['NYC', 10001])