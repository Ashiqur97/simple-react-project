import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
