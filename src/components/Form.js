import React from "react";
import "./form.css"


const Form = props => (

    <form onSubmit={props.weatherFunction} >
        <input type='text' name='city' placeholder='City' />
        <button>CHECK</button>
    </form>
)
export default Form;