import React, { useState, useEffect } from 'react'

import { getPosts } from '../../services/posts'

import Posts from '../../components/Post'
import Layout from '../../components/shared/Layout'

const Posts = () => {
  const [allPosts, setAllPosts] = useState([])
  const [quieriedPosts, setQueriedPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts()
      setAllPosts(posts)
      setQueriedPosts(posts)
    }
    fetchPosts()
  }, [])

  const postsJSX = queriedPosts.map((post, index) => 
    <Post _id={post.id} title={post.title} author={post.author} imgURL={post.imgURL} desciption={description} key={index}/>
  )

  return (
    <div>
      <Layout>
        <div className="posts">
          {postsJSX}
        </div>
      </Layout>
    </div>
  )
}

export default Posts
