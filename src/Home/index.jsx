import React from 'react';
import CardInfo from './Card Info';
import Search from './Search';

const Home = ({ selectedCategory = 'all' }) => {
  const [search, setSearch] = React.useState('');

  // items data (moved here so Home can filter/search)
  const items = [
    { id: 1, name: 'Cheese Burger', category: 'main_dish', categoryLabel: 'Main Dish', price: 'Rp25.000', image: '/src/assets/burger.jpg', logo: '/src/assets/logo.png' },
    { id: 2, name: 'French Fries', category: 'snacks', categoryLabel: 'Snacks', price: 'Rp15.000', image: '/src/assets/kentang.jpg', logo: '/src/assets/logo.png' },
    { id: 3, name: 'Steak', category: 'main_dish', categoryLabel: 'Main Dish', price: 'Rp145.000', image: '/src/assets/steak.jpg', logo: '/src/assets/logo.png' },
    { id: 4, name: 'Mie Goreng Spesial', category: 'main_dish', categoryLabel: 'Main Dish', price: 'Rp15.000', image: '/src/assets/mie.jpeg', logo: '/src/assets/logo.png' },
    { id: 5, name: 'Nasi kuning manado', category: 'main_dish', categoryLabel: 'Main Dish', price: 'Rp12.000', image: '/src/assets/naskun.jpeg', logo: '/src/assets/logo.png' },
    { id: 6, name: 'Es pisang ijo', category: 'desserts', categoryLabel: 'Desserts', price: 'Rp10.000', image: '/src/assets/es.jpg', logo: '/src/assets/logo.png' },
  ];

  // filter by category
  const byCategory = selectedCategory && selectedCategory !== 'all'
    ? items.filter((it) => it.category === selectedCategory)
    : items;

  // filter by search term (case-insensitive, searches name)
  const filtered = byCategory.filter((it) => it.name.toLowerCase().includes(search.trim().toLowerCase()));

  return (
    <main className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Search value={search} onSearch={setSearch} />
        <CardInfo items={filtered} />
      </div>
    </main>
  );
};

export default Home;
