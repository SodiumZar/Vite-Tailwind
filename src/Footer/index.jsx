const Footer = () => {
    return(
        <footer className="bg-[#AC5805] text-white py-4 mx-auto md:px-20 mt-200">
      <div className="grid md:grid-cols-4 gap-10 mt-20">
        {/* Brand */}
        <div className="ml-50">
          <h2 className="text-xl font-bold">FoodMarket</h2>
          <p className="text-sm opacity-80 mt-1">Discover. Eat. Enjoy.</p>
        </div>

        {/* Menu */}
        <div className="ml-40">
          <h3 className="font-semibold mb-3 text-lg">Menu</h3>
          <ul className="space-y-2 text-sm opacity-90">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Search</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="ml-10">
          <h3 className="font-semibold mb-3 text-lg">Contacts</h3>
          <ul className="space-y-2 text-sm opacity-90">
            <li><a href="#" className="hover:underline bg-[#57575733] ">foodstore@email.com</a></li>
          </ul>
          <div className="mb-">
            <ul></ul>
            <ul></ul>
            <ul>
              <li>+62 812 3456 7890</li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <div className="flex items-center">
                
            <div>
                 <h3 className="font-semibold mb-3 text-lg">Don’t miss out!</h3>

                <div className="bg-[#57575733] rounded-lg flex items-center overflow-hidden mb-3 w-50 -mx-9">
                    <input
                        type="address"
                        placeholder="your address"
                        className="flex-1 p-2 rounded-l-lg text-[#9D9493E5] focus:outline-none"
                    />
                </div>
                <div className="mx-2">
                    <button className="bg-[#F18805] hover:bg-orange-700 text-white px-7 py-2 rounded-xl transition w-30 -mx-1 ">
                        Subscribe
                    </button>
                </div>

            </div>
            
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-white/30 mt-10 pt-4 text-center text-sm opacity-70">
        © 2025 Food Distortion. All rights reserved.
      </div>
    </footer>
    );
}

export default Footer;
