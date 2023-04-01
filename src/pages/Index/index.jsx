import Header from '../../components/Header';
import { Container } from './style';
import { TbReportSearch } from 'react-icons/tb';

export default function Index() {
  return (
    <div>
      <Header />
      <Container>
        <TbReportSearch color="#f6f6f6" className="icon" />
        <p>Localize acima a primeira empresa</p>
      </Container>
    </div>
  );
}
