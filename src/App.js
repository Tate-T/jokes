import React from 'react';
import Container from './components/Container/Container';
import List from './components/List/List';
import Btn from './components/Btn/Btn';
import './App.css';

function App() {
  return (
    <Container className="App">
      <List/>
      <Btn/>
    </Container>
  );
}

export default App;
