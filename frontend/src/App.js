import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import AppRoutes from './routes';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <AppRoutes />
    </Router>
  );
}

export default App;
