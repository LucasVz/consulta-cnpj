import { useContext } from 'react';
import CompaniesContext from '../context/companiesContext';

export default function useCompanies() {
  return useContext(CompaniesContext);
}
