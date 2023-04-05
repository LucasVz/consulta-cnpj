import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CardMap from '../CardMap';
import CompaniesContext from '../../context/companiesContext';
import CompanymapContext from '../../context/companyMapContext';
import '@testing-library/jest-dom/extend-expect';

const renderComponent = () => {
  const companyMap = [];
  const setCompanyMap = [];
  const companies = [{ nome: 'Americanas SA' }];
  const setCompanies = [];
  const company = {
    nome: 'Empresa Teste',
    cnpj: '00.000.000/0000-00',
    logradouro: 'Rua Teste',
    numero: '123',
    bairro: 'Bairro Teste',
    municipio: 'Cidade Teste',
    uf: 'TS',
  };

  render(
    <CompanymapContext.Provider value={{ companyMap, setCompanyMap }}>
      <CompaniesContext.Provider value={{ companies, setCompanies }}>
        <BrowserRouter>
          <CardMap company={company} />
        </BrowserRouter>
      </CompaniesContext.Provider>
    </CompanymapContext.Provider>
  );
  return company;
};

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('CardMap', () => {
  it('shoud render correctly CardMap', () => {
    renderComponent();

    expect(screen.getByText('Empresa Teste')).toBeInTheDocument();
    expect(screen.getByText('00.000.000/0000-00')).toBeInTheDocument();
    expect(
      screen.getByText('Rua Teste, 123 - Bairro Teste, Cidade Teste - TS')
    ).toBeInTheDocument();
  });

  it('should navigate to map page when clicked', () => {
    renderComponent();
    const button = screen.getByTestId('arrow');
    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledWith('/list');
  });
});
