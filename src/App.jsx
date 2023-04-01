import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import List from './pages/List';
import Map from './pages/Map';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/list" element={<List />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
