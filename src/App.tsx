import './App.scss';
import { Header } from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='body'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
