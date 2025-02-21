import './chaild.css'
const Chaildlist =({user})=>{
    return(
        <div className='aa'>
          {user.map((user, index) => (
                <div key={index} className="bb">
                    <img src={user.imageUrl} alt={user.name} />
                    <div className="user-info">
                        <h2>{user.name}</h2>
                        <p><strong>ID:</strong> {user.id}</p>
                        <p><strong>Price:</strong> {user.Price}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Chaildlist