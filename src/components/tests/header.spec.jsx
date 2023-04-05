import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';
import CompaniesContext from '../../context/companiesContext';
import CompanymapContext from '../../context/companyMapContext';
import { getCompanies } from '../../services/api';
import '@testing-library/jest-dom/extend-expect';

const renderComponent = () => {
  const companyMap = [];
  const setCompanyMap = [];
  const companies = [{ nome: 'Americanas SA' }];
  const setCompanies = [];

  render(
    <CompanymapContext.Provider value={{ companyMap, setCompanyMap }}>
      <CompaniesContext.Provider value={{ companies, setCompanies }}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </CompaniesContext.Provider>
    </CompanymapContext.Provider>
  );
};

jest.mock('../../services/api');

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Header', () => {
  it('shoud render correctly Header', () => {
    renderComponent();

    expect(screen.getByText('Localizador de Empresas')).toBeInTheDocument();
    expect(screen.getByText('LOCALIZAR')).toBeInTheDocument();
  });

  it('should show error message if CNPJ is invalid', async () => {
    renderComponent();
    const input = screen.getByPlaceholderText('CNPJ...');
    const button = screen.getByText('LOCALIZAR');

    fireEvent.change(input, { target: { value: '11111111111111' } });
    fireEvent.click(button);

    const errorMessage = await screen.findByText('CNPJ invalido');

    expect(errorMessage).toBeInTheDocument();
  });

  it('should save companies to state and local storage if getCompanies succeeds', async () => {
    renderComponent();
    const mockResult = {
      data: {
        nome: 'Americanas SA',
      },
    };
    getCompanies.mockResolvedValueOnce(mockResult);
    const input = screen.getByPlaceholderText('CNPJ...');
    const button = screen.getByText('LOCALIZAR');
    fireEvent.change(input, { target: { value: '00776574000156' } });
    fireEvent.click(button);
    await waitFor(() => expect(getCompanies).toHaveBeenCalledTimes(1));
    expect(localStorage.getItem('companies')).toBe(
      JSON.stringify([mockResult.data])
    );
    expect(input.value).toBe('');
    expect(mockNavigate).toHaveBeenCalledWith('/list');
  });
});
