import React from 'react';
import './Post.css';
import { Link } from 'react-router-dom'

const Post = (props) => {
    return (
        <>
        <Link className="post" to={`/posts/${props._id}`}>
                <div className="post-title">{props.title}</div>
                <div className="post-author">{props.author}</div>
                <img className="post-image" src={props.imgURL} alt={props.name} />
                <div className="post-description">{props.description}</div>
            </Link>
        </>
    )
}
export default Post