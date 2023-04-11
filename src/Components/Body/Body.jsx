import React, { useEffect, useState } from 'react';
import './Body.css'
import Blog from '../Blog/Blog';
const Body = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    return (
        <div>
            <div className="blogs-container">
                <div className="blog">
                    {
                        blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                    }

                </div>
                <div className="cart">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ipsam esse ad suscipit voluptate officiis sed veritatis exercitationem eveniet laudantium voluptas dolore distinctio rerum, ducimus magni alias quo ea doloribus.
                </div>
            </div>
        </div>
    );
};

export default Body;