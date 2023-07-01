import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './Routes/Home'
import Contact from './Routes/Contact'
import Detail from './Routes/Detail'
import Favs from './Routes/Favs'
import NoPage from './Routes/NoPage'
import { ContextProvider } from "./Components/utils/global.context";
import CardDetails from "./Components/CardDetails";
import './App.css';

function App() {
  return (
    <div className="App">
      <ContextProvider> {/* Asegúrate de que el proveedor de contexto envuelva a los componentes */}
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} index />
            <Route path="/dentist/:id" element={<CardDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/favs" element={<Favs />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
      <Footer />
    </div>
  );
}

export default App;