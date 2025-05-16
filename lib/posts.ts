import api from "./axios";

export interface Post {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    image: string | null;
}  
  
export interface FeaturedPostsResponse {
    posts: Post[];
    total: number;
}

export interface PostsResponse {
    items: Post[];
    total: number;
    page: number;
    limit: number;
    pages: number;
}

export interface SinglePostResponse {
    post: Post;
}


export async function getFeaturedPosts(): Promise<PostsResponse> {
    const { data } = await api.get<PostsResponse>('/posts/featured');
    return data;
}

export async function getPosts(page: number = 1, search?: string): Promise<PostsResponse> {
    const { data } = await api.get<PostsResponse>('/posts', {
        params: { page, search }
    });
    return data;
}

export async function getPostById(id: number): Promise<SinglePostResponse> {
    const { data } = await api.get<SinglePostResponse>(`/posts/${id}`);
    return data;
}