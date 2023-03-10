import './App.css';
import {useState} from "react";

function App() {
  const [traffic, setTraffic] = useState(false)


  function btn () {
    setTraffic(!traffic)
  }


  return (
    <div className="App">
      <div style={!traffic ? {background: 'red'} : {background: 'green'}} className='block'>
        <div>
          <button onClick={btn} className='red' style={!traffic ? {display:'none'} : {display: 'block'}}>red</button>
        </div>
        <div>
          <button onClick={btn} className='green' style={traffic ? {display:'none'} : {display: 'block'}}>green</button>
        </div>
      </div>
    </div>
  );
}

export default App;
