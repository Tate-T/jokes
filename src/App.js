import React from 'react';
import Container from './components/Container/Container';
import { List } from './components/List/List';
import { Btn } from './components/Btn/Btn';
import './App.css';

 const App = () => {
  return (
    <Container >
      <h1 className='animate__heartBeat'>Jokes</h1>
      <List />
      {/* <Btn/> */}
    </Container>
  );
}

export default App; 
