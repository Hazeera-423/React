
import './Chaild2.css'
const Chaild2=({user})=>{
    return(
        <div className="aa">
        <div className='bb'>
        <img src={user.imageUrl} alt="Profile" />
        <h3>Name: {user.name}</h3>
        <p>Id:{user.id}</p>
        <p>Place:{user.Place}</p>
            </div>
            
        </div>
    )
}
export default Chaild2