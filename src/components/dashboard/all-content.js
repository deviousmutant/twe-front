import React from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

function AllContent(props) {
    const auth = Cookies.get("auth");
    function HandleOutput(data) {
        props.HandleOutput(data)
    }
    React.useEffect(() => {
        axios.get('https://thepc.herokuapp.com/api/admin/allarticles ', {
            headers: {
                'Authorization': 'Bearer ' + auth
            }
        })
            .then(response => {
                HandleOutput(response.data);
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return null;
}



export default AllContent;