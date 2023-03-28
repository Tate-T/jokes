import React from 'react';
import Container from './components/Container/Container';
import { List } from './components/List/List';
import { Btn } from './components/Btn/Btn';
import './App.css';

 const App = () => {
  return (
    <Container className="App">
      <List/>
      <p>hello</p>
      <Btn/>
    </Container>
  );
}

export default App; 
