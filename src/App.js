import './App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';
// useState is used when you want to save data and update data

function App() {
  

  const [counter, setCounter] = useState(0);
  
  
  // work for increment the value
  const handleClick1 = () => {
    
setCounter(counter+1)


  }

  // will work for dec the value
const handleClick2 = () => {
    
// setCounter(counter-1)
  if (counter === 0) {
    return 0;
  }
  else {
    setCounter(counter - 1);
  }


  }
  

  const handleClick3 = () => {

    setCounter(counter === 0);
    window.location.reload();


  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  return (
    
    <div className='app'>
      <h1> Incremento / Decremento </h1>
      {/* outer white card  */}
      <div className='container'>
        {/* linear gradient card  */}
        <div className='total_amount_card' style={{ backgroundImage: `linear-gradient(to right,  rgba(253, 230, 90, 100%), rgba(204, 254, 87, 100%))` }}>
          
          
          {/* svg icon */}
          <div className="right">
            <svg onClick={ handleClick3} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="17" height="17"><path d="M21.962,12.875A10.03,10.03,0,1,1,19.122,5H16a1,1,0,0,0-1,1h0a1,1,0,0,0,1,1h4.143A1.858,1.858,0,0,0,22,5.143V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V3.078A11.985,11.985,0,1,0,23.95,13.1a1.007,1.007,0,0,0-1-1.1h0A.982.982,0,0,0,21.962,12.875Z" /></svg>
            

          </div>


          {/* card text  */}
          <div className="card_text">
            <h3 className='total_amount_heading'>
              {counter}
              {/* binded javascript */}
            </h3>
          </div>

          {/* buttons  */}
          
          <form>

            <div className="button_collection">
            <Stack spacing={2} direction="row">

                <Button onClick={ handleClick1} className="btn_one"variant="contained">+</Button>
                <Button onClick={ handleClick2}  className="btn_two" variant="contained">-</Button>
      
           </Stack>
              

            </div>
          </form>
        </div>
     </div>
    </div>
  );
}

export default App;
