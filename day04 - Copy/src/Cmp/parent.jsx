
import ChildComponent from './chaild';
import './parent.css'
const ParentComponent1 = () => {
  const products = [
    { id: 1, name: 'Product A', price: 10, quantity: 5 },
    { id: 2, name: 'Product B', price: 20, quantity: 3 },
    { id: 3, name: 'Product C', price: 30, quantity: 2 },
    { id: 4, name: 'Product d', price: 50, quantity: 1 },
  ];

  return (
    <div className='bg'>
      <h2>Inventory Management</h2>
      <ChildComponent products={products} />
    </div>
  );
};

export default ParentComponent1;
