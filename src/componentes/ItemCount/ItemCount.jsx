import React from 'react'
//1) Importamos el Hook: 
import { useState } from 'react';



//Trabajamos con el "Estado"
//Recuerden que es un objeto con información util para el componente. 

//El estado es un concepto de React y no se JS. Por eso para utilizarlo vamos a usar los Hooks, que ya vienen incorporados en la librería. 
//-----

//2) El Hook useState me va a retornar un array. Este array tiene dos elementos, el primero es el estado, el segundo es una función que me actualiza ese estado.  


const ItemCount = (props) => {

    const [contador, setContador] =  useState(1);

    //3) Creamos dos funciones para incrementar y decrementar el contador. 

    const incrementar = () => {
        if (contador < props.stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if( contador > 1){
            setContador(contador - 1);
        }
    }

  return (
    <div>
        <button onClick={incrementar}> + </button>
        <p> {contador} </p>
        <button onClick={decrementar}> - </button>
    </div>
  )
}

//Incrementar y decrementar van sin parentesis porque si no se ejecutarian al momento de renderizar el componente. Y solo queremos que se ejecute cuando el visitante haga click en los botones. 


export default ItemCount