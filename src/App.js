import React, { Component } from "react";

class App extends Component {
    state = {
        lat: null,
        errorMessage: ""
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (response) => this.setState({ lat: response.coords.latitude }),
            (error) => console.error(error)
        )
    }

    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitute: {this.state.lat}</div>
        }

        return <div>Loading...</div>
    }
}

export default App;