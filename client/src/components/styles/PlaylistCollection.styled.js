// TODO: Create reuseable theme to apply to components using similar styles.

import styled from 'styled-components';

export const StyledPlaylistCollection = styled.div`
  padding: 1.5rem 0;

  & > div {
    padding-bottom: 1rem;

    h3 {
      padding-bottom: 3rem;
    }

    & > div {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
  }
`;
