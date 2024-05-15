import { FC } from 'react';
import Leftbar from './components/Leftbar';
import './index.css';

import { MainRoutes } from './routes';

function App() {

  return (
      <Leftbar>
        <MainRoutes />
      </Leftbar>
  )
}

export default App;
