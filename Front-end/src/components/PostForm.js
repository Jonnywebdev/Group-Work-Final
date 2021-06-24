import React from 'react'
import {Link} from 'react-router-dom';
import { motion } from "framer-motion"

import {
  Button,
  linkStyle,
  FormGroup,
  Input,
  Label
} from './Style';

function PostForm({handleSubmit, handleChange, post, pageId}) {
    const formatDate = (date) => {
        let dateObj = new Date(date);

        return `${dateObj.getFullYear()}-${dateObj.getMonth()}-${dateObj.getDate()} ${dateObj.getHours()}:${dateObj.getMinutes()}`;
    }

    return (
    <motion.div animate={{ scale:1.1, rotate: 360}}>
        <FormGroup onSubmit={handleSubmit}>
        
        <Label htmlFor="label">Title</Label>
        <Input
            onChange={handleChange}
            name="title"
            value={post.title}
            placeholder="title"
          />
          <Label htmlFor="label">Content</Label>
            <Input
            onChange={handleChange}
            name="content"
            value={post.content}
            placeholder="content"
          />
          <Label htmlFor="label">Author</Label>
            <Input
            onChange={handleChange}
            name="author"
            value={post.author}
            placeholder="author"
          />
          <Label htmlFor="label">Tags</Label>
          <Input
            onChange={handleChange}
            name="tags"
            value={post.tags}
            placeholder="tags"
          />

            {
                pageId === 'update-item'
                    ? <p>Created at: {formatDate(post.date)}</p>
                    : ''
            }
            
            <br />
            
            <Button backgroundColor="#04AA6D">{ pageId === 'update-item' ? 'Update' : 'Create'}</Button>
            
            <br />

            <Link to="/manage-items" style={linkStyle}>&#x2190; back</Link>
        </FormGroup>
        </motion.div>
    )
}

export default PostForm