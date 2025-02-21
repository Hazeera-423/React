import './Tabel.css'

import './Tabel.css';

const Tabel2 = ({ data }) => {
    return (
        <div>
            <table className="tablestyle">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((p) => (
                        <tr key={p.id}>
                            <td>{p.name}</td>
                            <td>{p.id}</td>
                            <td>{p.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Tabel2;
