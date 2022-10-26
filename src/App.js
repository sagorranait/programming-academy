import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="app">
      <Header/>
      <Outlet/>
      <Footer/>
      <ScrollRestoration />
    </div>
  );
}

export default App;
