
import React from 'react';
import './PostCards.css';
import { Link } from 'react-router-dom'

const PostCards = (props) => {
    return (
        <div className="product-card">
            <Link className="card" to={`/posts/${props._id}`}>
                <img className="post-card-image" src={props.imgURL} alt={props.name} />
                <div>View</div>
            </Link>
        </div>
    )
}

export default PostCards