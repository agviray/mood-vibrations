import styled from 'styled-components';

export const StyledUserTextForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;
  gap: 1rem;

  & textarea {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 5px;
    border: 1px solid #cccccc;
    outline: none;
    resize: none;
  }

  & button {
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: none;
    background-color: #18fcbb;
    color: #333333;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
      background-color: #13d79f;
    }
  }
`;
