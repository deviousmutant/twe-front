import React from 'react'

function FormSuccess(props) {
    const success = props.success
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
                            Please check your fields and try again! Password must be 7 characters long
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