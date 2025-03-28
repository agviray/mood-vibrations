import styled from 'styled-components';

export const StyledPlaylistCard = styled.div`
  & > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media screen and (min-width: 480px) {
      flex-direction: row;
    }

    // Playlist Image Wrapper
    & > div {
      & > span {
        display: inline-block;
        width: 100%;

        & > img {
          width: 100%;
          height: auto;
        }
      }

      @media screen and (min-width: 480px) {
        & > span {
          width: 200px;
        }
      }
    }

    // Playlist Details Wrapper
    & > div:nth-of-type(2) {
      display: flex;
      flex-direction: column;

      h4 {
        padding-bottom: 1.5rem;
      }

      p {
        padding-bottom: 1rem;
      }
    }
  }
`;
