import React from 'react'
import axios from 'axios'
import News from './news'
import NewsCard from './news-card'
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

    console.log(editionObj.articles);

    if (ready === false) {
        return (
            <h1> Loading Edition {props.edition}</h1>
        )
    } else {
        return (
            <div>
                <h1><em>Edition Number:</em> {editionObj.enum}</h1>
                <h1> <em>Edition Name:</em> {editionObj.ename} </h1>
                <h1> <em>Number of Articles: </em>{editionObj.articles.length}</h1>
                
                
                <FinalEdition content={editionObj.articles} />
                
                


            </div>
        )
    }

}

export default Primary