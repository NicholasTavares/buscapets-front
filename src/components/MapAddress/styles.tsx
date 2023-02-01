import styled from "styled-components";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox";
import media from "styled-media-query";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const PlacesContainer = styled.div`
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
`

export const ComboboxContainer = styled(Combobox)`
    width: 20rem;
    ${media.greaterThan("medium")`
        width: 36rem;
    `}
`

export const AutoCompleteInput = styled(ComboboxInput)`
    outline: none;
    width: 100%;
    font-size: 1.6rem;
    padding: 0.3rem;
`

export const ContainerPopUp = styled(ComboboxPopover)``

export const ListOptions = styled(ComboboxList)``

export const PlaceOption = styled(ComboboxOption)`
    & > * {
        font-size: 1.3rem;
        ${media.greaterThan("medium")`
            font-size: 1.6rem
        `}
    }
`