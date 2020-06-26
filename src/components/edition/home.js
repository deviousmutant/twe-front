import React from 'react'
import './edition.css'
import Input from '../form/Input'
import Primary from './primary'
import Button from '../form/Button'

function Home() {
    const [ednum, setEdNum] = React.useState("")
    const [loaded, setLoaded] = React.useState(false)
    function HandleChange(event) {
        const value = event.target.value
        setEdNum(value)
    }
    function handleClick(event) {
        setLoaded(true)
    }
    if (loaded === false) {
        return (
            <div>
                <h1>Please enter the Edition Number below</h1>
                <Input placeholder="Edition Number" name="ednum" onChange={HandleChange} />
                <Button name="Submit" handleClick={handleClick} classAdd="btn-solid" />
            </div>
        )
    } else {
        return (
            <Primary edition={ednum} />
        )
    }

}

export default Home;