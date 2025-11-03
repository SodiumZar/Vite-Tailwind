const categories = [
  { key: 'all', label: 'All' },
  { key: 'dessert', label: 'Dessert' },
  { key: 'drinks', label: 'Drinks' },
  { key: 'main_dish', label: 'Main Dish' },
  { key: 'snacks', label: 'Snacks' },
];

const Category = ({selected, onChange}) => (
  <nav className="flex gap-3 md:gap-5 mt-2 flex-wrap justify-center ">
    {categories.map(ctg => (
      <button
        key={ctg.key}
        onClick={() => onChange(ctg.key)}
        className={`px-5 py-2 rounded-full font-semibold text-base shadow-sm transition-all border  ${selected === ctg.key ? 'bg-[#F0A202] text-white border-[#F0A202]' : 'bg-white text-[#F18805] border-[#F18805] hover:bg-[#F18805] hover:text-white cursor-pointer'}
        `}
      >
        {ctg.label}
      </button>
    ))}
  </nav>
);

export default Category;
