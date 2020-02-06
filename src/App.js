import React from 'react';
import logo from './logo.svg';
import './App.css';

import './styles/scss-loader.scss';
import Button from './components/Button';
//import Button from '@bit/xdemetr.bem-library.button/components/Button';

// import Button2 from './components/Button';
//import ButtonGroup from './components/ButtonGroup/ButtonGroup';
//import Button from '@bit/xdemetr.bem-library.button/components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React

          <Button className="123">hello</Button>
          {/*<Button2>123</Button2>*/}

        </a>
      </header>
    </div>
  );
}

export default App;
