import React from 'react'
import Post from './Post';
import {
    Section
  } from './Style';

function PostList({posts, deletePost}) {
    return (
        <Section>
            {
                posts.map((post) => (
                    <Post key={post['_id']} post={post} deletePost={deletePost} />
                ))
            }
        </Section>
    )
}

export default PostList