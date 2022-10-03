import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button/Button'

const Functions = ({OnContentClear,onDelete}) =>(

    <section className="functions">
        <Button type="button-long-text" text="Clear" clickHandler={OnContentClear} ></Button>
        <Button text="&larr;" clickHandler={onDelete}></Button>
    </section>

)
Functions.propTypes={
    OnContentClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}


export default Functions

