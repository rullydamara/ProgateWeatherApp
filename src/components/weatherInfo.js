import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const WeatherInfo = ({weatherData}) => {
  return (
    <View style={styles.marginTop20}>
      <Text style={styles.title}>The weather of {weatherData.name}</Text>
      <Text style={[styles.temperature, styles.marginTop20]}>{weatherData.main.temp} °C</Text>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Text style={[styles.text, styles.bold]}>Min : {weatherData.main.temp_min} °C | </Text>
        <Text style={[styles.text, styles.bold]}>Max : {weatherData.main.temp_max} °C</Text>
      </View>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Image
          source={{ uri: `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png` }}
          style={styles.weatherIcon}
        />
        <Text style={[styles.text, styles.bold]}>{weatherData.weather[0].main}</Text>
      </View>
      <Text style={styles.text}>{weatherData.weather[0].description}</Text>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Text style={[styles.text, styles.bold]}>Visibility :</Text>
        <Text style={[styles.text, styles.marginLeft15]}>{weatherData.visibility} km</Text>
      </View>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Text style={[styles.text, styles.bold]}>Wind Speed :</Text>
        <Text style={[styles.text, styles.marginLeft15]}>{weatherData.wind.speed} m/s</Text>
      </View>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Text style={[styles.text, styles.bold]}>Humidity :</Text>
        <Text style={[styles.text, styles.marginLeft15]}>{weatherData.main.humidity} %</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 25,
  },
  marginTop20: {
    marginTop: 20,
  },
  marginLeft15: {
    marginLeft: 15,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
  },
  bold: {
    fontWeight: '700',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  temperature: {
    fontWeight: '700',
    fontSize: 80,
    textAlign: 'center',
  },
  weatherIcon: {
    width: 50,
    height: 50,
  },
})

export default WeatherInfo