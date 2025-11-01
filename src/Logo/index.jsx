const Logo = () => {
  return (
<>
{/* Nav & Logo */}  
  <div className="bg-orange-500 m-0 p-5 flex items-center h-20 justify-between">
    {/* Logo */}
    <img src="IMG_20251101_132548.png" alt="Logo" className="h-20 w-auto"/>

    {/* Navbar */}  
    <div className="flex space-x-8">
      <a href="#" class="text-sm/6 font-semibold text-white">Home</a>
      <a href="#" class="text-sm/6 font-semibold text-white">Search</a>
      <a href="#" class="text-sm/6 font-semibold text-white">Category</a>
    </div>
  </div>
</>

  );
};

export default Logo;