import { useContext } from 'react';
import CompanymapContext from '../context/companyMapContext';

export default function useCompanyMap() {
  return useContext(CompanymapContext);
}
