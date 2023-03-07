import React, {useState} from 'react'
import Card from './Card'

const Form = () => {
    const [nombre, setNombre] = useState("");

    const[nombres, setNombres] = useState([]);
    const[show, setShow] = useState(false);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setNombres([...nombres, nombre]);
        setShow(true);
        setNombre("");
    }


  return (

    <div> 
        <form onSubmit={handleSubmit}>
            <label>Nombre completo</label>
            <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)}/>
            <button>Enter</button>
        </form>

        {nombres.map((n, index)=> <Card key={index} nombre={n}/>)}
        
           
    </div>
       
    
  )
}

export default Form