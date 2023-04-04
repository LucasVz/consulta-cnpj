import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  background-color: #ffffff;

  padding: 1rem;

  border-radius: 1rem;

  width: 19.8rem;
  height: 21rem;

  h4 {
    font-weight: bold;

    color: #3b817e;

    margin-bottom: 0.2rem;

    font-size: 1.25rem;
  }

  p {
    color: #3b817e;

    margin-bottom: 1.4rem;

    font-size: 1.2rem;
  }
  p:last-child {
    margin-bottom: 0;
  }
`;

export { Container };
