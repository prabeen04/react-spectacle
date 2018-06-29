import React, { Component } from 'react';
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Code,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from 'spectacle';
import FirstSlide from './components/firstSlide';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Deck>
          <Slide>
            <FirstSlide/>
          </Slide>
          <Slide>
            <Text>Hola</Text>
          </Slide>
          <Slide>
            <Text>Hiii</Text>
          </Slide>
        </Deck>
      </div>
    );
  }
}

export default App;
