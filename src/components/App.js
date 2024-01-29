import React,{useState}  from 'react';
import '../styles/App.css';
import List from './list';




function App() {
  const [selected,setselected]=useState('');
  const task=["Yes","Probably not","Maybe!"];
  const [drop,isdropdown] = useState(false);


  function toggle(e){
   isdropdown(true);
   setselected('');
    console.log(drop);
  }

  const toggle1=(e)=>{
    isdropdown(false);
    setselected(e);
    console.log(drop);
  }
  
  return (
    <div className="App">
      <div id='DropDown'>
        <hl className="title">Should you use a dropdown?</hl>
        <div className='main-container'>
          <div className='trigger'>
            {selected!=='' ? <p>{selected}</p>:<p>Select</p>}
          </div>
          <button onMouseEnter={toggle} onClick={toggle} className="imgc">
          <img  src='https://cdn-icons-png.flaticon.com/128/10017/10017905.png' alt="drop"/>
          </button>
        </div>
        {drop?  <div id='list'>
            <List toggle1={toggle1} task={task}/>
          </div>:null}
       
      </div>
    </div>
  );
}

export default App;
