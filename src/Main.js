import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from 'react-router-dom';


import App from './App';
import NotFound from './NotFound';
import Jinnie from './personas/Jinnie';
  
  export default function Home() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/jinnie" element={<Jinnie />} />

          <Route path="*" element={<Navigate to ="/404" />}/>
        </Routes>
      </Router>
    );
  }