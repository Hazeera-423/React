// import './chaild5.css'

// const Chaild5=()=>{
//     return(
//         <div >
//              <h1>Shift</h1>
            
//              <div  className='one'>
//              <h1>Night View</h1>
//              <img src="girl.webp" alt="" />
//              </div>
//             <div>
//                 <h1>Day view</h1>
//               <img src="bright.jpg" alt="" />
//             </div>
//         </div>
//     )
// }
// export default Chaild5




import './chaild5.css';

const Chaild5 = () => {
    return (
        <div>
            <h1>Shift</h1>
            <div className="container">
              
                <div className="one">
                    <h2>Night View</h2>
                    <img src="girl.webp" alt="Night view" />
                    <p>Experience the serene beauty of the night with its calm and peaceful vibes.</p>
                </div>

           
                <div className="two">
                    <h2>Day View</h2>
                    <img src="bright.jpg" alt="Day view" />
                    <p className='ptag'>Feel the energy of the day with bright and colorful surroundings.</p>
                </div>

            </div>
        </div>
    );
};

export default Chaild5;
