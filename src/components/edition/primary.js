import React from 'react'
import axios from 'axios'
import FinalEdition from './final-edition'


function Primary(props) {
    const [ready, setReady] = React.useState(false)
    const [editionObj, setEditionObj] = React.useState({
        enum: "",
        ename: "",
        articles: []
    })
    function DisplayData(responseObj) {
        setEditionObj({
            enum: responseObj.enumber,
            ename: responseObj.ename,
            articles: responseObj.articles
        })
        setReady(true)
    }

    React.useEffect(() => {
        axios.get("https://thepc.herokuapp.com/api/edition/" + props.edition).then(response => DisplayData(response.data))
    }, [props.edition])

    if (ready === false) {
        return (
            <h1> Loading Edition {props.edition}</h1>
        )
    } else {
        return (
            <div>
                <FinalEdition content={editionObj.articles} enum={props.edition} />
            </div>
        )
    }

}

export default Primary