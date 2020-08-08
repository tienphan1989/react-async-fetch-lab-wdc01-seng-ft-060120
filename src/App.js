import React, { Component } from 'react'

const url = 'http://api.open-notify.org/astros.json';

export default class App extends Component {

    componentDidMount(){
        fetch(url)
        .then(resp => resp.json())
        .then(resp => console.log(resp))
        .catch(error => console.log(error))
    }

    render() {
        return (
            <div class="app">
                
            </div>
        )
    }
}

