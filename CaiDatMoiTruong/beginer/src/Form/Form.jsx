import React, { Component } from 'react'

export class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      address: '',
      food: 'coconut',
      marriage: false
    }
  }

  handleChange = (event) => {
    console.log(event)
    const { target } = event
    const value = target.type === 'checkbox' ? target.checked : target.value
    const { name } = target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor=''>
            Name:
            <input type='text' name='name' value={this.state.name} onChange={this.handleChange} />
          </label>
          <input type='checkbox' name='marriage' checked={this.state.marriage} onChange={this.handleChange} />
          <textarea name='address' value={this.state.address} onChange={this.handleChange}></textarea>
          <select onChange={this.handleChange} value={this.state.food} name='food'>
            <option value='grapefruit'>Grapefruit</option>
            <option value='lime'>Lime</option>
            <option value='coconut'>Coconut</option>
            <option value='mango'>Mango</option>
          </select>
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

export default Form
