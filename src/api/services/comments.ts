import { BaseURL } from "../baseURL";
import { CreateComment } from "../../interfaces/api/comments.interface";

export const createComment = async ({ publication_id, comment, token }: CreateComment) => {
    await BaseURL.post("/comments", {
        publication_id,
        comment
    }, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    });
}