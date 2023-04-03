import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 2rem;

  height: 100vh;

  background: #439591;
`;

const Cards = styled.div`
  width: 70%;

  .slick-initialized .slick-slide {
    display: flex;
    justify-content: center;
  }
`;

export { Container, Cards };
