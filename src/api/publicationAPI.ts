import { APIBaseURL } from "./baseURL";

type PublicationsResponse = {
  id: string;
  title: string;
  description: string;
  type: string;
  sex: string;
  last_location: {
    type: string;
    coordinates: number[];
  };
  disappearance_date: string;
  created_at: string;
  publication_pictures: [
    {
      publication_picture: string
    }
  ]
};

export const publicationsGet = async (): Promise<PublicationsResponse[]> => {
  const response = await APIBaseURL.get("/publications/all");

  return response.data;
};
