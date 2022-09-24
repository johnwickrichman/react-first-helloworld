// import logo from './logo.svg';
// import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Logo from './components/Logo';

function App() {
  return (
    <div>
      <Header />
      <Logo />
      <Footer title='Facebook' province='Korat' postcode={30000} />
    </div>
  );
}

export default App;
