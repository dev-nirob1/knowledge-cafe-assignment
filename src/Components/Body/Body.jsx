import React, { useEffect, useState } from 'react';
import './Body.css'
import Blog from '../Blog/Blog';
const Body = () => {
    const [blogs, setBlogs] = useState([]);

    const [spentTime, setSpentTime] = useState(0);

    const [readBlogs, setReadBlogs] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    const addSpentTime = (timeToRead) => {
        const newTime = spentTime + timeToRead;
        setSpentTime(newTime)
    }

    const markAsRead = (title) => {
        if(readBlogs.includes(title) ){
            return;
        }
        else{
            setReadBlogs([...readBlogs, title]);
        }
    };

    return (
        <div>
            <div className="blogs-container">
                <div className="blog">
                    {
                        blogs.map(blog => <Blog key={blog.id} timeToRead={blog.timeToRead} blog={blog} addSpentTime={addSpentTime} markAsRead={markAsRead}></Blog>)
                    }

                </div>

                <div className="cart">
                    <div>
                        <h5 className='spent-time'>Spent Time On Read :  {spentTime} min</h5>
                    </div>

                    <div className='title-container'>
                        <h4 className='bookmark-counter'>Bookmarked Blogs : 8</h4>
                        {
                            readBlogs.map((title, id) => (<p className='mark-title' key={id}>{title}</p>))
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Body;