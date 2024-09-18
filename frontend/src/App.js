import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import Header from './header';
import Footer from './footer';

function App() {
  return (
    <Router>
      <Header />
      <AppRoutes />
      <Footer />
    </Router>
  );
}

export default App;
