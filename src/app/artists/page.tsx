import { Suspense } from 'react';
import ArtistListingPage from '@/components/ArtistListingPage'
import React from 'react'

const page = () => {
  return (
    <div className="p-6 min-h-screen bg-white text-black">
      <h1 className="text-2xl font-bold mb-4">Explore Artists</h1>
      <Suspense fallback={<p>Loading...</p>}>
      <ArtistListingPage/>
      </Suspense>
    </div>
  )
}

export default page