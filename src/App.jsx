import React from 'react'
import TituloPrincipal from './componentes/TituloPrincipal/TituloPrincipal'
import Boton from './componentes/Boton/Boton'
import ItemCount from './componentes/ItemCount/ItemCount'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'


///JSX es una extensión de JS. 

//El componente principal de mi Aplicación es el componente App. 

//Componentes 1: 
//Definición: Conjunto de elementos que cumplen una función específica en la Interfaz del Usuario. 

//Ventajas de trabajar con componentes: 

/*
  - Reutilizamos código. 
  - Favorece la separación de responsabilidades. 
  - El código se vuelve más fácil de entender. 
  - Mejora el rendimiento de la aplicación. 

  Caracteristicas principales de los componentes: 

  - Renderizar un único elemento.
  - Pueden recibir props (propiedades).
  - Pueden tener un estado. 

  ¿Que son las props?
  Las props son objetos que contienen datos que un componente necesita para renderizarse correctamente. 
  Estas se envian de forma unidireccional de un componente padre a un componente hijo. 

  ¿Qué es el estado? 
  El estado es un objeto que contiene información del componente que puede cambiar durante la ejecución de la Aplicación. 
  */

const App = () => {
  //La vamos a utilizar para toda la lógica que esta detras del componente. 

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting = "HOla COmisión!!"/>


      {/* <TituloPrincipal saludo="Hola Mundo"/>
      <Boton texto="Comprar"/>
      <Boton texto="Eliminar"/>
      <ItemCount stock={15} />
      <hr />
      <ItemCount stock={5} />
      <hr />
      <ItemCount stock={2} /> */}
    </>
  )
}

export default App