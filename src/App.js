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
            <FirstSlide />
          </Slide>
          <Slide transition={[
            'fade',
            (transitioning, forward) => {
              const angle = forward ? -180 : 180;
              return {
                transform: `
          translate3d(0%, ${transitioning ? 100 : 0}%, 0)
          rotate(${transitioning ? angle : 0}deg)
        `,
                backgroundColor: transitioning ? '#26afff' : 'tomato'
              };
            }
          ]}>
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
