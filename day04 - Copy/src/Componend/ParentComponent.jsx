
import ProductComponent from './ProductComponent';

const ParentComponent = () => {
    const products = [
      { id: 1, name: 'Mobile', price: '$20,000', description: 'A mobile phone, or cell phone, is a portable telephone that allows users to make and receive calls' },
      { id: 2, name: 'Laptop', price: '$20', description: 'A laptop, sometimes called a notebook computer by manufacturers, is a battery- or AC-powered personal computer smaller than a briefcase.' },
      { id: 3, name: 'Car', price: '$30', description: 'Cars have controls for driving, parking, passenger comfort, and a variety of lamps.' },
    ];
  
    return (
      <div>
        <h1>Product List</h1>
        {products.map(product => (
          <ProductComponent 
            key={product.id} 
            name={product.name} 
            price={product.price} 
            description={product.description} 
          />
        ))}
      </div>
    );
  };
  
  export default ParentComponent;