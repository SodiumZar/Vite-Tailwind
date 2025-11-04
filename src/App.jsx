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
    </>
  );
};

export default App;
