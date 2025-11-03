import { useState, useRef, useEffect } from 'react';

const categories = [
  { key: 'all', label: 'All' },
  { key: 'desserts', label: 'Desserts' },
  { key: 'drinks', label: 'Drinks' },
  { key: 'main_dish', label: 'Main Dish' },
  { key: 'snacks', label: 'Snacks' },
];

const Navbar = ({ selectedCategory, onCategoryChange }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropRef.current && !dropRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-white border-b border-[#F0A202]/30 px-4">
      <div className="flex items-center justify-between max-w-5xl mx-auto py-4 gap-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 select-none">
          <img src="/src/assets/logo.png" alt="Logo" className="h-10 w-10 object-contain rounded-full shadow-md" />
          <span className="text-xl font-bold text-[#F18805]">FoodMarket</span>
        </a>
        {/* Navbar items */}
        <div className="flex items-center gap-4 relative">
          <a href="#" className="text-[#0E1428] font-semibold hover:text-[#F18805] transition">Home</a>
          <div className="relative" ref={dropRef}>
            <button
              className="inline-flex items-center px-4 py-2 rounded-md border border-[#F18805] bg-white text-[#F18805] font-medium hover:bg-[#F0A202] hover:text-white transition focus:outline-none"
              onClick={() => setDropdownOpen((x) => !x)}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              Category
              <svg className={`ml-2 h-4 w-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {dropdownOpen && (
              <ul className="absolute right-0 mt-2 z-50 w-44 bg-white rounded-lg border border-[#F0A202]/40 shadow-lg py-1">
                {categories.map((cat) => (
                  <li key={cat.key}>
                    <button onClick={() => { onCategoryChange(cat.key); setDropdownOpen(false); }}
                      className={`block w-full text-left px-4 py-2 text-[#0E1428] hover:bg-[#F18805]/20 hover:text-[#F18805] transition ${selectedCategory === cat.key ? 'font-bold text-[#F18805]' : ''}`}
                    >
                      {cat.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

