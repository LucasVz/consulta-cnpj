import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Index from './pages/Index';
import List from './pages/List';
import Map from './pages/Map';
import CompaniesContext from './context/companiesContext';
import CompanymapContext from './context/companyMapContext';

function App() {
  const [companies, setCompanies] = useState(() => {
    const saveCompanies = JSON.parse(localStorage.getItem('companies'));
    return saveCompanies || [];
  });

  const [companyMap, setCompanyMap] = useState([]);

  return (
    <CompanymapContext.Provider value={{ companyMap, setCompanyMap }}>
      <CompaniesContext.Provider value={{ companies, setCompanies }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/list" element={<List />} />
            <Route path="/map" element={<Map />} />
          </Routes>
        </BrowserRouter>
      </CompaniesContext.Provider>
    </CompanymapContext.Provider>
  );
}

export default App;
