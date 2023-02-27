import pic from './bright.jpg';
import secondpic from './BrightPoster.jpeg';

import './App.css';


function App() {

  




  return (
    <div className="App"     >
     <div  className='left'>
    <img     src={secondpic}   className='secondimage'/>
    <div>
      <h4  style={{color:"white"}}> Bright</h4>
      <h6 style={{color:"blue"}}> 2017 , David Ayer</h6>
      <button> 117 Min</button> <span    style={{color:"white", fontSize:"10px"}}> Action Crime Fancy</span>
      <p   style={{color:"white"}}>See in the World where fantacy create a world think more about this </p>
    <p   style={{color:"white"}}> its diffcult to manage css projects in the same things its not a brand </p>
    </div>
    <img    src={pic}    className="image"/>
    
      <div>
      </div>
     </div>
     <div  className='right' >
   
     </div>
    </div>
  );
}

export default App;
