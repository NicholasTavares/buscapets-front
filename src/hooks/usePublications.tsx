import { useQuery } from "react-query";
import { publicationsGet } from "../api/publicationAPI";

export const usePublications = () => {
  const { data: publications, isFetching } = useQuery(["publications"], publicationsGet, {
    staleTime: 60 * 60 * 5
  });

  return { publications, isFetching};
}