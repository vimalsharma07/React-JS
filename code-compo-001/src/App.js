import logo from './logo.svg';
import './App.css';
import Store from './components/Store';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <div  className="header">
      <h1 className="name"> Vimal Sharma</h1>
      
      </div>
      <div  className="company">
      <h4> Software Deveoper at Digibells ESloutions pvt lts</h4>
      </div>
      <div  className="span">
      <span> <a  href="">Linkedin </a>
      </span>
      <span> <a  href="">Github </a>
      </span>
      </div>

      <hr></hr>

      <div> 
        <div>  </div>
        <Store     first="Experience" second ="Software Developer at Digibells"  para="Detail-oriented HR specialist with over 5 years of experience in provided HR generalist support in a company with over 300 employees. At O-Brien IT Created an Access database that ended up being utilized by all divisions, decreasing new hire processing times by over 20%. Seeking to invigorate the company culture at Logicon."       />
      <Store  first= ""  second="Educator At Geekster" para="I have not muc teaching experience at geekster i sometime solve the students doubts and its gives me great experience "  />
      <hr></hr>
      <Skills   head="Skills" l1="Java"  l2="JavaScript"  l3="ReactJs"    l4="PHP"/>
      <hr></hr>
      <Skills   head="Hobbies" l1="Cricket"  l2="Quiz"  l3="Outside Games"    l4="Coding"/>

      </div>
    </div>
  );
}

export default App;
