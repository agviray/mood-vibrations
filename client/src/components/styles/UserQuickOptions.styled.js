import styled from 'styled-components';

export const StyledUserQuickOptions = styled.div`
  padding: 1.5rem;

  & > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    max-width: 450px;
    margin: 0 auto;
    padding-bottom: 1rem;
  }

  h2 {
    padding-bottom: 1rem;
  }
`;

export const StyledUserOption = styled.span`
  display: inline-block;
  display: flex;
  align-items: center;
  height: 38px;
  line-height: 38px;
  padding: 0 1.25rem;
  border: 1px solid #333333;
  background-color: rgba(51, 51, 51, 1);
  color: #ffffff;
  border-radius: 40px;

  &:hover {
    cursor: pointer;
    background-color: #ffffff;
    color: #333333;
  }
`;
