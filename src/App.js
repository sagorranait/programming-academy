import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { Toaster } from 'react-hot-toast';
import { useContext } from 'react';
import { StateContext } from './StateProvider';
import './App.css';

function App() {
  const { darkMord } = useContext(StateContext);

  return (
    <div className={`app ${darkMord}`}>
      <Header/>
      <Outlet/>
      <Footer/>
      <ScrollRestoration />
      <Toaster/>
    </div>
  );
}

export default App;
