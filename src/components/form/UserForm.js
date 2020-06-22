import React from 'react'
import Form from './MainForm'
import Illustration from './Illustration'
import { Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'

function UserForm(props) {
    document.title = "Authorization"
    const [status, setStatus] = React.useState("Welcome");
    const [isAuthorized, setIsAuthorized] = React.useState(false)

    function handleClick(event) {
        const name = event.target.name;
        name === "register-btn" ? setStatus("Register") : setStatus("Login")
    }
    function handleAuth(status, value, auth) {
        Cookies.set("name", value)
        Cookies.set("auth", auth)
        Cookies.set("valid", true)
        setIsAuthorized(status)
    }
    return (
        <div className="Form">
            <div className="Form-box">
                <div className="row row-welcome removing-padding">
                    <Illustration
                        status={status}
                    />
                    <Form
                        status={status}
                        handleClick={handleClick}
                        setStatus={setStatus}
                        auth={isAuthorized}
                        setAuth={handleAuth}
                    />
                    {console.log(isAuthorized)}
                    {isAuthorized === true && <Redirect to="/dashboard" />}
                </div>
            </div>
        </div>
    )
}

export default UserForm