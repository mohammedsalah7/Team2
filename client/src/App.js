import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/footer';
import ImagesSection from './Components/imagesSections';

function App() {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <ImagesSection />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
