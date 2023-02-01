import styled from "styled-components";
import media from "styled-media-query";

type PublicationImageProps = {
  imageUrl: string;
};

type PublicationTypeProps = {
  type: string;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-height: 100vh;
  background-color: ${({ theme }) => theme.colors["gray/50"]}; 
`

export const ContainerContent = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 100vh;
  padding: 2rem;

  ${media.greaterThan("medium")`
    padding: 3rem;
  `}
`;

export const ContainerPublication = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  margin-bottom: 3rem;

  ${media.greaterThan("medium")`
    flex-direction: row;
  `}
`;

export const PublicationDataContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PublicationTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors["gray/800"]};
  font-weight: 600;

  ${media.greaterThan("medium")`
    font-size: 3rem;
  `}
`

export const PublicationImage = styled.div<PublicationImageProps>`
  cursor: pointer;
  position: relative;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  height: 26rem;
  border-radius: 2rem;
  margin-bottom: 1.5rem;

  ${media.greaterThan("medium")`
    width: 75rem;
    height: 50rem;
    margin-right: 4rem;
  `}
`;

export const PublicationImageContainer = styled.div<PublicationTypeProps>`
  display: flex;
  flex-direction: column;
    ${PublicationImage} {
      &:after {
        position: absolute;
        top: -4px;
        left: -4px;
        content: "";
        box-sizing: content-box;
        box-shadow: 0 0 0 2px
          ${({ type, theme }) =>
    type === "missing"
      ? theme.colors["gray/500"]
      : theme.colors["rose/600"]};
        color: ${({ theme }) => theme.colors["gray/800"]};
        z-index: 10;
        width: 100%;
        height: 100%;
        border-radius: 2rem;
        padding: 4px;
      }
    }
`;

export const TagsContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
`

export const Tag = styled.div<PublicationTypeProps>`
  padding: 0.5rem 0.8rem;
  font-weight: 400;
  border-radius: 2rem;
  border: 2px solid
    ${({ type, theme }) =>
    ((type !== "missing") && (type !== "adoption")) ? theme.colors["lime/600"] : type === "missing" ? theme.colors["gray/400"] : theme.colors["rose/600"]};
  color: ${({ theme }) => theme.colors["gray/800"]};
  font-size: 1.3rem;
  background-color: ${({ theme }) => theme.colors.white};

  &:not(last-child){
    margin-right: 1rem;
  }

  ${media.greaterThan("medium")`
    font-size: 1.5rem;
  `}
`;

export const DescriptionContainer = styled.div`
  padding: 1rem;
  font-size: 1.3rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
  background-color:  ${({ theme }) => theme.colors["gray/200"]};

  ${media.greaterThan("medium")`
    font-size: 1.5rem;
  `}
`

export const Owner = styled.span`
  display: inline-block;
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;

  ${media.greaterThan("medium")`
    font-size: 1.5rem;
  `}
`

export const Description = styled.p`
  font-size: 1.3rem;
  color:  ${({ theme }) => theme.colors["gray/800"]};

  ${media.greaterThan("medium")`
    font-size: 1.5rem;
  `}
`

export const MoreInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 48rem;
`

export const InformationContainer = styled.div`
  display: flex;

  &:not(last-child){
    margin-bottom: 0.5rem
  }
`

export const InformatioTopic = styled.span`
  font-weight: bold;
  font-size: 1.3rem;
  margin-right: 0.5rem;
  color:  ${({ theme }) => theme.colors["gray/700"]};

  ${media.greaterThan("medium")`
    font-size: 1.5rem;
  `}
`

export const Information = styled.span`
  font-size: 1.3rem;
  color:  ${({ theme }) => theme.colors["gray/700"]};

  ${media.greaterThan("medium")`
    font-size: 1.5rem;
  `}
`

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 48rem;
`

export const CommentsCount = styled.div`
  font-size: 1.5rem;
  color:  ${({ theme }) => theme.colors["gray/700"]};
  margin-bottom: 1rem;

  ${media.greaterThan("medium")`
    font-size: 2rem;
  `}
`

export const FormComment = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  & > div {
    margin-bottom: 0;
  }
`

export const AddCommentButton = styled.button`
  cursor: pointer;
  width: 8rem;
  border-radius: 1rem;
  padding: 0.5rem;
  font-size: 1.2rem;
  border: none;
  background-color: ${({ theme }) => theme.colors["lime/500"]};
  color: ${({ theme }) => theme.colors["white"]};

  ${media.greaterThan("medium")`
    font-size: 1.4rem;
  `}
`;