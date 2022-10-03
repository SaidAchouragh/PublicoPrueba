import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button/Button'

const MathOperations = ({onclickOperation,onclickEqual}) => (
    
<section className="math-operations">
    <Button text="+" clickHandler={onclickOperation}></Button>
    <Button text="-" clickHandler={onclickOperation}></Button>
    <Button text="*" clickHandler={onclickOperation}></Button>
    <Button text="/" clickHandler={onclickOperation}></Button>
    <Button text="=" clickHandler={onclickEqual}></Button>
</section>
)
MathOperations.propTypes={
    onclickOperation: PropTypes.func.isRequired,
    onclickEqual: PropTypes.func.isRequired
} 

export default MathOperations