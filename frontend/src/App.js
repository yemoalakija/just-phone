import './App.css';
import { Container } from 'react-bootstrap';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main className='py-3'>
        <Container>
          <HomePage />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
