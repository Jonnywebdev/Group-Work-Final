import React from 'react'
import Post from './Post';

function PostList({posts, deletePost}) {
    return (
        <section>
            {
                posts.map((post) => (
                    <Post key={post['_id']} post={post} deletePost={deletePost} />
                ))
            }
        </section>
    )
}

export default PostList