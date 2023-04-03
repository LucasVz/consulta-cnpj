import useCompanies from '../../hooks/useCompanies';
import Header from '../../components/Header';
import { Container, Cards } from './style';
import Card from '../../components/Card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import settings from '../../utils/SliderSettings';

export default function List() {
  const { companies } = useCompanies();
  const reversedCompanies = [...companies].reverse();

  return (
    <>
      <Header />
      <Container>
        <Cards>
          <Slider {...settings}>
            {reversedCompanies.map((company, index) => (
              <Card key={index} company={company} />
            ))}
          </Slider>
        </Cards>
      </Container>
    </>
  );
}
