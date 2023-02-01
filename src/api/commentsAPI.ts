import { APIBaseURL } from "./baseURL";

type CreateComment = {
    publication_id: string;
    comment: string;
    token: string | boolean;
}

export const commentPost = async ({ publication_id, comment, token }: CreateComment) => {
    await APIBaseURL.post("/comments", {
        publication_id,
        comment
    }, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    });
}