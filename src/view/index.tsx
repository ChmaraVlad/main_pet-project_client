import { FC } from 'react';
import Leftbar from './Components/Leftbar';
import './index.css';

import { Routes } from './routes';

function App() {

  return (
    <>
      <Leftbar>
        <Routes />
      </Leftbar>
    </>
  )
}

export default App;
