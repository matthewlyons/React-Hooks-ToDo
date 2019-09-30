import React from 'react';
import { Container } from 'reactstrap';

import FormInput from './components/FormInput';
import List from './components/List';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <Container>
        <FormInput />
        <List />
      </Container>
    </div>
  );
}

export default App;
