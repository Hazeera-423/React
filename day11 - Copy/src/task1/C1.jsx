import G1 from "./G1";


const C1 = ({ Details }) => {
    return (
        <div>
            <h1>Name: {Details.name}</h1>
            <h2>ID: {Details.id}</h2>
            <G1  Adress={Details.adress}/>
        </div>
    );
};

export default C1;
