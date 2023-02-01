import { APIBaseURL } from "./baseURL";

type PublicationResponse = {
  id: string;
  title: string;
  description: string;
  pet_name: string;
  type: string;
  address: string;
  sex: string;
  user: {
    id: string;
    name: string;
  }
  last_location: {
    type: string;
    coordinates: number[];
  };
  disappearance_date: string;
  created_at: string;
  publication_pictures: [
    {
      publication_picture: string;
    }
  ],
  comments: [
    {
      comment: string,
      created_at: string,
      user: {
        name: string;
      }
    }
  ]
};

type CreatePublication = {
  title: string;
  description: string;
  address: string;
  pet_name: string;
  type: string;
  sex: string;
  disappearance_date: string;
  last_location: number[];
  publication_pictures: File
  token: string | boolean;
}

export const publicationsGet = async (): Promise<PublicationResponse[]> => {
  const response = await APIBaseURL.get("/publications/all");

  return response.data;
};

export const publicationGet = async (publication_id?: string): Promise<PublicationResponse> => {
  const response = await APIBaseURL.get(`/publications/${publication_id}`);

  return response.data;
};

export const publicationPost = async ({ title, description, address, pet_name, type,
  sex, disappearance_date, last_location, publication_pictures, token }: CreatePublication): Promise<PublicationResponse> => {

  console.log('last_location', last_location)
  console.log('publication_pictures', publication_pictures)

  const response = await APIBaseURL.post("/publications", {
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
