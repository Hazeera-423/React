
import './chaild.css'
const ChildComponent = ({ products }) => {
    return (
      <div>
        <h2>Product Inventory</h2>
        <table className="product-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>${p.price}</td>
                <td>{p.quantity}</td>
                <td>${p.price * p.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3>
          Total Value: ${products.reduce((sum, p) => sum + p.price * p.quantity, 0)}
        </h3>
      </div>
    );
  };
  
  export default ChildComponent;

