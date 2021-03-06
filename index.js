import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const APPID = process.env.APP_ID
const URL = 'http://api.openweathermap.org/data/2.5/weather?zip='

const getWeatherByZipCode = async (zip) => {
  const endPoint = `${URL}${zip},us&APPID=${APPID}`
  try {
    return await axios.get(endPoint)
  } catch (error) {
    console.error(error)
  }
}

const checkWeather = async ([locationName, locationZipCode]) => {
  const currentTime = new Date().toISOString()
  const currentWeather = await getWeatherByZipCode(locationZipCode)

  if (currentWeather.data) {
    const { weather } = currentWeather.data
    console.log(`${currentTime}: There's a ${weather[weather.length - 1].description} in ${locationName}`)
  }
}

checkWeather(['NYC', 10001])
