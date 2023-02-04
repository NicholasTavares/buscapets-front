export interface PublicationResponse {
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

export interface CreatePublication {
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