import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  background-color: #ffffff;

  padding: 1rem;

  border-radius: 0 0 1rem 0;

  width: 19.5rem;
  height: 24.5rem;

  .arrow {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }

  h4 {
    font-weight: bold;

    color: #3b817e;

    margin-bottom: 0.2rem;

    font-size: 1.3rem;
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
