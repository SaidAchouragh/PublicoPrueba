import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

// arrow funcion con la funcioanlidad del botón 
const Button = ({type,text,clickHandler}) =>(
           <button className={type} onClick={() => clickHandler(text)
            //desde aquí se realiza la llamada al app.jsx y ahí está la funcionalidad de esta funcion
             }>
             <span>{text}</span>
            </button>   
)

Button.propTypes ={
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
}

export default Button