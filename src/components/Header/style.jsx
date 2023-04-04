import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #ffffff;

  position: fixed;
  width: 100%;

  padding-top: 2.7rem;
  padding-bottom: 1.9rem;
`;

const Button = styled.button`
  all: unset;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 3rem;

  padding: 0 2.3rem;

  width: 7rem;
  height: 3.6rem;

  background-color: #3b8870;
  color: #ffffff;

  font-size: 1.4rem;

  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  align-items: center;

  gap: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
  input {
    all: unset;

    border: 0.2rem solid #46a185;
    border-radius: 0.3rem;

    padding: 1.2rem;

    width: 22rem;

    font-size: 1.4rem;
    @media (max-width: 600px) {
      padding: 0.6rem;
    }
  }
`;

const Title = styled.div`
  display: flex;

  gap: 1rem;
  @media (max-width: 600px) {
    gap: 0.4rem;
  }

  .icon {
    font-size: 4rem;

    @media (max-width: 600px) {
      font-size: 2.3rem;
    }
  }

  h1 {
    color: #3b8870;

    font-size: 4.2rem;

    margin-bottom: 2.4rem;
    @media (max-width: 600px) {
      font-size: 2.4rem;
      margin-bottom: 1.6rem;
    }
  }
`;

export { Container, Button, Form, Title };
