type ArtistProps = {
  name: string;
  category: string;
  priceRange: string;
  location: string;
};

export default function ArtistCard({ name, category, priceRange, location }: ArtistProps) {
  return (
    <div className="border p-4 rounded shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-bold">{name}</h3>
      <p>Category: {category}</p>
      <p>Price: {priceRange}</p>
      <p>Location: {location}</p>
      <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded">Ask for Quote</button>
    </div>
  );
}
