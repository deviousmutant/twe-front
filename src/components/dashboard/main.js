import React from 'react'
import Cards from './cards'
import SubmitForm from './submitForm'

function Main(props) {
    const [title, setTitle] = React.useState()
    const page = props.pageName
    React.useEffect(() => {
        setTitle(page)
    }, [page])


    return (
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            {title !== "Dashboard" && <div className="d-flex flex-wrap flex-md-nowrap pt-2 mt-2 mb-4">
                <h1> {title}</h1>
            </div>}

            {page === "Dashboard" ? <Cards name={props.name} /> : <SubmitForm />}


        </main>
    )
}


export default Main