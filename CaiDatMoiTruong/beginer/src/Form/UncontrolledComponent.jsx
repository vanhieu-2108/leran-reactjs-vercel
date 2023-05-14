import React, { Component, createRef } from 'react'

export class UncontrolledComponent extends Component {
  constructor(props) {
    super(props)
    this.input = createRef()
    this.fileInput = createRef()
    this.state = {
      selectedFile: null
    }
  }
  handleSubmit = (event) => {
    event.preventDefault()
    // console.log(this.input.current.value)
    const formData = new FormData()
    formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name)
    console.log(this.state.selectedFile)
    // axios.post('api/uploadFile', formData)
  }

  onFileChange = (event) => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type='text' defaultValue='abc' ref={this.input} />
          </label>
          <input type='file' name='avatar' ref={this.fileInput} onChange={this.onFileChange} />
          <input type='submit' value='submit' />
        </form>
      </div>
    )
  }
}

export default UncontrolledComponent
