// se importan las librerias necesarias
/* eslint no-eval:0 */ //para quitar el warning de la funcion eval 
import React from 'react';
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import Result from './components/Results';
import words from 'lodash.words'
import  './App.css';
// creación de la  función flecha, "no olvidar la flecha"  del componente 
// los parentesis vacios quiere decir que no va a esperar parametros la variable
const App = () => {
const useState= React.useState
const [stack,setStack] = useState("") 
// vamos a cambiar los nombres para que se entienda bien TextoCaja >> STACK 
 // ModificaTextoCaja pasa a ser>>  SETSTACK 

/* Esto va a ser comentado por que se va a hacer con Array destructuring
    const ArrayTextoFuncionModificaTexto= useState("")// valor de la caja por defecto
    const TextoCaja= ArrayTextoFuncionModificaTexto[0]  //recoge el valor que se le da por defecto
    const ModificaTextoCaja= ArrayTextoFuncionModificaTexto[1] // la función que cambia ese valor7
*/
const items = words(stack, /[^-^+^*^/]+/g) // esto se usa para que se nos muestre el ultimo numero que escribimos en result
    // Lo de aqui abajo Es similar a un if
    // (esVerdadero) ? (resultadoPorVerdadero) : (resultadoPorFalso)
const value = items.length > 0 ? items[items.length-1] : "0"

 return (
<main className='react-calculator'> Otro cambio Calc app ###!!

    <Result value={ value
    // con esto hace que solo se muestre  uno de los sumandos en la calc y no ambos, si queremos tener ambos
    // volvemos a usar en value={stack}
   
    } /> 

    <Numbers onClickNumber={(number)=>{
        //usamos el $ para hacer uso de la template literals para concatenar variables
        setStack(`${stack}${number}`) // para que se muestren mas de un numero, se le agrega de la funcion el stack, de esta manera almacena el texto de la caja y si pinchamos en otro numero en se lo pone detras en vez de borrar y poner el numero solo
    }}/>

    <Functions OnContentClear={() => {
        setStack(" ")
    }}
    onDelete={() =>{
    if(stack.length>0 ){
        const NewStack = stack.substring(0,stack.length-1) // esta funcion es para borrar el ultimo numero
        setStack(NewStack)
    }
}}/>

    <MathOperations onclickOperation={operation =>{
        console.log("Resultado al hacer click en lasoperaciones", operation)
        setStack(`${stack}${operation}`)   
    }}
    
    onclickEqual={equal =>{
    console.log("Resultado al hacer clic en el igual ", equal)
    setStack(eval(stack).toString()) // con la funcion eval, nos hace las operaciones aunq no es recomendable usarla enpro
}}
    />
</main>    
    )
};


// exportación del componente
export default App