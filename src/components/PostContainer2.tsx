import React from 'react';
import {postAPI} from "../services/PostService";

const PostComponent2 = () => {
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(5)
    return (
        <div>
            {isLoading && <h1>Идёт загрузка...</h1>}
            {error && <h1>Увы... :(</h1>}
        </div>
    );
};

export default PostComponent2;
