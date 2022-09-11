import React from 'react';

  

export default function Navbar() {
   let light=()=>{
      document.body.style.backgroundColor='rgb(7, 16, 65)';
      document.getElementById('val').style.backgroundColor='black';
      document.getElementById('val').style.border='.5rem double balck';
      document.getElementById('heading').style.backgroundColor='black';
      document.getElementById('foot').style.backgroundColor='black';
      document.getElementById('i').style.color='aqua';
      document.getElementById('sum').style.color='aqua';
     


      document.getElementById('dmode').style.display='inline';
      document.getElementById('lmode').style.display='none';
   }
   let dark=()=>{
      document.body.style.backgroundColor='gray';
      document.getElementById('val').style.backgroundColor='rgb(63, 62, 62)';
      document.getElementById('heading').style.backgroundColor='rgb(63, 62, 62)';
      document.getElementById('foot').style.backgroundColor='rgb(63, 62, 62)';
      document.getElementById('val').style.border='.5rem double gray';
      document.getElementById('i').style.color='aqua';
      document.getElementById('sum').style.color='aqua';

      document.getElementById('dmode').style.display='none';
      document.getElementById('lmode').style.display='inline';
       
   }

    return(

    
        <div id="heading">
        <h1 id="head">CASE CONVERTER</h1>
      
        <button className="btns" onClick={light} id="lmode">DARK MODE</button>
        <button className="btns" onClick={dark} id="dmode">Light MODE</button>

    </div>

    )
    
}
// export default Navbar;