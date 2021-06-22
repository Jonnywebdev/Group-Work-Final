import React from 'react'
import {Link} from 'react-router-dom';

function PostForm({handleSubmit, handleChange, post, pageId}) {
    const formatDate = (date) => {
        let dateObj = new Date(date);

        return `${dateObj.getFullYear()}-${dateObj.getMonth()}-${dateObj.getDate()} ${dateObj.getHours()}:${dateObj.getMinutes()}`;
    }

    return (
        <form onSubmit={handleSubmit}>

        <input
            onChange={handleChange}
            name="title"
            value={post.title}
            placeholder="title"
          />
            <input
            onChange={handleChange}
            name="content"
            value={post.content}
            placeholder="content"
          />
            <input
            onChange={handleChange}
            name="author"
            value={post.author}
            placeholder="author"
          />
          <input
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
            <br />
            
            <button>{ pageId === 'update-item' ? 'Update' : 'Create'}</button>
            
            <br />
            <br />

            <Link to="/manage-items">&#x2190; back</Link>
        </form>
    )
}

export default PostForm