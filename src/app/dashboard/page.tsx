import ArtistDashboardTable from '@/components/ArtistDashboardTable'
import artistsdata from'@/data/artistsSubmissions.json'

export default function DashboardPage() {
  return (
    <main className="p-6 bg-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-black">Manager Dashboard</h1>
      <ArtistDashboardTable data={artistsdata} />
    </main>
  );
}
