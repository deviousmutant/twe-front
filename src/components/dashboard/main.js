import React from 'react'
import Cards from './cards'
import SubmitForm from './submitForm'
import Articles from "./articles"
import AllArticles from "./all-articles"
import Hov from "./hov"
import NewEdition from './newedition'
import Contributions from './contributions'

function Main(props) {
    const [title, setTitle] = React.useState()
    const page = props.pageName
    React.useEffect(() => {
        setTitle(page)
    }, [page])

    switch (page) {
        case "Your Articles":
            {
                return (
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                        <div className="d-flex flex-wrap flex-md-nowrap pt-2 mt-2 mb-4">
                            <h1 className="form-header"> {title}</h1>
                        </div>
                        {<Articles valid={props.valid} />}
                    </main>
                )
            }
        case "New Article":
            {
                return (
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                        <div className="d-flex flex-wrap flex-md-nowrap pt-2 mt-2 mb-4">
                            <h1 className="form-header"> {title}</h1>
                        </div>
                        {<SubmitForm />}
                    </main>
                )
            }
        case "Addition":
            {
                return (
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                        <div className="d-flex flex-wrap flex-md-nowrap pt-2 mt-2 mb-4">
                            <h1 className="form-header"> {title}</h1>
                        </div>
                        {<Hov />}
                    </main>
                )
            }
        case "New Edition":
            {
                return (
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                        <div className="d-flex flex-wrap flex-md-nowrap pt-2 mt-2 mb-4">
                            <h1 className="form-header"> {title}</h1>
                        </div>
                        {<NewEdition />}
                    </main>
                )
            }
        case "All Articles":
            {
                return (
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                        <div className="d-flex flex-wrap flex-md-nowrap pt-2 mt-2 mb-4">
                            <h1 className="form-header"> {title}</h1>
                        </div>
                        {<AllArticles valid={props.valid} />}
                    </main>
                )
            }
        case "Others contribution":
            {
                return (
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                        <div className="d-flex flex-wrap flex-md-nowrap pt-2 mt-2 mb-4">
                            <h1 className="form-header"> {title}</h1>
                        </div>
                        {<Contributions valid={props.valid} />}
                    </main>
                )
            }
        default:
            {
                return (
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                        {<Cards name={props.name} />}
                    </main>
                )
            }
    }
}


export default Main