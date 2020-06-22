import React from 'react';
import Navbar from './navbar'
import Sidebar from './sidebar'
import Main from './main'
import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom'

function Dashboard(props) {
    const name = Cookies.get("name")
    const valid = Cookies.get("valid")
    document.title = "TWE - Dashboard";
    const [page, setPage] = React.useState("Dashboard");

    function HandleChange(event) {
        setPage(event)
    }
    if (valid) {
        return (
            <div className="dashboard">
                <Navbar />
                <div className="container-fluid">
                    <div className="row cards-res-margin">
                        <Sidebar
                            pageName={page}
                            handleChangeFunc={HandleChange}
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