import React,{ useState } from 'react'
function Card(props)
{   
    var [cardContent, setCardContent] = useState(props.content.substring(0,99)+"..");
    var [readState, setReadState] = useState("Read More");


    

    function cardContentToggle()
        {
    
        if(readState==="Read More")
           { setCardContent(props.content);
            setReadState("Read Less");
           }
        else
            {
            setCardContent(props.content.substring(0,99)+"..");    
            setReadState("Read More");
            }
        }   




    return(
        <div class="card p-3 col-lg-3 m-4 card-content card-padding card-res" >
                <img class="card-img-top img-radius " src="img/card_img.jpg" alt="Card image cap" />
                <hr class="line" ></hr>
                <div class="card-body">
                <h5 class="card-title">{ props.title} </h5>
                
                <p class="card-text">{cardContent+ "     "}  
                        <span class="read-more" onClick={cardContentToggle} >    {readState}</span>               
                   </p>
                </div>
                <div class="card-footer ">
                <small class="text-muted">
                     <img class="icon first-icon " src="img/check.svg" /> 
                     <img class="icon second-icon"  src="img/close.svg" /> 
                     <img class="icon third-icon" src="img/comment (6).svg" /> 
                
                
                </small>
                </div>
            </div>
    )
}

export default Card;