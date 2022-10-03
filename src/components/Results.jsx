import React from 'react'
import PropTypes from 'prop-types'

const Result = ({value}) =>(
    <div className="result">
        {value}
    </div> 
)

// esto es para que valide  lo que trae el campo value 
Result.propTypes = {
    value: PropTypes.string.isRequired
}
// esto es para poner valores por defecto
Result.defaultProps= {
    value: "0"
}
export default Result