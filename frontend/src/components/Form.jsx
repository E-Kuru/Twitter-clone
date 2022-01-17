import React, { useState } from "react";
import "./form.css"
const Form = () => {
    const [dateValue, setDateValue] = useState()

    const onDateChange = (e) => {
        console.log(e.target.value);
    }
    return (
        <form>
            <input type="text" placeholder="Name"/>
            <input type="text" placeholder="email"/>
            <input type="password" placeholder="password"/>
            <input 
                type="tel" 
                pattern="^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$"
                placeholder="telephone"
            />
            <input 
                type="date" 
                value= {dateValue}
                min="1900-01-01"
                max="2022-01-17"
                onChange={onDateChange}
            />
            <button className='form-btn'>sigin</button>
        </form>
    )
}

export default Form
