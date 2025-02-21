

import DataTable1 from "./Tabel4";

const App3 = () => {
  const users = [
    { id: 1, name: "Prasanthi", email: "prasanthi@example.com" },
    { id: 2, name: "Pavithra", email: "pavithra@example.com" },
  ];

  const products = [
    { id: 101, name: "Laptop", price: "$1000" },
    { id: 102, name: "Phone", price: "$500" },
  ];

  return (
    <div>
      <h1>Rendering Multiple Data Sets</h1>
      
      <DataTable1 title="User List" data={users} columns={["ID", "Name", "Email"]}/>
      <DataTable1 title="Product List" data={products} columns={["ID", "Name", "Price"]}/>
    </div>
  );
};

export default App3
