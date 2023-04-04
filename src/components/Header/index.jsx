import { HiBuildingOffice } from 'react-icons/hi2';
import { useState, useEffect } from 'react';
import ValidateCNPJ from '../../utils/ValidateCNPJ';
import VanillaMasker from 'vanilla-masker';
import { getCompanies } from '../../services/api';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useCompanies from '../../hooks/useCompanies';
import { Container, Button, Form, Title } from './style';

export default function Header() {
  const navigate = useNavigate();
  const [cnpj, setCnpj] = useState('');
  const { companies, setCompanies } = useCompanies();

  async function getCNPJ(event) {
    event.preventDefault();
    if (!ValidateCNPJ(cnpj)) {
      Swal.fire({
        icon: 'error',
        title: 'CNPJ invalido',
        text: 'verifique se você digitou corretamente',
      });
      return;
    }
    const cnpjNumber = cnpj.replace(/\D/g, '');
    try {
      const result = await getCompanies(cnpjNumber);
      setCompanies([...companies, result.data]);
      setCnpj('');
    } catch (error) {
      console.log(error);
      if (error.message === 'Network Error') {
        Swal.fire({
          icon: 'error',
          title: 'Erro de rede',
          text: 'Houve um erro de rede. Verifique se o CNPJ realmente existe ou tente novamente daqui a 1 minuto',
        });
      } else {
        console.log(error);
      }
      setCnpj('');
    }
  }

  function handleCnpjChange(event) {
    const inputCnpj = event.target.value;
    setCnpj(
      VanillaMasker.toPattern(
        inputCnpj.replace(/\D/g, ''),
        '99.999.999/9999-99'
      )
    );
  }

  useEffect(() => {
    localStorage.setItem('companies', JSON.stringify(companies));
    if (companies.length !== 0) {
      navigate('/list');
    }
  }, [companies]);

  return (
    <Container>
      <Title>
        <HiBuildingOffice className="icon" color="#3b8870" />
        <h1>Localizador de Empresas</h1>
      </Title>
      <Form action="">
        <input
          type="text"
          id="cnpj"
          name="cnpj"
          value={cnpj}
          onChange={handleCnpjChange}
          placeholder="CNPJ..."
        />
        <Button type="submit" onClick={(e) => getCNPJ(e)}>
          LOCALIZAR
        </Button>
      </Form>
    </Container>
  );
}
