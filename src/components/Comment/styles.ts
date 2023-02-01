import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 0.8rem;
`

export const ContainerAuthor = styled.div`
    display: flex;
    align-items: flex-end;
`

export const Author = styled.span`
    display: inline-block;
    margin-right: 0.5rem;
    font-size: 1.3rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors["gray/700"]};

    ${media.greaterThan("medium")`
        font-size: 1.5rem;
    `}
`

export const Date = styled.span`
    font-size: 1.15rem;
    color:  ${({ theme }) => theme.colors["rose/600"]};
    ${media.greaterThan("medium")`
        font-size: 1.3rem;
    `}
`

export const Comment = styled.span`
    font-size: 1.2rem;
    color:  ${({ theme }) => theme.colors["gray/700"]};
    ${media.greaterThan("medium")`
        font-size: 1.4rem;
    `}
`