import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './components/routes';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
      <Router>
          <Header/>
          <div className="App-content">
              <AppRoutes/>
          </div>
          <Footer/>
      </Router>
);
}

export default App;
