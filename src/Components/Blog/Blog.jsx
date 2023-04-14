import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './Blog.css';

const Blog = (props) => {
    const { title, author, authorImg, publishedIn, timeToRead
        , titleImg, hashTags } = props.blog;

    const {addSpentTime, markAsRead} = props;
    return (
        <div className='blog'>
            <img src={titleImg} alt="title image" />
            <div className='author-section'>
                <div className='image-date'>
                    <img src={authorImg} alt="author image" />
                    <div>
                        <h5>{author}</h5>
                        <p>{publishedIn} (4 days ago) </p>
                    </div>
                </div>
                <div>
                    <p>{timeToRead} min read <button onClick={()=>addSpentTime(timeToRead)} className='btn-icon'><FontAwesomeIcon icon={faBookmark} className='icon'/></button></p>
                </div>
            </div>
            <h1>{title}</h1>
            <div className='hashtags'>
                <p>{hashTags[0]}</p>
                <p>{hashTags[1]}</p>
            </div>
            <button onClick={()=>markAsRead(title)} className='button'>Mark as Read</button>
            
        </div>
    );
};

export default Blog;