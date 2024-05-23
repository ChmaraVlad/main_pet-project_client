import { FC } from 'react';
import Leftbar from './components/Leftbar';
import './index.css';

import { MainRoutes } from './routes';

function App() {

  return (
      <Leftbar>
        <div className='main-routes-wrapper'>
          <MainRoutes />
        </div>
      </Leftbar>
  )
}

export default App;
