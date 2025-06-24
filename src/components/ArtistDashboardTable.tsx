type Artist = {
  id: number;
  name: string;
  category: string;
  location: string;
  feeRange: string;
};

type TableProps = {
  data: Artist[];
};

export default function Table({ data }: TableProps) {
  return (
    <div className="overflow-x-auto border rounded text-black">
      <table className="min-w-full text-left text-sm">
        <thead className="">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Category</th>
            <th className="p-3">City</th>
            <th className="p-3">Fee</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((artist) => (
            <tr key={artist.id} className="border-t hover:bg-gray-50">
              <td className="p-3">{artist.name}</td>
              <td className="p-3">{artist.category}</td>
              <td className="p-3">{artist.location}</td>
              <td className="p-3">{artist.feeRange}</td>
              <td className="p-3">
                <button className="bg-blue-500 text-white px-3 py-1 rounded">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
