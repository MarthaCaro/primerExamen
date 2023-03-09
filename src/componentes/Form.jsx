import React, {Fragment, useState} from 'react'
import Card from './Card'

const Form = () => {   
    const [user, setUser]= useState({
      nombre:"",
      pelicula:""
    });

    const[show, setShow] = useState(false);
    const [err, setErr] = useState(false)
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if(user.nombre.length>=3 && user.nombre.trim() && user.pelicula.length>=6){
          setShow(true);
          setErr(false)
        }else{
          setShow(false)
          setErr(true)
        }
          
    }


  return (
    <Fragment>
      <div> 
          <form className='form' onSubmit={handleSubmit}>
              <label>Nombre completo: </label>
              <input className='input' type="text" value={user.nombre} onChange={(event) => setUser({...user, nombre: event.target.value})}/>
              <label>película: </label>
              <input className='input' type="text" value={user.pelicula} onChange={(event) => setUser({...user, pelicula: event.target.value})}/>
              <input type="submit" value="enviar"/>
          </form>

          <div className='alerta'>
          {err ? 'Por favor chequea que la información sea correcta' : null}
          </div>

          {show && <Card nombre={user.nombre} pelicula={user.pelicula}/>}
          
            
      </div>
    </Fragment>   
    
  )
}

export default Form