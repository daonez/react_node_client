import React, { Component } from "react"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { apiResponse: "" }
  }
  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }))
  }
  componentDidMount() {
    this.callAPI()
    console.log(this.state)
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <p>{this.state.apiResponse}</p>
      </div>
    )
  }
}
