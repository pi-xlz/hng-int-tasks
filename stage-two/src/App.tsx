import { Navbar, Header, Movies, Footer, MovieDeets } from './components';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <main>
            <Navbar />
            <Header />
            <Movies />
            <Footer />
          </main>
        }
      />
      <Route
        path="/details"
        element={<MovieDeets />}
      />
    </Routes>
  );
}
