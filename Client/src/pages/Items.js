import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

function ShowList() {    
    const [items, setItems] = useState([]);

    useEffect( () => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const data = await fetch('http://localhost:5000/posts');
        const items = await data.json();
        setItems(items);
    };

    return(
        <section>
            {
            items.map(item => (
                <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Content</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                        {item.title}
                        </td>
                        <td>
                        {item.content}
                        </td>
                    </tr>
                </tbody>
                <Link to={`/item/${item['_id']}`}>
                <button>Read more</button>
                </Link>
            </table>
            )
                )
            }
        </section>
    );
}

export default ShowList;