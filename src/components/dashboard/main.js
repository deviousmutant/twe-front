import React from 'react'
import Cards from './cards'
import SubmitForm from './submitForm'
import Articles from "./articles"
import Hov from "./hov"

function Main(props) {
    const [title, setTitle] = React.useState()
    const page = props.pageName
    React.useEffect(() => {
        setTitle(page)
    }, [page])

    switch (page) {
        case "Articles":
            {
                return (
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                        <div className="d-flex flex-wrap flex-md-nowrap pt-2 mt-2 mb-4">
                            <h1 className="form-header"> {title}</h1>
                        </div>
                        {<Articles />}
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

            case "New Article":
                {
                    return (
                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                             <div className="d-flex flex-wrap flex-md-nowrap pt-2 mt-2 mb-4">
                                <h1> {title}</h1>
                            </div>
                
                            { <SubmitForm  />}
                
                
                        </main>
                    )
    
    
    
                } 
                
                
                case "Addition":
                    {
                        return (
                            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                                 <div className="d-flex flex-wrap flex-md-nowrap pt-2 mt-2 mb-4">
                                    <h1> {title}</h1>
                                </div>
                    
                                { <Hov  />}
                    
                    
                            </main>
                        )
        
        
        
                    }     

            
            default:
                {
                    return (
                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                             
                
                            { <Cards name={props.name} /> }
                
                
                        </main>
                    )
                }

                
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





    /*    return (
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                {title !== "Dashboard" && <div className="d-flex flex-wrap flex-md-nowrap pt-2 mt-2 mb-4">
                    <h1> {title}</h1>
                </div>}
    
                {page === "Dashboard" ? <Articles name={props.name} /> : <SubmitForm />}
    
    
            </main>
        )*/
}


export default Main