import { useQuery } from "react-query";
import { listPublications } from "../api/services/publication";

export const usePublications = () => {
  const { data: publications, isFetching } = useQuery(["publications"], listPublications, {
    staleTime: 60 * 60 * 5 // 5
  });

  return { publications, isFetching };
}