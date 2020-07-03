import React from 'react'

function FormSuccess(props) {
    const success = props.success
    const [message, setMessage] = React.useState("")
    React.useEffect(() => {
        if (props.type === "Register") {
            setMessage("Password must be more than 7 characters")
        } else if (props.type === "Login") {
            setMessage("Incorrect Credentials")
        }
    }, [props.type])

    return (
        <center>
            <div>
                {success === 201 || success === 200 ?
                    <div className="alert alert-success alert-dismissible alert-form" role="alert">
                        Successful!
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    :
                    success === 400 ?
                        <div className="alert alert-danger alert-dismissible alert-form" role="alert">
                            {message}
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        :
                        success === 101 &&
                        <div className="alert alert-warning alert-dismissible alert-form" role="alert">
                            Please wait...
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                }
            </div>
        </center>
    )
}

export default FormSuccess;