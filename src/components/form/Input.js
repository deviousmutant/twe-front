import React from 'react'

function Input(props) {

    function handleChange(event) {
        props.onChange(event);
    }

    if (props.type === "text-area") {
        return (
            <textarea type={props.type} placeholder={props.placeholder} name={props.name} rows={props.rows} onChange={handleChange} value={props.value} className={props.className} />
        )
    } else {
        return (
            <input type={props.type} placeholder={props.placeholder} name={props.name} onChange={handleChange} value={props.value} className={props.className} />
        )
    }

}

export default Input