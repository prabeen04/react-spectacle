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
  Notes,
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
          <Text>Slided Animation</Text>
          </Slide>
          <Slide>
            <Text>Hola</Text>
            <List>
              <ListItem>Watch</ListItem>
              <ListItem>Observe</ListItem>
              <ListItem>Practice</ListItem>
              <ListItem>Repeat</ListItem>
            </List>
          </Slide>
          <Notes>
            <h4>Slide notes</h4>
            <ol>
              <li>First note</li>
              <li>Second note</li>
            </ol>
          </Notes>
        </Deck>
      </div>
    );
  }
}

export default App;
