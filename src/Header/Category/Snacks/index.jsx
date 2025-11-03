// import CardInfo from '../../../Home/Card Info';

const Snacks = ({ data = [] }) => {
  if (!data || data.length === 0) {
    return <div className="text-center text-gray-500 py-8">No snacks available</div>;
  }

  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center px-4">
      {data.map((item) => (
        <CardInfo 
          key={item.id} 
          id={item.id}
          name={item.name}
          price={item.price}
          image={item.image}
          category={item.category}
        />
      ))}
    </div>
  );
};

export default Snacks;
