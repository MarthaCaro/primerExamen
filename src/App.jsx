import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './componentes/Card';
import Form from './componentes/Form';

function App() {
  

  return (
    <div className="App">
      <h1>Carga de estudiantes</h1>
      <Form/>
      <Card/>
    </div>
  )
}

export default App
