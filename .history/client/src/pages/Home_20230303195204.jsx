import React, { useState, useEffect } from 'react'
import { Loader, Card, FormField } from '../components'

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);

  return (
    <section className='max-w'>
      Home
    </section>
  )
}

export default Home
