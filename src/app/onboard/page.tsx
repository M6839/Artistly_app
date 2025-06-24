'use client';
import React from 'react';
import { useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const categories = ['Singer', 'Dancer', 'DJ', 'Speaker'];
const languages = ['English', 'Hindi', 'Telugu', 'Tamil'];

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  bio: yup.string().required('Bio is required'),
  category: yup.array().min(1, 'Select at least one category'),
  languages: yup.array().min(1, 'Select at least one language'),
  feeRange: yup.string().required('Fee range is required'),
  location: yup.string().required('Location is required'),
  image: yup.mixed().notRequired()
});

export default function OnboardFormPage() {
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      category: [],
      languages: [],
    },
  });

  const onSubmit = (data: unknown) => {
    console.log('Form Data:', data);
    alert('Submitted! Check console.');
  };

  return (
    <div className=' bg-white min-h-screen'>
    <div className="max-w-2xl mx-auto p-6 text-black">
      <h1 className="text-2xl font-bold mb-4">Artist Onboarding</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        {/* Name */}
        <div>
          <label>Name</label>
          <input {...register('name')} className="w-full p-2 border rounded" />
          <p className="text-red-500 text-sm">{errors.name?.message}</p>
        </div>

        {/* Bio */}
        <div>
          <label>Bio</label>
          <textarea {...register('bio')} className="w-full p-2 border rounded" />
          <p className="text-red-500 text-sm">{errors.bio?.message}</p>
        </div>

        {/* Category */}
        <div>
          <label>Categories</label>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center gap-1">
                <input type="checkbox" value={cat} {...register('category')} />
                {cat}
              </label>
            ))}
          </div>
          <p className="text-red-500 text-sm">{errors.category?.message}</p>
        </div>

        {/* Languages */}
        <div>
          <label>Languages Spoken</label>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang) => (
              <label key={lang} className="flex items-center gap-1">
                <input type="checkbox" value={lang} {...register('languages')} />
                {lang}
              </label>
            ))}
          </div>
          <p className="text-red-500 text-sm">{errors.languages?.message}</p>
        </div>

        {/* Fee Range */}
        <div>
          <label>Fee Range</label>
          <select {...register('feeRange')} className="w-full p-2 border rounded">
            <option value="">Select Range</option>
            <option value="₹5k - ₹10k">₹5k - ₹10k</option>
            <option value="₹10k - ₹20k">₹10k - ₹20k</option>
            <option value="₹20k+">₹20k+</option>
          </select>
          <p className="text-red-500 text-sm">{errors.feeRange?.message}</p>
        </div>

        {/* Profile Image */}
        <div>
          <label>Profile Image (Optional)</label>
          <input type="file" {...register('image')} className="w-full p-2 border rounded" />
        </div>

        {/* Location */}
        <div>
          <label>Location</label>
          <input {...register('location')} className="w-full p-2 border rounded" />
          <p className="text-red-500 text-sm">{errors.location?.message}</p>
        </div>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
    </div>
  );
}
