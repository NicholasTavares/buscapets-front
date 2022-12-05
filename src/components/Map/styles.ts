import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import styled from "styled-components";
import media from "styled-media-query";

type ContainerMapProps = {
  form: boolean;
};

export const Container = styled.div<ContainerMapProps>`
  display: ${({ form }) => (form ? "block" : "none")};
  width: ${({ form }) => (form ? "100%" : "50%")};
  ${media.greaterThan("medium")`
    display: block;
    position: sticky;
    top: 8rem;
    max-height: calc(100vh - 8rem);
  `};
`;

export const AutoComplete = styled.div`
  position: absolute;
  top: 2rem;
  left: 50%;
  right: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: 28rem;
`;

export const ComboBoxListStyled = styled(ComboboxList)`
  font-size: 1.3rem;
`;

export const ComboBoxStyled = styled(Combobox)`
  width: 100%;
  height: 100%;
`;

export const ComboboxInputStyled = styled(ComboboxInput)`
  width: 100%;
  font-size: 1.3rem;
  padding: 0.5rem;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors["gray/300"]};
`;

export const ComboBoxOptionStyled = styled(ComboboxOption)`
  font-size: 1.8rem;
`;
