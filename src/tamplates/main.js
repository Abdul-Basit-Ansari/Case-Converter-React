import React,{useState} from 'react'



export default function Main(props) {
    const clear=() =>{
        
        settext("");
    }
    const change=(event) =>{
        settext(event.target.value);
    }
    const capcase=() =>{
        let captext= text.toUpperCase();
        settext(captext);
    }
    const smlcase=() =>{
        let smltext= text.toLowerCase();
        settext(smltext);
    }
  
    const copy=() =>{
        let text= document.getElementById('val');
        text.select();
        navigator.clipboard.writeText(text.value);
      
        if(text.value!==""){
            setcop("Copied!");}
           
            else{
                setcop("Copy");
            }
        }
  
  
    const [cop, setcop] = useState("Copy");
    const [text, settext] = useState("");

let val={
    backgroundColor: "#282c34" ,
    color: "aqua",
     

}
    return(

    <>
<label id="label" ><b><i id='i'>{props.h2}</i></b></label>
<div className="form">
<textarea id="val" placeholder="Enter text here" onChange={change} value={text} style={val} ></textarea>   

</div>
<div>

<input type="button" className="btns" onClick={capcase} value="CAPITAL CASE" id="captbtn" />
<input type="button" className="btns" onClick={smlcase} value="Small Case" id="smlbtn" />
<input type="button" className="btns" onClick={copy} value={cop} id="copybtn" />
<input type="button" className="btns" onClick={clear}  value="Clear" id="clearbtn" />
<div id="sum">
<h1 className="h1">Text Summary</h1>
<p id="len">{text.split(" ").length} Word And {text.length} Characters</p>
</div>
    
</div>



</>
    )
    
}
// export default Navbar;