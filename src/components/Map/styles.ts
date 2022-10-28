import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: none;
  ${media.greaterThan("medium")`
    display: block;
    width: 50%;
    position: sticky;
    top: 8rem;
    max-height: calc(100vh - 8rem);
  `}
`;
