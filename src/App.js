// import logo from './logo.svg';
// import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Logo from './components/Logo';
import Menu from './components/Menu';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <Header />
      <Logo />
      <Footer title='Facebook' province='Korat' postcode={30000} isOpen={true} />
      <Sidebar />
      <Menu />
    </div>
  );
}

export default App;
