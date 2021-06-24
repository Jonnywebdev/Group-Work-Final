import React, {useState, useEffect} from 'react'
import SinglePost from '../components/SinglePost';

function ShowPost({match}) {
    const [post, setPost] = useState({});

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
        try {
            fetch('http://localhost:5000/posts/' + post['_id'], {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json'
                },
                
            });

        } catch (error) {
            console.log(error);
        }

    return (
        <div>
            <h1>Info</h1>

            <SinglePost 
                post={post}
            />
        </div>
    )
}

export default ShowPost