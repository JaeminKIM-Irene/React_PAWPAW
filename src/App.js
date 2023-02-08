import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Landing from './pages/Landing';
import Frame from './pages/Frame';

function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/*' element={<Frame/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
