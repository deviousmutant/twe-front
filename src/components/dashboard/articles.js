import React, { useState } from 'react'
import Card from './article-card'
import Content from './content'

function Articles(p) {
    const [dataArr, setDataArr] = useState([]);

    function HandleOutput(data) {
        setDataArr(data);
    }

    function createCard(articleItem) {
        return <Card title={articleItem.atitle} content={articleItem.acontent} />
    }
    return (
        <div>
            <div class="card-columns" style={{ itemAlign: "top" }}>
                {dataArr.map(createCard)};
                <Content HandleOutput={HandleOutput} />
            </div>
        </div>


    )
}

export default Articles;