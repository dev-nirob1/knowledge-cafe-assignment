import React, { useState } from 'react';
import './Blog.css';

const Blog = (props) => {
    const {
        title, author, authorImg, publishedIn, timeToRead
        , titleImg
    } = props.blog;
    return (
        <div>
            <h3>name: {author}</h3>
        </div>
    );
};

export default Blog;