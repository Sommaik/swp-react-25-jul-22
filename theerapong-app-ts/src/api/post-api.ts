import { httpApi } from './http-api';

export interface PostModel {
    userId: number,
    id: number,
    title: string,
    body: string
}

const readAllPost = async () => {
    return httpApi.get<PostModel[]>("/posts");
}

export { readAllPost };