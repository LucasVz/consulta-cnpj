import { Container } from './style';
import { useNavigate } from 'react-router-dom';

export default function Card({ company }) {
  const navigate = useNavigate();

  function changePAge() {
    navigate('/map');
  }
  return (
    <Container onClick={changePAge}>
      <h4>{company.nome}</h4>
      <p>Razão social</p>
      <h4>{company.cnpj}</h4>
      <p>CNPJ</p>
      <h4>
        {company.logradouro}, {company.numero}, {company.bairro}
      </h4>
      <p>Endereço</p>
    </Container>
  );
}
