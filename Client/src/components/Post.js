import React from 'react';
import {Link} from 'react-router-dom';
import {
    Table,
    Button,
    linkStyle
  } from './Style';

function Post({post, deletePost}) {
    const formatDate = (date) => {
        let dateObj = new Date(date);

        return `${dateObj.getFullYear()}-${dateObj.getMonth()}-${dateObj.getDate()} ${dateObj.getHours()}:${dateObj.getMinutes()}`;
    }

    const handleDeletePost = () => {
        deletePost(post['_id']);
    }

    return (

        <article>
            <Table>
            <thead>
            <tr>
                <th>Title</th>
                <th>Content</th>
                <th>Author</th>
                <th>Tags</th>
                <th>Date</th>
                <th></th>
                <th></th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                    {post.title}
                    </td>
                    <td>
                    {post.content}
                    </td>
                    <td>
                    {post.author}
                    </td>
                    <td>
                    {post.tags}
                    </td>
                    <td>
                    {formatDate(post.date)}
                    </td>
                    <td>
                    <Link to={`/update-item/${post['_id']}`} style={linkStyle}>
                        <Button backgroundColor="#04AA6D">Update</Button>
                    </Link>
                    </td>
                    <td>
                    <Button backgroundColor="red" onClick={handleDeletePost}>Delete</Button>
                    </td>
                </tr>
            </tbody>         
            
            
        </Table>

        </article>
)
}

export default Post