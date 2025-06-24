
'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import ArtistCard from '@/components/ArtistCard';
import FilterBlock from '@/components/FilterBlock';
import artistsData from '@/data/artistsdata.json';

export default function ArtistListingPage() {
  const searchParams = useSearchParams();
  const defaultCategory = searchParams.get('category') || '';
  
  const [category, setCategory] = useState(defaultCategory);
  const [filtered, setFiltered] = useState(artistsData);
  const [price,setPrice]=useState('');

  useEffect(() => {
    if (!category && !price) {
      setFiltered(artistsData);
    }
    else if(category && !price){
      setFiltered(artistsData.filter((a) => a.category === category ));
    }
    else if(!category && price){
      setFiltered(artistsData.filter((a) => a.priceRange===price));
    }
    else {
      setFiltered(artistsData.filter((a) => a.category === category && a.priceRange===price));
    }
  }, [category,price]);

  return (
    <div className="p-6 min-h-screen bg-white text-black">
      <h1 className="text-2xl font-bold mb-4">Explore Artists</h1>
      <FilterBlock category={category} setCategory={setCategory} price={price} setPrice={setPrice} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {filtered.map((artist) => (
          <ArtistCard key={artist.id} {...artist} />
        ))}
      </div>
    </div>
  );
}
