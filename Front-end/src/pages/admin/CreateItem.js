import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import PostForm from '../../components/PostForm';

function CreatePost() {
    const [post, setPost] = useState({});
    const history = useHistory();

    const handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        
        setPost({
            ...post, 
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const object = {
            title: post.title,
            content: post.content,
            author: post.author,
            tags: post.tags
        }

        try {
            let response = await fetch('http://localhost:5000/posts', {
                method: 'POST', 
                headers: {
                  'Content-Type': 'application/json'
                  
                },
                body: JSON.stringify(object)
            });

            if (!response.ok) {
                throw new Error('Server error: ' + response.status);
            }

            history.push('manage-items');
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>Create Post</h1>

            <PostForm 
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                post={post}
                pageId="create-item"
            />
        </div>
    )
}

export default CreatePost