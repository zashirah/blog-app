import React, { useEffect, useState } from 'react';
import PostCard from '../PostCard/PostCard'
import './PostCards.css';
import { Link } from 'react-router-dom'
import { getPosts } from '../../services/posts'

const PostCards = (props) => {
  const [allPosts, updatePosts] = useState([])

  useEffect(() => {
    const fetchPost = async () => {
      const posts = await getPosts();
      updatePosts(posts);
    };
    fetchPost();
  }, []);

  const CARDS = allPosts.map((post, index) => 
    index < 8 ? <PostCard 
      _id={post._id}
      title={post.title}
      author={post.author}
      imgURL={post.imgURL}
      description={post.description}
      key={index}
      /> : null
  )


  return (
    <div className="post-cards">
      <div className="latest">LATEST</div>
      <div className="cards">
        {CARDS}
      </div>
    </div>
  )
}

export default PostCards