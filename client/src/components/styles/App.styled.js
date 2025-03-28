import styled from 'styled-components';

export const StyledAppContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem;

  & > div {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: center;
    padding: 2rem 0;
  }
  & h1 {
    padding-bottom: 2rem;
    text-align: center;
  }
`;
