// VG del
import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom';
import PostForm from '../../components/PostForm';

function UpdatePost({match}) {
    // console.log(match);
    // console.log(match.params.id);
    const [post, setPost] = useState({});
    const history = useHistory();

    useEffect(() => {
        fetchPost();
    }, []);

    const fetchPost = async () => {
        try {
            const response = await fetch('http://localhost:5000/posts/' + match.params.id);
            if (!response.ok) {
                throw new Error('Server error: ' + response.status)
            }
            const data = await response.json();
            console.log(data);
            setPost(data);
        } catch (error) {
            console.log(error);
        }
    }


    // const handleChange = (e) => {
    //     setPost({
    //         ...post,
    //         content: e.target.value
                    

    //     });
    // }
    
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
        // const object = {content: post.content}

        try {
            await fetch('http://localhost:5000/posts/' + post['_id'], {
                method: 'PATCH', // *GET, POST, PATCH, DELETE, etc.
                headers: {
                  'Content-Type': 'application/json'
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(object) // body data type must match "Content-Type" header
            });

            // Redirects with reloading
            // window.location.replace('/manage-puns');

            // Redirects without reloading
            history.push('/manage-items'); 
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>Update Post</h1>

            <PostForm 
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                post={post}
                pageId="update-item"
            />
        </div>
    )
}

export default UpdatePost