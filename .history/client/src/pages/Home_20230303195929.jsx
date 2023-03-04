import React, { useState, useEffect } from 'react'
import { Loader, Card, FormField } from '../components'

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState('');


  return (
    <section className='max-w-7xl mx-auto'>
      Home

      <div>
        <h1 className='font-extrabold text-[#222328] text=[32px]'> The Community Showcase</h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-w-[500px]'>Browse through a collectionof imaginative and visually stunning images generated by DALL-E AI</p>
      </div>

      <div className='mt-16'>
        <FormField />
      </div>

      <div className='mt-10'>
        {loading ? (
          <div className='flex justify-center items-center' >
            <Loader />
          </div>
        ) : (
          <>
            {searchText }
          </>
        )}
      </div>
    </section>
  )
}

export default Home
