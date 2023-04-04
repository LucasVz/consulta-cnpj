import { Container } from './style';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeftCircle } from 'react-icons/fi';

export default function CardMap({ company }) {
  const navigate = useNavigate();

  async function changePage() {
    navigate('/list');
  }
  return (
    <Container>
      <FiArrowLeftCircle className="arrow" color="#3b817e" onClick={changePage}>
        voltar
      </FiArrowLeftCircle>
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