import { useMemo, useState } from 'react';
import Header from './Header';
// import CardInfo from './Home/Card Info';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name_asc');
  // Demo data lokal (nanti diganti dengan data dari clio)
  const items = [
    { id: 1, name: 'Cheese Burger', price: 'Rp25.000', image: 'src/assets/burger.jpg', category: 'Meal' },
    { id: 2, name: 'French Fries', price: 'Rp15.000', image: 'src/assets/kentang.jpg', category: 'snack' },
    { id: 3, name: 'Steak', price: 'Rp145.000', image: 'src/assets/steak.jpg', category: 'Meal' },
    { id: 4, name: 'Mie Goreng Spesial', price: 'Rp15.000', image: 'src/assets/mie.jpeg', category: 'Meal' },
    { id: 5, name: 'Es Pisang Ijo', price: 'Rp10.000', image: 'src/assets/es.jpg', category: 'Dessert' }
  ];

  // Helpers lokal (tanpa menyentuh folder Home)
  const mapCategoryToKey = (category) => {
    const map = {
      'Meal': 'main_dish', 'meal': 'main_dish', 'Main Dish': 'main_dish', 'main_dish': 'main_dish',
      'snack': 'snacks', 'Snack': 'snacks', 'Snacks': 'snacks', 'snacks': 'snacks',
      'Dessert': 'dessert', 'dessert': 'dessert',
      'Drink': 'drinks', 'drink': 'drinks', 'Drinks': 'drinks', 'drinks': 'drinks'
    };
    return map[category] || 'all';
  };

  const parsePrice = (s) => Number(String(s).replace(/[^0-9]/g, '') || 0);

  const filteredSortedItems = useMemo(() => {
    // filter by category
    const filtered = selectedCategory === 'all'
      ? items
      : items.filter((it) => mapCategoryToKey(it.category) === selectedCategory);

    // sort by sortBy
    const copy = [...filtered];
    switch (sortBy) {
      case 'name_desc':
        return copy.sort((a, b) => b.name.localeCompare(a.name));
      case 'price_asc':
        return copy.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
      case 'price_desc':
        return copy.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
      case 'name_asc':
      default:
        return copy.sort((a, b) => a.name.localeCompare(b.name));
    }
  }, [items, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-white">
      <Header
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />
      <main className="container mx-auto py-8 px-4">
        {/**
          MERGE GUIDE: Gunakan CardInfo dari rekan Anda (sesuai repo di atas)
          dengan cara mengganti grid di bawah menjadi map ke <CardInfo />.
          Contoh:
        
          {filteredSortedItems.map((item) => (
            <CardInfo
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              category={item.category}
            />
          ))}
         **/}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center px-4">
          {filteredSortedItems.map((item) => (
            <div key={item.id} className="rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer w-82">
              <img src={item.image} alt={item.name} className="w-75 h-56 object-cover rounded-2xl mx-auto" />
              <div className="p-4">
                <h3 className="text-2xl font-semibold text-gray-800">{item.name}</h3>
                <p className="text-[#F0A202] font-medium mb-4 text-xl">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;