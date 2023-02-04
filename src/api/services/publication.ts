import { BaseURL } from "../baseURL";
import { CreatePublication, PublicationResponse } from "../../interfaces/api/publications.interface";

export const listPublications = async (): Promise<PublicationResponse[]> => {
  const response = await BaseURL.get("/publications/all");

  return response.data;
};

export const getPublication = async (publication_id?: string): Promise<PublicationResponse> => {
  const response = await BaseURL.get(`/publications/${publication_id}`);

  return response.data;
};

export const createPublication = async ({ title, description, address, pet_name, type,
  sex, disappearance_date, last_location, publication_pictures, token }: CreatePublication): Promise<PublicationResponse> => {

  const response = await BaseURL.post("/publications", {
    title,
    description,
    address,
    pet_name,
    type,
    sex,
    disappearance_date,
    last_location,
    publication_pictures
  }, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: 'Bearer ' + token
    }
  });

  return response.data;
};
