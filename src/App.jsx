import Logo from "./Logo";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";

import React from 'react';

const App = () => {
  // Sementara: state dummy, supaya ga blank/error
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  // Placeholder (tidak perlu array items, dsb)
  return (
    <>
      <Header
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
    <Home selectedCategory={selectedCategory} />
    <Footer />
    {/* placeholder sementara sampai Home selesai
      <main className="container mx-auto py-8 px-4">
        Placeholder/fallback
        <div className="text-gray-500 text-center mt-20 text-xl">
          Fitur dan data menu akan muncul setelah integrasi/merge selesai.
        </div>
      </main>*/}
    </>
  );
};

export default App;
