const CardInfo = () => {
  const food1 = 
    {
        id: 1,
        name: "Cheese Burger",
        category: "Meal",
        price: "Rp25.000",
        
    };
  const food2 =
    {
        id: 2,
        name: "French Fries",
        category: "snack",
        price: "Rp15.000",
        
    };
  const food3 =
    {
        id: 3,
        name: "Steak",
        category: "Meal",
        price: "Rp145.000",
        
    }
   const food4 =
    {
        id: 4,
        name: "Mie Goreng Spesial",
        category: "Meal",
        price: "Rp15.000",
        
    }
      const food5 =
    {
        id: 5,
        name: "Nasi kuning manado",
        category: "Meal",
        price: "Rp12.000",
        
    }
       const food6=
    {
        id: 6,
        name: "Es pisang ijo",
        category: "Dessert",
        price: "Rp10.000",
        
    }
   
  return (
    <>
     {/* Card 1 */}
      <div className="mt-20 p-6 flex justify-center gap-20">
            <div key={food1.id} className="rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer w-82 ">
            <img src="src\assets\burger.jpg" alt={food1.name} className="w-75 h-56 object-cover rounded-2xl mx-auto"/>
            <img src="src\assets\logo.png" className="w-12 h-14 object-cover overflow-auto float-right mr-4 mt-5 rounded-lg"/>
          <div className="p-4">
            
            <h3 className="text-2xl font-semibold text-gray-800 ">
              {food1.name}
            </h3>
            <p className="text-yellow-600 font-medium mb-4 text-xl">{food1.price}</p>
          </div>
        </div>
        {/* Card 2 */}
           <div key={food2.id} className="rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer w-82 ">
            <img src="src\assets\kentang.jpg" alt={food2.name} className="w-75 h-56 object-cover rounded-2xl mx-auto"
            />
            <img src="src\assets\logo.png" className="w-12 h-14 object-cover overflow-auto float-right mr-4 mt-5 rounded-lg"/>
          <div className="p-4">
            <h3 className="text-2xl font-semibold text-gray-800 ">
              {food2.name}
            </h3>
            <p className="text-yellow-600 font-medium mb-4 text-xl">{food2.price}</p>
          </div>
        </div> 
        {/* Card 3 */}
           <div key={food3.id} className="rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer w-82 ">
            <img src="src\assets\steak.jpg" alt={food3.name} className="w-75 h-56 object-cover rounded-2xl mx-auto"/>
            <img src="src\assets\logo.png" className="w-12 h-14 object-cover overflow-auto float-right mr-4 mt-5 rounded-lg"/>
          <div className="p-4">
            <h3 className="text-2xl font-semibold text-gray-800 ">
              {food3.name}
            </h3>
            <p className="text-yellow-600 font-medium mb-4 text-xl">{food3.price}</p>
          </div>
        </div>
      </div>
      {/* Card 4 */}
        <div className="mt-20 p-6 flex justify-center gap-20">
            <div key={food4.id} className="rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer w-82 ">
            <img src="src\assets\mie.jpeg" alt={food4.name} className="w-75 h-56 object-cover rounded-2xl mx-auto"/>
            <img src="src\assets\logo.png" className="w-12 h-14 object-cover overflow-auto float-right mr-4 mt-5 rounded-lg"/>
          <div className="p-4">
            <h3 className="text-2xl font-semibold text-gray-800 ">
              {food4.name}
            </h3>
            <p className="text-yellow-600 font-medium mb-4 text-xl">{food4.price}</p>
          </div>
        </div>
        {/* Card 5 */}
           <div key={food5.id} className="rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer w-82 ">
            <img src="src\assets\naskun.jpeg" alt={food5.name} className="w-75 h-56 object-cover rounded-2xl mx-auto"
            />
            <img src="src\assets\logo.png" className="w-12 h-14 object-cover overflow-auto float-right mr-4 mt-5 rounded-lg"/>
          <div className="p-4">
            <h3 className="text-2xl font-semibold text-gray-800 ">
              {food5.name}
            </h3>
            <p className="text-yellow-600 font-medium mb-4 text-xl">{food5.price}</p>
          </div>
        </div>
        {/* Card 6 */} 
           <div key={food6.id} className="rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer w-82 ">
            <img src="src\assets\es.jpg" alt={food6.name} className="w-75 h-56 object-cover rounded-2xl mx-auto"/>
            <img src="src\assets\logo.png" className="w-12 h-14 object-cover overflow-auto float-right mr-4 mt-5 rounded-lg"/>
          <div className="p-4">
            <h3 className="text-2xl font-semibold text-gray-800 ">
              {food6.name}
            </h3>
            <p className="text-yellow-600 font-medium mb-4 text-xl">{food6.price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardInfo;
