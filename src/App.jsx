import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Index from './pages/Index';
import List from './pages/List';
import Map from './pages/Map';
import CompaniesContext from './context/companiesContext';

function App() {
  const [companies, setCompanies] = useState(() => {
    const saveCompanies = JSON.parse(localStorage.getItem('companies'));
    return saveCompanies || [];
  });

  return (
    <CompaniesContext.Provider value={{ companies, setCompanies }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/list" element={<List />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </BrowserRouter>
    </CompaniesContext.Provider>
  );
}

export default App;
