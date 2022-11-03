//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  return (

 <header className='App-header'>
  <DivisionBox name="rubel"></DivisionBox>
  <MovieCounter></MovieCounter>
</header>
  
  );
}

function MovieCounter(){
let [count,setCount]= useState(0);
const handleClick = ()=>setCount(count +1)
  return(
<div>
  <button onClick={handleClick}>AddMovies</button>
  <h3>Number of Movie: {count}</h3>
</div>

  )
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
