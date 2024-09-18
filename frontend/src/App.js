import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import Header from './header';
import Footer from './footer';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <AppRoutes />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
