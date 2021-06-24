import React from 'react'
import {Link} from 'react-router-dom';
import { motion } from "framer-motion"
import {
    Table,
    linkStyle,
    Section
  } from '../components/Style';

function SinglePost({post}) {
    const formatDate = (date) => {
        let dateObj = new Date(date);

        return `${dateObj.getFullYear()}-${dateObj.getMonth()}-${dateObj.getDate()} ${dateObj.getHours()}:${dateObj.getMinutes()}`;
    }

    return (
    <motion.div animate={{ scale:0.97}}transition={{ duration: 0.5 }}>
      <Section>
          <Table>
          <thead>
          <tr>
              <th>Title</th>
              <th>Content</th>
              <th>Author</th>
              <th>Tags</th>
              <th>Date</th>
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
                  <Link to="/items" style={linkStyle}>&#x2190; back</Link>
                  </td>                        
              </tr>         
          </tbody>
      </Table>
  </Section>
  </motion.div>
    )
}

export default SinglePost