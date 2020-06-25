import React, { useState } from 'react'
import Input from '../form/Input'
import Button from '../form/Button'

function Hov() {
    let finalLink = "";
    const [link, setLink] = useState();

    function handleChange(event) {
        const value = event.target.value;
        setLink(value);
    }

    function handleClick() {

        finalLink = link;
        console.log(finalLink);

    }



    return (
        <div>
            <div className="form-group">
                <Input type="input" name="title" placeholder="Youtube Link" onChange={handleChange} />
            </div>
            <Button classAdd={"btn-solid"} name={"Submit"} handleClick={handleClick} />

        </div>

    )
}

export default Hov;