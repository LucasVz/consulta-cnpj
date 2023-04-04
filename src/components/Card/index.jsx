import { Container } from './style';
import { useNavigate } from 'react-router-dom';
import useCompanyMap from '../../hooks/useCompanyMap';

export default function Card({ company }) {
  const navigate = useNavigate();
  const { setCompanyMap } = useCompanyMap();

  async function changePage() {
    setCompanyMap(company);
    navigate('/map');
  }
  return (
    <Container onClick={changePage}>
      <h4>{company.nome}</h4>
      <p>Razão social</p>
      <h4>{company.cnpj}</h4>
      <p>CNPJ</p>
      <h4>
        {company.logradouro}, {company.numero} - {company.bairro},{' '}
        {company.municipio} - {company.uf}
      </h4>
      <p>Endereço</p>
    </Container>
  );
}
