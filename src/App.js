import React, { Component } from "react";

import SeasonDisplay from "./components/SeasonDisplay";

class App extends Component {
    state = {
        lat: null,
        errorMessage: ""
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (response) => this.setState({ lat: response.coords.latitude }),
            (error) => this.setState({ errorMessage: error.message })
        )
    }

    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <div>Loading...</div>
    }
}

export default App;