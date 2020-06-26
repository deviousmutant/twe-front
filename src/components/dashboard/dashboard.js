import React from 'react';
import Navbar from './navbar'
import Sidebar from './sidebar'
import Main from './main'
import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import qs from 'qs'
import Loader from '../error/loader'

function Dashboard() {
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
        if (response.admin === false) {
            setValid("true")
        } else if (response.admin === true) {
            setValid("admin")
        } else {
            setValid("false")
        }
    }

    React.useEffect(() => {
        axios.post("https://thepc.herokuapp.com/api/check/auth", qs.stringify({}), {
            headers: {
                'Authorization': 'Bearer ' + auth
            }
        }).then(response => {
            handleAuth(response.data)
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
    } else if (valid === "true" || valid === "admin") {
        return (
            <div className="dashboard ">
                <Navbar />
                <div className="container-fluid">
                    <div className="row cards-res-margin">
                        <Sidebar
                            pageName={page}
                            handleChangeFunc={HandleChange}
                            signout={signOut}
                            valid={valid}

                        />
                        <Main
                            pageName={page}
                            handleChangeFunc={HandleChange}
                            name={name}
                            valid={valid}
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