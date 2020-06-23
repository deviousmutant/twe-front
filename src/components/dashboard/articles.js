import React, { useState } from 'react'
import Card from './card'
import Content from './content'

function Articles(p) {
    const [dataArr,setDataArr]=useState([]);
    function HandleOutput(data)
    {   
        setDataArr(data);
       
        
    }

    
    function createCard(articleItem){
        return <Card title={articleItem.atitle } content={articleItem.acontent } />
    }


    return(

    <div>
        {console.log(dataArr)};
        
        

        <div class="card-columns row card-align-top row-changes" style= {{itemAlign: "top"}}>
            {dataArr.map(createCard)};
        <Content HandleOutput={HandleOutput} />
            
            
        </div>
    </div>


    )
}

export default Articles;