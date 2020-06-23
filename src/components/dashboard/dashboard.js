import React from 'react';
import Navbar from './navbar'
import Sidebar from './sidebar'
import Main from './main'
import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import qs from 'qs'
import Loader from '../error/loader'

function Dashboard(props) {
    const name = Cookies.get("name")
    const auth = Cookies.get("auth")

    document.title = "TWE - Dashboard";
    const [page, setPage] = React.useState("Dashboard");
    const [valid, setValid] = React.useState("false")

    function HandleChange(event) {
        setPage(event)
    }

    function signOut() {
        setValid("false")
    }

    function handleAuth(response) {
        setValid("true")
    }

    React.useEffect(() => {
        axios.post("https://thepc.herokuapp.com/api/check/auth", qs.stringify({}), {
            headers: {
                'Authorization': 'Bearer ' + auth
            }
        }).then(response => {
            handleAuth(response.data)
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        })
    })
    if (valid === "false") {
        if (auth !== undefined) {
            return (
                <Loader />
            )
        } else {
            return (
                <Redirect to="/" />
            );
        }
    } else if (valid === "true") {
        return (
            <div className="dashboard ">
                <Navbar />
                <div className="container-fluid">
                    <div className="row cards-res-margin">
                        <Sidebar
                            pageName={page}
                            handleChangeFunc={HandleChange}
                            signout={signOut}
                        />
                        <Main
                            pageName={page}
                            handleChangeFunc={HandleChange}
                            name={name}
                        />
                    </div>
                </div>
            </div>

        );
    } else {
        return (
            <Redirect to="/" />
        );
    }


}

export default Dashboard;