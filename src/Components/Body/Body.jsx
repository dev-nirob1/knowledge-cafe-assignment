import React, { useEffect, useState } from 'react';
import './Body.css'
import Blog from '../Blog/Blog';
const Body = () => {
    const [blogs, setBlogs] = useState([]);

    const [spentTime, setSpentTime] = useState(0);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    const addSpentTime = (timeToRead) => {
        const newTime = spentTime + timeToRead;
        setSpentTime(newTime)
    }
    return (
        <div>
            <div className="blogs-container">
                <div className="blog">
                    {
                        blogs.map(blog => <Blog key={blog.id} timeToRead={blog.timeToRead} blog={blog} addSpentTime={addSpentTime}></Blog>)
                    }

                </div>
                <div className="cart">
                    <div>
                        <h5>Spent Time On Read :  {spentTime} min</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;