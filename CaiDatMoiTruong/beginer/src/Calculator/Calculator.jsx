import React, { Component } from 'react'
import TemperatureInput from './TemperatureInput'
import BoilingVerdict from './BoilingVerdict'

const toCelsius = (fahrenheit) => {
  return (fahrenheit - 32) / 1.8
}

const toFahrenheit = (celsius) => {
  return celsius * 1.8 + 32
}

const tryConvert = (temperature, convertFunc) => {
  const input = parseFloat(temperature)
  if (Number.isNaN(input)) {
    return ''
  }
  let output = convertFunc(temperature)
  output = Math.round(output * 1000) / 1000
  return output
}

export class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      temperature: '',
      scale: 'c'
    }
  }

  handleChange = (scale) => (value) => {
    this.setState({
      temperature: value,
      scale
    })
  }

  render() {
    const { scale, temperature } = this.state
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature
    return (
      <div>
        <TemperatureInput title='Celsius' temperature={celsius} onTemperatureChange={this.handleChange('c')} />
        <TemperatureInput title='Fahrenheit' temperature={fahrenheit} onTemperatureChange={this.handleChange('f')} />
        <BoilingVerdict celsius={celsius} />
      </div>
    )
  }
}

export default Calculator
