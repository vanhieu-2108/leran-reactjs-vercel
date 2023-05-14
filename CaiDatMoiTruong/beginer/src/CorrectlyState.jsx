import React, { Component } from 'react'

const fetchComments = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(['A', 'B', 'C'])
    }, 1000)
  })

export class CorrectlyState extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      comments: []
    }
  }
  componentDidMount() {
    console.log('componentDidMount')
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
    // React class component có tính năng merge state
    fetchComments().then((res) => {
      this.setState({
        comments: res
      })
    })
  }
  render() {
    console.log('render')
    console.log(this.state.count)
    console.log(this.state.comments)
    return <div>CorrectlyState. Count: {this.state.count}</div>
  }
}

export default CorrectlyState
