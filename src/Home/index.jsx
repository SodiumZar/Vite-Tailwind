import React from 'react';
import Search from './Search';

// Home will use the same data as the Card Info component (kept in Card Info file),
// but render a filtered view here so we don't have to modify the original Card Info.
const Home = ({ selectedCategory = 'all' }) => {
  const [search, setSearch] = React.useState('');

  // Mirror of the Card Info items (ids, names, categories, prices)
  const items = [
    { id: 1, name: 'Cheese Burger', category: 'Meal', price: 'Rp25.000', image: '/src/assets/burger.jpg' },
    { id: 2, name: 'French Fries', category: 'snack', price: 'Rp15.000', image: '/src/assets/kentang.jpg' },
    { id: 3, name: 'Steak', category: 'Meal', price: 'Rp145.000', image: '/src/assets/steak.jpg' },
    { id: 4, name: 'Mie Goreng Spesial', category: 'Meal', price: 'Rp15.000', image: '/src/assets/mie.jpeg' },
    { id: 5, name: 'Nasi kuning manado', category: 'Meal', price: 'Rp12.000', image: '/src/assets/naskun.jpeg' },
    { id: 6, name: 'Es pisang ijo', category: 'Dessert', price: 'Rp10.000', image: '/src/assets/es.jpg' },
  ];

  // Map header category keys to filtering logic over Card Info categories/ids.
  // Per your instruction, selecting 'drinks' should show id 6 (Es pisang ijo).
  const filterBySelectedCategory = (list, key) => {
    if (!key || key === 'all') return list;

    switch (key) {
      case 'drinks':
        // explicit mapping: show item with id 6
        return list.filter((it) => it.id === 6);
      case 'dessert':
      case 'desserts':
        return list.filter((it) => String(it.category).toLowerCase() === 'dessert' || String(it.category).toLowerCase() === 'desserts');
      case 'snacks':
      case 'snack':
        return list.filter((it) => String(it.category).toLowerCase() === 'snack' || String(it.category).toLowerCase() === 'snacks');
      case 'main_dish':
      case 'meal':
        return list.filter((it) => String(it.category).toLowerCase() === 'meal' || String(it.category).toLowerCase() === 'main_dish');
      default:
        return list;
    }
  };

  const byCategory = filterBySelectedCategory(items, selectedCategory);

  // filter by search term (case-insensitive, searches name)
  const filtered = byCategory.filter((it) => it.name.toLowerCase().includes(search.trim().toLowerCase()));

  return (
    <main className="container mx-auto py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <Search value={search} onSearch={setSearch} />

        {/* Render cards here to match the Card Info visuals but only show filtered items */}
        {filtered.length === 0 ? (
          <div className="text-center text-gray-500 py-8">No items match your selection.</div>
        ) : (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((food) => (
              <div key={food.id} className="rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer w-full">
                <img src={food.image} alt={food.name} className="w-full h-56 object-cover rounded-2xl mx-auto" />
                <div className="p-4">
                  <h3 className="text-2xl font-semibold text-gray-800">{food.name}</h3>
                  <p className="text-yellow-600 font-medium mb-4 text-xl">{food.price}</p>
                  <p className="text-sm text-gray-500 capitalize">{food.category}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
