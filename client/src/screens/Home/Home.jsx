import React from 'react'
import './Home.css'
import PostCards from '../../components/PostCards/PostCards'
import Layout from '../../components/shared/Layout/Layout'

const Home = () => {
  return (
    <Layout>
      <h1>hello</h1>
      <div className="home">
        <PostCards />
      </div>
    </Layout>
  )
}

export default Home
