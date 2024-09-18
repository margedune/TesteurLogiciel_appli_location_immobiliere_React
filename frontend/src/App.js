import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import Navigation from './Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <AppRoutes />
    </Router>
  );
}

export default App;
