import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config()

const APPID = process.env.APP_ID;

const getWeatherByZipCode = async (zip) => {
  const endPoint = `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&APPID=${APPID}`;
  try {
    return await axios.get(endPoint);
  } catch (error) {
    console.error(error)
  }
}
