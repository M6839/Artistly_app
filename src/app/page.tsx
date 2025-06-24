
import Link from 'next/link';

const categories = ['Singers', 'Dancers', 'Speakers', 'DJs'];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section className="text-center py-20 bg-gradient-to-r from-pink-500 to-purple-500 text-white">
        <h2 className="text-4xl font-bold mb-4">Discover & Book Talented Artists</h2>
        <p className="text-lg">Connecting Event Planners with Performers</p>
        <Link href="/artists">
          <button className="mt-6 bg-white text-pink-600 px-6 py-2 rounded-full font-semibold shadow">
            Explore Artists
          </button>
        </Link>
      </section>
      <section className="py-12 px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat}
            href={`/artists?category=${encodeURIComponent(cat.slice(0, -1))}`}
            className="bg-white p-6 rounded shadow text-center hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold">{cat}</h3>
          </Link>
        ))}
      </section>
    </main>
  );
}
