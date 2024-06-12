import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL, API_KEY } from './src/constant'
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native'
import WeatherSearch from './src/components/weatherSearch'
import WeatherInfo from './src/components/weatherInfo'

const App = () => {
  const [weatherData, setWeatherData] = useState()
  const [status, setStatus] = useState('')
  const searchWeather = (location) => {
    setStatus('loading')
    axios
      .get(`${BASE_URL}?q=${location}&appid=${API_KEY}`)
      .then((response) => {
        const data = response.data
        data.visibility /= 1000
        data.visibility = data.visibility.toFixed(2)
        data.main.temp -= 273.15 // Konversi Kelvin ke Celcius
        data.main.temp = data.main.temp.toFixed(2)
        data.main.temp_min -= 273.15
        data.main.temp_min = data.main.temp_min.toFixed(2)
        data.main.temp_max -= 273.15
        data.main.temp_max = data.main.temp_max.toFixed(2)
        setWeatherData(data)
        setStatus('success')
      })
      .catch((error) => {
        setStatus('error')
      })
  }

  const renderComponent = () => {
    switch (status) {
      case 'loading':
        return <ActivityIndicator size="large" />
      case 'success':
        return <WeatherInfo weatherData={weatherData} />
      case 'error':
        return (
          <Text>
            Something went wrong. Please try again with a correct city name.
          </Text>
        )
      default:
        return
    }
  }

  return (
    <View style={styles.container}>
      <WeatherSearch searchWeather={searchWeather} />
      <View style={styles.margintTop20}>{renderComponent()}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
})

export default App