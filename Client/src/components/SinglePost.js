import React from 'react'
import {Link} from 'react-router-dom';

function SinglePost({post}) {
    const formatDate = (date) => {
        let dateObj = new Date(date);

        return `${dateObj.getFullYear()}-${dateObj.getMonth()}-${dateObj.getDate()} ${dateObj.getHours()}:${dateObj.getMinutes()}`;
    }

    return (
      <section>
          <table>
          <thead>
          <tr>
              <th>Title</th>
              <th>Content</th>
              <th>Author</th>
              <th>Tags</th>
              <th>Date</th>
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
                  <Link to="/items">&#x2190; back</Link>
              </tr>
          </tbody>
      </table>
      
  </section>
    )
}

export default SinglePost