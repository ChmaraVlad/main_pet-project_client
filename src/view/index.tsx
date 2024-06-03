import Leftbar from './components/Leftbar';
import './index.css';

import { MainRoutes } from './routes';
import Header from './components/Header';

function App() {

  return (
      <Leftbar>
        <Header />
        <div className='main-routes-wrapper'>
          <MainRoutes />
        </div>
      </Leftbar>
  )
}

export default App;
