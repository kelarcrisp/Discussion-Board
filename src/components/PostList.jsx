import React from 'react';
import Post from './Post';
import { v4 } from 'uuid';

const PostList = (props) => {
    return (

        <div>
            {props.postList.map((post) => <Post
                userName={post.userName}
                postTitle={post.postTitle}
                postBody={post.postBody}
                key={post.id}
            />)}
        </div>
    )
}

export default PostList;