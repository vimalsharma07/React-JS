import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div  className='main'>
    <div   className='firstrow'>
      <Card   color="#FF6663"  text="PINK"/>
      <Card   color="#333333"  text="GRAY"/>
      <Card   color="#000000"  text="Black"/>
      <Card   color="#38BB14"  text="GREEN"/>
      <Card   color="#C90B0B"  text="RED"/>
    </div>

<div   className='secondrow'>
<Card   color="#FF8000"  text="ORANGE"/>
<Card   color="#FFF500"  text="YELLOW"/>
<Card   color="#CCCCCC"  text="LIGHT GRAY"/>
<Card   color="#7E41A2"  text="PURPAL"/>
<Card   color="#C14911"  text="BROWN"/>
</div>
</div>
  );
}

export default App;
