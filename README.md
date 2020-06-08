## How to connect react + node (client-server) Basic

---

### [backend(server repo)](https://github.com/daonez/react_node_server)

> - [Original Link-FreecodeCamp](https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/)
> - [Korean Blog Summary](https://velog.io/@cyongchoi/Node-React-%EC%97%B0%EB%8F%99)

#### Code

```JS
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


```
