import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from 'react-router-dom';


import App from './App';
import NotFound from './NotFound';
import Egle from './personas/Egle';
import Hanna from './personas/Hanna';
import Haylie from './personas/Haylie';
import Jan from './personas/Jan';
import Jason from './personas/Jason';
import Jinnie from './personas/Jinnie';
import Kestaun from './personas/Kestaun';
import Kris from './personas/Kris';
import Luigi from './personas/Luigi';
import Steven from './personas/Steven';
  
  export default function Home() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/jinnie" element={<Jinnie />} />
          <Route path="/jan" element={<Jan />} />
          <Route path="/luigi" element={<Luigi />} />
          <Route path="/jason" element={<Jason />} />
          <Route path="/haylie" element={<Haylie />} />
          <Route path="/kris" element={<Kris />} />
          <Route path="/hanna" element={<Hanna />} />
          <Route path="/egle" element={<Egle />} />
          <Route path="/kestaun" element={<Kestaun />} />
          <Route path="/steven" element={<Steven />} />

          <Route path="*" element={<Navigate to ="/404" />}/>
        </Routes>
      </Router>
    );
  }