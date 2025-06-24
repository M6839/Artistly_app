type FilterProps = {
  category: string;
  setCategory: (val: string) => void;
  price: string;
  setPrice: (val: string) => void;
};

export default function FilterBlock({ category, setCategory ,price,setPrice}: FilterProps) {
  return (
    <div className="flex gap-4 items-center mb-4">
      <select
        className="w-full p-2 border rounded"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Singer">Singer</option>
        <option value="Dancer">Dancer</option>
        <option value="DJ">DJ</option>
        <option value="Speaker">Speaker</option>
      </select>
      <select  className="w-full p-2 border rounded"
      value={price}
      onChange={(e) => setPrice(e.target.value)}
      >
            <option value="">All prices</option>
            <option value="₹5k - ₹10k">₹5k - ₹10k</option>
            <option value="₹10k - ₹20k">₹10k - ₹20k</option>
            <option value="₹20k+">₹20k+</option>
      </select>
    </div>
  );
}
