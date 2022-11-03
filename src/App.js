//import logo from './logo.svg';
import './App.css';

function App() {
  return (

 <header className='App-header'>
  <DivisionBox name="rubel"></DivisionBox>
</header>
  
  );
}

function DivisionBox(props){
  const divisionStyle ={
    border:'2px solid gray',
    margin:'10px',padding:'10px',
    borderRadius:'7px',backgroundColor:'lightgray',
  width:'400px',
  height:'200px'
  }
  return (
    <div style={divisionStyle}>
      <h1>Nayok:{props.name}</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, eligendi!</p>
    </div>

  )
}



export default App;
