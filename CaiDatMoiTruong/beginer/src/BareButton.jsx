import React from 'react'
class BareButton extends React.Component {
  constructor(props) {
    super(props)
  }
  handleCLick(event, value) {
    console.log(event)
    console.log(value)
  }
  //   handleCLick = (value) => {
  //     console.log(value)
  //   }

  // Currying rut gon
  //   handleCLick = (value) => () => {
  //     console.log(value)
  //   }
  //   Currying dai` dong`
  //   handleCLick = (value) => {
  //     return () => {
  //       console.log(value)
  //     }
  //   }

  render() {
    return (
      <div>
        <button onClick={(event) => this.handleCLick(event, 'Add')}>Add</button>
        <button onClick={this.handleCLick.bind(this, 'Delete')}>Delete</button>
        <button onClick={this.handleCLick.bind(this, 'Edit')}>Edit</button>
      </div>
    )
  }
}

export default BareButton
