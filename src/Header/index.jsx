import Category from './Category';
// import Logo jika atau pake gambar logo
// import Logo from '../Logo';

const Header = ({
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange
}) => {
  return (
    <header className="w-full py-8 px-4 flex flex-col border-b border-[#F0A202]/30 bg-white">
      {/* Header row: kiri judul, kanan search bar */}
      <div className="flex flex-row items-center justify-between max-w-5xl w-full mx-auto gap-4">
        {/* <Logo className="mr-4" /> */}
            
        <h1 className="text-5xl font-bold text-[#F18805] text-center leading-tight mt-3">
            The Best Food
            <span className="block text-[#D95D39]">On The Market</span>
        </h1>

        {/* Search Bar disini */}

        {/* <Search /> */}

        {/* Sorting Control */}
        <div className="ml-auto">
          <label className="mr-2 text-sm font-medium text-[#0E1428]/80">Sort by</label>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="px-3 py-2 border border-[#F18805] rounded-md text-[#0E1428] bg-white focus:outline-none focus:ring-2 focus:ring-[#F0A202]"
          >
            <option value="name_asc">Name (A→Z)</option>
            <option value="name_desc">Name (Z→A)</option>
            <option value="price_asc">Price (low→high)</option>
            <option value="price_desc">Price (high→low)</option>
          </select>
        </div>

      </div>
      {/* deskripsi singkat*/}
      <div className="w-full flex flex-col items-center mt-5 mb-2">
        <p className="text-lg text-[#0E1428]/80 text-center max-w-2xl">
          Discover your favorite food and drinks, served fresh and delicious, from our curated menu collection.
        </p>
      </div>
      {/* Kategori */}
      <div className="flex justify-center w-full mt-3">
        <Category selected={selectedCategory} onChange={onCategoryChange} />
      </div>
    </header>
  );
};

export default Header;

