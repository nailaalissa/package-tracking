import './App.css';
import Header from './components/header/Header';
import Track from './components/Track/Track';
import Contact from './components/4-contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <div id="up" className="container">
        <Header />
        <div className="divider" />

        <Track />
        <div className="divider" />
        <Contact />
        <div className="divider" />
        <Footer />
      </div>
    </div>
  );
}

export default App;
