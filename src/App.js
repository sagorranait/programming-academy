import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="app">
      <Header/>
      <Outlet/>
      <Footer/>
      <ScrollRestoration />
      <Toaster/>
    </div>
  );
}

export default App;
