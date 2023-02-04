export interface CreateComment {
    publication_id: string;
    comment: string;
    token: string | boolean;
}