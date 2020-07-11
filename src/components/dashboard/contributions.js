import React from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

function Contributions() {
    const [collection, setCollection] = React.useState()
    const [Loading, setLoading] = React.useState(true)

    function HandleResponse(data) {
        setCollection(data)
        setLoading(false)
    }

    React.useEffect(() => {
        axios.get("https://thepc.herokuapp.com/api/users/me/contribution", {
            headers: {
                'Authorization': 'Bearer ' + Cookies.get("auth")
            }
        }).then(response => {
            HandleResponse(response.data)
        }).catch(error => {
            console.log(error);
        })
    }, [])


    return (
        <div>
            <ul>
                <li className="text-danger">0 Articles</li>
                <li className="text-warning">1+ Articles</li>
                <li className="text-success">10+ Articles</li>
                <li className="text-info">25+ Articles</li>
                <li className="text-yellow">50+ Articles</li>
            </ul>
            {Loading === false ?
                <table className="table table-dark table-responsive-md table-striped text-center">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Total</th>
                            <th scope="col">Editorial</th>
                            <th scope="col">News</th>
                            <th scope="col">Satire</th>
                            <th scope="col">Facts</th>
                            <th scope="col">Review</th>

                        </tr>
                    </thead>
                    <tbody>
                        {collection.map((item, index) => {
                            return (
                                <tr className={item.contributions.myTotalContribution === 0 ? "text-danger" : item.contributions.myTotalContribution > 0 ? "text-warning" : item.contributions.myTotalContribution >= 10 ? "text-success" : item.contributions.myTotalContribution >= 25 ? "text-info" : item.contributions.myTotalContribution >= 50 && "text-yellow"} >
                                    <th scope="row" >{index + 1}</th>
                                    <td id="tdid" className="">{item.name}</td>
                                    <td id="tdid" ><strong>{item.contributions.myTotalContribution}</strong></td>
                                    <td id="tdid" className="">{item.contributions.myTotalEditorialContribution}</td>
                                    <td id="tdid" className="">{item.contributions.myTotalNewsContibution}</td>
                                    <td id="tdid" className="">{item.contributions.myTotalSatireContribution}</td>
                                    <td id="tdid" className="">{item.contributions.myTotalFactsContribution}</td>
                                    <td id="tdid" className="">{item.contributions.myTotalMovieContribution}</td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
                :
                <div className="alert alert-warning alert-dismissible mt-2" role="alert">
                    Please wait...
                </div>
            }
        </div >
    )
}

export default Contributions;