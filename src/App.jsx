import Navbar from './Header';
import React from 'react';

const App = () => {
  // Sementara: state dummy, supaya ga blank/error
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  // Placeholder (tidak perlu array items, dsb)
  return (
    <div className="min-h-screen bg-white">
      <Navbar
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <main className="container mx-auto py-8 px-4">
        {/* Placeholder/fallback */}
        <div className="text-gray-500 text-center mt-20 text-xl">
          Fitur dan data menu akan muncul setelah integrasi/merge selesai.
        </div>
      </main>
    </div>
  );
};

export default App;
