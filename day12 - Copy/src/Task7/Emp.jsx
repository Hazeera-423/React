

import DataDisplay from "./Data";

const Emp = () => {
  const employees = [
    { id: 1, name: "John", position: "Developer" },
    { id: 2, name: "Smith", position: "Designer" },
    { id: 3, name: "virat", position: "Manager" }
  ];

  const departments = [
    { id: "D1", name: "HR", location: "New York" },
    { id: "D2", name: "Engineering", location: "San Francisco" },
    { id: "D3", name: "Marketing", location: "Chicago" }
  ];

  return (
    <div>
      <h1>Company Data</h1>
    
     
      <DataDisplay  title="Employees" data={employees}/>
      <DataDisplay title="Departments" data={departments}/>
    </div>
  );
};

export default Emp;
