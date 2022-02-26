import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HousesList } from './Components/HousesList';

class App extends Component {
  render() {
      return (
        <div>
          <HousesApi props={{test: data}} />
        </div>
      )
  }
}

