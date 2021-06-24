import React from 'react';
import {Link} from 'react-router-dom';
import { motion } from "framer-motion"
import {
    Table,
    Button,
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

        <motion.div animate={{ scale:0.97}}transition={{ duration: 1 }}>
            <Table>
            <thead>
            <tr>
                <th>Title</th>
                <th>Content</th>
                <th>Author</th>
                <th>Tags</th>
                <th>Date</th>
                <th>Action</th>
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
                                           
                    <Link to={`/update-item/${post['_id']}`}>
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8, x: 500, rotate: 360 }}>
                        <Button backgroundColor="#04AA6D">Update</Button>
                        </motion.div>
                    </Link>
                    <div>
                        <Button backgroundColor="red" onClick={handleDeletePost}>Delete</Button>
                    </div>
                    </td>
                </tr>
            </tbody>         
            
            
        </Table>

        </motion.div>
)
}

export default Post