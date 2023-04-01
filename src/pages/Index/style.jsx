import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;

  background: linear-gradient(to right, #378669, #459a9d);

  .icon {
    font-size: 12rem;
  }

  p {
    font-size: 1.6rem;

    color: #ffffff;

    margin-top: 2rem;
  }
`;

export { Container };
