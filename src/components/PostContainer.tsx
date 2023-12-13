import React, {useState} from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";
import {IPost} from "../models/IPost";

const PostComponent = () => {
    const [limit, setLimit] = useState(100);
    const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllPostsQuery(limit, {
        pollingInterval: 5000
    })

    const [createPost, {error: createError, isLoading: createIsLoading}] = postAPI.useCreatePostMutation()
    const [deletePost] = postAPI.useDeletePostMutation()
    const [updatePost] = postAPI.useUpdatePostMutation()

    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost)
    }

    const handleRemove = async (post: IPost) => {
        deletePost(post)
    }

    const handleUpdate = async (post: IPost) => {
        updatePost(post)
    }

    return (
        <div>
            <button onClick={handleCreate}>Новый пост</button>
            {isLoading && <h1>Идёт загрузка...</h1>}
            {error && <h1>Увы... :(</h1>}

            {posts && posts.map(post =>
                <PostItem key={post.id} post={post} remove={handleRemove} update={handleUpdate}/>
            )}
        </div>
    );
};

export default PostComponent;
